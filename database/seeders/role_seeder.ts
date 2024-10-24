import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import Role from '#models/role'
export default class RoleSeeder extends BaseSeeder {
  async run() {
    await Role.truncate(true)
    console.log('Démarrage du RoleSeeder')

    try {
      await db.query().from('roles').select('*').limit(1)

      await db
        .table('roles')
        .multiInsert([{ name: 'User' }, { name: 'Recruter' }, { name: 'Administrator' }])
    } catch (error) {
      console.error('Erreur dans le RoleSeeder :', error)
    }
  }
}
