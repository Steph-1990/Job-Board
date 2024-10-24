import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'applications'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('owner_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {}
}
