import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const job_errors_messages = {
  url: 'The website field must be a valid URL',
}

vine.messagesProvider = new SimpleMessagesProvider(job_errors_messages)
