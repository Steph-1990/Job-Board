import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  public async show({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }

  public async store({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }
}
