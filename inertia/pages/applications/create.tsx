import { Head, useForm } from '@inertiajs/react'
import MainLayout from '../../layouts/MainLayout'

interface Job {
  id: number
  title: string
}

interface User {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}
interface CreateApplicationProps {
  job?: Job
  user: User
}

export default function CreateApplication({ job, user }: CreateApplicationProps) {
  const { data, setData, post, errors } = useForm({
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    phone: user.phoneNumber,
    message: '',
    job_id: job ? job.id : '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post(`/job/${job?.id}/application`)
  }

  return (
    <MainLayout>
      <Head title={`Submit Application for ${job ? job.title : 'Job'}`} />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Submit Application for {job ? job.title : 'Job'}
        </h1>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              {errors.first_name && <div className="text-red-500 text-sm">{errors.first_name}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={data.last_name}
                onChange={(e) => setData('last_name', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              {errors.last_name && <div className="text-red-500 text-sm">{errors.last_name}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}
