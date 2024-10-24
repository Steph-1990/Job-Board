import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
		this.schema.alterTable(this.tableName, (table) => {
			// Then add the foreign key constraint
			table.foreign('company').references('companies.id')
		})
	}

	async down() {
		this.schema.alterTable(this.tableName, (table) => {
			table.dropForeign('company')
		})
	}
}