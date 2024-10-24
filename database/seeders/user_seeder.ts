import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Role from '#models/role'
export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.truncate(true)
    const userRole = await Role.findByOrFail('name', 'User')
    const recruterRole = await Role.findByOrFail('name', 'Recruter')
    const adminRole = await Role.findByOrFail('name', 'Administrator')

    await User.createMany([
      {
        first_name: 'Jean',
        last_name: 'fourche',
        email: 'user@user.fr',
        password: 'userpassword',
        phone_number: '0672470808',
        role_id: userRole.id,
      },
      {
        first_name: 'Marc',
        last_name: 'Lavoine',
        email: 'recruter@recruter.fr',
        password: 'recruterpassword',
        phone_number: '0672470808',
        role_id: recruterRole.id,
      },
      {
        first_name: 'Moi',
        last_name: 'Soneuse',
        email: 'admin@admin.fr',
        password: 'adminpassword',
        phone_number: '0672470808',
        role_id: adminRole.id,
      },
    ])
  }
}
