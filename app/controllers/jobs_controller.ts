import type { HttpContext } from '@adonisjs/core/http'
import Job from '#models/job'
import Company from '#models/company'
import { createJobValidator, updateJobValidator } from '#validators/job'

export default class JobsController {
  async index({ inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const jobs = await Job.query().preload('company')
    return inertia.render('jobs/index', { jobs, user: currentUser })
  }

  async show({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const job = await Job.query().where('id', params.id).preload('company').firstOrFail()
    return inertia.render('jobs/show', { job, user: currentUser })
  }

  async create({ inertia, auth, response }: HttpContext) {
    const currentUser = await auth.authenticate()
    if (currentUser.isUser()) {
      return response.unauthorized('Nice try... Sorry, but : Only recruiters can create jobs.')
    }
    const companies = await Company.all()
    return inertia.render('jobs/create', { companies, user: currentUser })
  }

  async store({ request, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    if (currentUser.isUser()) {
      return response.unauthorized('Nice try... Sorry, but : Only recruiters can create jobs.')
    }
    const data = await request.validateUsing(createJobValidator)
    await Job.create({
      ...data,
      owner_id: currentUser.id,
    })
    return response.redirect('/jobs')
  }

  async edit({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const job = await Job.findOrFail(params.id)
    const companies = await Company.all()
    return inertia.render('jobs/edit', { job, companies, user: currentUser })
  }

  async update({ params, request, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const job = await Job.findOrFail(params.id)
    const data = await request.validateUsing(updateJobValidator)
    job.merge(data)
    await job.save()
    return response.redirect('/jobs')
  }

  async destroy({ params, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const job = await Job.findOrFail(params.id)
    await job.delete()
    return response.redirect('/jobs')
  }
}
