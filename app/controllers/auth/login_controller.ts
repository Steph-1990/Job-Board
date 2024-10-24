import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  public async store({ request, response, auth, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    if (user) {
      await auth.use('web').login(user)
      return response.redirect().toPath('/')
    } else {
      session.flash('errors', { login: 'Les identifiants fournis sont invalides.' })
      return response.redirect().back()
    }
  }
}
