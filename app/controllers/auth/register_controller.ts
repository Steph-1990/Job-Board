import Company from '#models/company'
import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  // GET request - register page
  async show({ inertia }: HttpContext) {
    const companies = await Company.all()
    return inertia.render('auth/register', { companies })
  }

  // POST request - register action
  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const roleId = data.role === 'user' ? 1 : 2
    const user = await User.create({ ...data, role_id: roleId })

    await auth.use('web').login(user)

    return response.redirect('/')
  }
}
