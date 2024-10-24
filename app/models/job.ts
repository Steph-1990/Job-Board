import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Company from '#models/company'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Application from '#models/application'
import User from '#models/user'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare owner_id: number

  @belongsTo(() => User, {
    foreignKey: 'owner_id',
  })
  declare owner: BelongsTo<typeof User>

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare location: string

  @column()
  declare salary_min: number

  @column()
  declare salary_max: number

  @column()
  declare job_type: string

  @column()
  declare company_id: number

  @belongsTo(() => Company, {
    foreignKey: 'company_id',
  })
  declare company: BelongsTo<typeof Company>

  @hasMany(() => Application, {
    foreignKey: 'job_id',
  })
  declare applications: HasMany<typeof Application>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
