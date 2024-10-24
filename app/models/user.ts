import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import Role from '#models/role'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Company from '#models/company'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare role_id: number

  @hasOne(() => Role, {
    foreignKey: 'role_id',
  })
  declare role: HasOne<typeof Role>

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare email: string

  @column()
  declare phone_number: string

  @column({ serializeAs: null })
  declare password: string

  @hasOne(() => Company, {
    foreignKey: 'id',
  })
  declare company: HasOne<typeof Company> | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  public isUser(): boolean {
    return this.role_id === 1
  }

  public isRecruiter(): boolean {
    return this.role_id === 2
  }

  public isAdmin(): boolean {
    return this.role_id === 3
  }
}
