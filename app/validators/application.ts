import vine from '@vinejs/vine'

export const applicationValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(1).trim(),
    last_name: vine.string().minLength(1).trim(),
    email: vine.string().minLength(1).trim(),
    phone: vine.number().positive().min(1),
    message: vine.string().minLength(1).trim(),
    job_id: vine.number(),
  })
)
