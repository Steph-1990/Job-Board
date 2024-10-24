import Company from '#models/company'
import type { HttpContext } from '@adonisjs/core/http'
import { createPostValidator, updatePostValidator } from '#validators/company'

export default class CompaniesController {
  public async index({ inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const companies = await Company.all()

    return inertia.render('companies/index', { companies, user: currentUser })
  }

  public async show({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const company = await Company.findOrFail(params.id)
    return inertia.render('companies/show', { company, user: currentUser })
  }

  public async create({ inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    return inertia.render('companies/create')
  }

  public async store({ request, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const data = await request.validateUsing(createPostValidator)
    const company = await Company.create(data)
    return response.redirect().toRoute('/company/:id', { id: company.id, user: currentUser })
  }

  public async edit({ params, inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const company = await Company.findOrFail(params.id)
    return inertia.render('companies/edit', { company, user: currentUser })
  }

  public async update({ params, request, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const data = await request.validateUsing(updatePostValidator)
    const company = await Company.findOrFail(params.id)
    await company.merge(data).save()
    return response.redirect().toRoute('/company/:id', { id: company.id, user: currentUser })
  }

  public async destroy({ params, response, auth }: HttpContext) {
    const currentUser = await auth.authenticate()
    const company = await Company.findOrFail(params.id)
    await company.delete()
    return response.redirect().toRoute('/companies', { id: company.id, user: currentUser })
  }
}
