import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'applications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').notNullable()
      table.integer('phone').notNullable()
      table.text('message').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('job_id').unsigned().notNullable()

      table.foreign('job_id').references('id').inTable('jobs').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
