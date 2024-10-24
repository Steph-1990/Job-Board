import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.text('description').notNullable()
      table.string('location', 255).notNullable()
      table.integer('salary_min')
      table.integer('salary_max')
      table.string('job_type', 255).comment('full_time, part_time, freelance')
      table.integer('company_id').unsigned().notNullable()

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
