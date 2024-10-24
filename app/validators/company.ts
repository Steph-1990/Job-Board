import vine from '@vinejs/vine'

const urlRegex =
  /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/

export const createPostValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(1).maxLength(255),
    industry: vine.string().trim().minLength(1).maxLength(255),
    website: vine.string().regex(urlRegex),
    description: vine.string().trim().minLength(1),
  })
)

export const updatePostValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(1).maxLength(255),
    industry: vine.string().trim().minLength(1).maxLength(255),
    website: vine.string().regex(urlRegex),
    description: vine.string().trim().minLength(1),
  })
)
