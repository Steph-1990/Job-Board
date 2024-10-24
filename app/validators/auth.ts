import User from '#models/user'
import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string(),
    last_name: vine.string(),
    email: vine
      .string()
      .normalizeEmail()
      .unique(async (db, val) => {
        const existingRecord = await db.from(User.table).where('email', val).first()

        return !existingRecord
      }),
    phone_number: vine.string().mobile({ locale: ['fr-FR'] }),
    password: vine.string().minLength(8),
    role: vine.enum(['user', 'recruiter']),
  })
)
