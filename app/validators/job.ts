import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createJobValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(1).maxLength(255).trim(),
    description: vine.string().minLength(1).trim(),
    location: vine.string().minLength(1).maxLength(255).trim(),
    salary_min: vine.number().positive().min(1),
    salary_max: vine.number().positive().min(1),
    job_type: vine.enum(['full_time', 'part_time', 'freelance'] as const),
    company_id: vine.number(),
  })
)

export const updateJobValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(1).maxLength(255).trim(),
    description: vine.string().minLength(1).trim(),
    location: vine.string().minLength(1).maxLength(255).trim(),
    salary_min: vine.number().positive(),
    salary_max: vine.number().positive(),
    job_type: vine.enum(['full_time', 'part_time', 'freelance'] as const),
    company_id: vine.number(),
  })
)

const job_errors_messages = {
  number: 'The {{ field }} field must be a number',
  min: 'The {{ field }} field must be at least {{ min }}',
  max: 'The {{ field }} field must not be greater than {{ max }}',
  positive: 'The {{ field }} field must be positive',
}

vine.messagesProvider = new SimpleMessagesProvider(job_errors_messages)
