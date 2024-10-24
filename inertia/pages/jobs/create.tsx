import React, { FormEvent } from 'react'
import { Head, useForm } from '@inertiajs/react'
import MainLayout from '../../layouts/MainLayout'

interface JobForm {
  title: string
  description: string
  location: string
  salary_min: number
  salary_max: number
  job_type: 'full_time' | 'part_time' | 'freelance'
  company_id: number
}

interface Company {
  id: number
  name: string
}

interface CreateJobProps {
  companies: Company[]
}

const CreateJob: React.FC<CreateJobProps> = ({ companies }) => {
  const { data, setData, post, errors } = useForm<JobForm>({
    title: '',
    description: '',
    location: '',
    salary_min: 0,
    salary_max: 0,
    job_type: 'full_time',
    company_id: 0,
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post('/jobs')
  }

  return (
    <>
      <MainLayout>
        <Head title="Create Job" />
        <div className="min-h-screen flex items-center justify-center bg-green-50">
          <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Post a Job Offer</h1>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={data.description}
                  onChange={(e) => setData('description', e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">{errors.description}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => setData('location', e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Salary Min (€)</label>
                <input
                  type="number"
                  value={data.salary_min}
                  onChange={(e) => setData('salary_min', parseFloat(e.target.value))}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.salary_min && (
                  <span className="text-red-500 text-sm">{errors.salary_min}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Salary Max (€)</label>
                <input
                  type="number"
                  value={data.salary_max}
                  onChange={(e) => setData('salary_max', parseFloat(e.target.value))}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.salary_max && (
                  <span className="text-red-500 text-sm">{errors.salary_max}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Job Type</label>
                <select
                  value={data.job_type}
                  onChange={(e) => setData('job_type', e.target.value as JobForm['job_type'])}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="full_time">Full-time</option>
                  <option value="part_time">Part-time</option>
                  <option value="freelance">Freelance</option>
                </select>
                {errors.job_type && <span className="text-red-500 text-sm">{errors.job_type}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <select
                  value={data.company_id}
                  onChange={(e) => setData('company_id', parseInt(e.target.value))}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select a Company</option>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
                {errors.company_id && (
                  <span className="text-red-500 text-sm">{errors.company_id}</span>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default CreateJob
