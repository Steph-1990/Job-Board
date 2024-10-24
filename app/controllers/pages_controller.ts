import type { HttpContext } from '@adonisjs/core/http'
import Job from '#models/job'
import Company from '#models/company'
import Application from '#models/application'
import User from '#models/user'

export default class PageController {
  public async home({ inertia, auth }: HttpContext) {
    try {
      const currentUser = await auth.authenticate()
      return inertia.render('home/home', { user: currentUser })
    } catch {
      return inertia.render('home/home', { user: null })
    }
  }

  public async dashboard({ inertia, auth }: HttpContext) {
    const currentUser = await auth.authenticate()

    let data = {}

    if (currentUser.isAdmin()) {
      const jobs = await Job.query().preload('company').preload('owner')
      const companies = await Company.all()
      const applications = await Application.query()
        .preload('job', (query) => query.preload('company'))
        .preload('owner')

      const users = await User.query().select('id', 'first_name', 'last_name', 'email', 'role_id')

      data = {
        jobs,
        companies,
        applications: applications.map((app) => ({
          id: app.id,
          jobTitle: app.job.title,
          companyName: app.job.company.name,
          applicantFirstName: app.owner.first_name,
          applicantLastName: app.owner.last_name,
          applicantPhone: app.owner.phone_number,
        })),
        users: users.map((user) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          role: user.role_id === 1 ? 'User' : user.role_id === 2 ? 'Recruiter' : 'Admin', // Mapping role
        })),
      }
    } else if (currentUser.isRecruiter()) {
      const jobs = await Job.query()
        .where('owner_id', currentUser.id)
        .preload('applications', (query) => query.preload('owner'))
        .preload('company')

      const applications = jobs
        .map((job) =>
          job.applications.map((app) => ({
            id: app.id,
            jobTitle: job.title,
            companyName: job.company.name,
            applicantFirstName: app.owner.first_name,
            applicantLastName: app.owner.last_name,
            applicantPhone: app.owner.phone_number,
          }))
        )
        .flat()

      data = { applications, jobs }
    } else {
      const applications = await Application.query()
        .where('owner_id', currentUser.id)
        .preload('job', (query) => query.preload('company'))

      data = {
        applications: applications.map((app) => ({
          id: app.id,
          jobTitle: app.job.title,
          companyName: app.job.company.name,
          applicantFirstName: currentUser.first_name,
          applicantLastName: currentUser.last_name,
          applicantPhone: currentUser.phone_number,
        })),
      }
    }

    return inertia.render('dashboard/dashboard', { user: currentUser, ...data })
  }
}
