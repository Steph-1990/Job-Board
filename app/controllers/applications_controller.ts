import type { HttpContext } from '@adonisjs/core/http'
import Application from '#models/application'
import { applicationValidator } from '#validators/application'
import Job from '#models/job'
// import Company from '#models/company'
export default class ApplicationsController {
  async index({ inertia }: HttpContext) {
    const applications = await Application.query().preload('job', (query) => {
      query.preload('company')
    })

    return inertia.render('applications/index', { applications })
  }
  async show({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    // console.log('Current user:', currentUser)
    const application = await Application.query()
      .where('id', params.id)
      .preload('job', (jobQuery) => {
        jobQuery.preload('company')
      })
      .firstOrFail()

    return inertia.render('applications/show', { application, user: currentUser })
  }
  async create({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const job = await Job.findOrFail(params.job_id)
    return inertia.render('applications/create', { job, user: currentUser })
  }

  async store({ request, response, params, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const data = await request.validateUsing(applicationValidator)
    data.job_id = params.job_id
    // data.owner_id: currentUser.id
    // await Application.create(data)
    await Application.create({
      ...data,
      owner_id: currentUser.id,
    })

    return response.redirect('/dashboard')
  }
  async destroy({ params, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const application = await Application.findOrFail(params.id)
    await application.delete()
    return response.redirect('/')
  }
}
