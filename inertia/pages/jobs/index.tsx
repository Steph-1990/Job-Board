import { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Link, useForm } from '@inertiajs/react'

interface Company {
  id: number
  name: string
  description: string
}

interface Job {
  id: number
  title: string
  description: string
  location: string
  salaryMin: number
  salaryMax: number
  jobType: string
  company: Company
  ownerId: number
}

interface User {
  id: number
  roleId: number
}

interface JobsProps {
  jobs: Job[]
  user: User | null
}

const jobTypes: { [key: string]: string } = {
  full_time: 'Full-Time',
  part_time: 'Part-Time',
  freelance: 'Freelance',
}

export default function Jobs({ jobs, user }: JobsProps) {
  console.log('User Data:', user)
  console.log('Jobs Data:', jobs)

  const { delete: destroyJob } = useForm()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const isRecruiter = user?.roleId === 2
  const isAdmin = user?.roleId === 3

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this job?')) {
      destroyJob(`/jobs/${id}`)
    }
  }

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job)
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 md:pr-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Explore Our Latest Job Listings
            </h1>

            {isRecruiter && (
              <div className="flex justify-center mb-8">
                <Link
                  href="/jobs/create"
                  className="bg-green-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Post an Offer
                </Link>
              </div>
            )}

            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg w-full max-w-md"
                >
                  <div className="p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{job.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{jobTypes[job.jobType]}</p>
                    <p className="text-gray-700 mb-2 md:mb-4">
                      Location: <span className="font-medium">{job.location}</span>
                    </p>
                    <p className="text-gray-700 mb-2 md:mb-4">
                      Salary:{' '}
                      <span className="font-medium">
                        {job.salaryMin}€ - {job.salaryMax}€
                      </span>
                    </p>
                    <p className="text-gray-600 mb-4 md:mb-6">{job.description.slice(0, 100)}...</p>

                    <div className="flex items-center mb-4">
                      <div className="bg-gray-200 p-2 rounded-full">
                        <svg
                          className="w-4 h-4 md:w-6 md:h-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7l1.29 1.29a1 1 0 001.42 0L12 1l6.29 6.29a1 1 0 001.42 0L21 7M7 8v13a1 1 0 001 1h8a1 1 0 001-1V8"
                          />
                        </svg>
                      </div>
                      <div className="ml-2 md:ml-4">
                        <h3 className="text-base md:text-lg font-semibold">{job.company.name}</h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {job.company.description.slice(0, 60)}...
                        </p>
                      </div>
                    </div>

                    {user && (isAdmin || (isRecruiter && job.ownerId === user.id)) && (
                      <div className="flex justify-between items-center mb-4">
                        <Link
                          href={`/jobs/${job.id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => handleViewDetails(job)}
                      className="inline-block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedJob && (
            <div
              className="hidden md:block w-2/3 p-6 bg-white shadow-lg rounded-lg transition-all duration-300 sticky top-0"
              style={{ alignSelf: 'start' }}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">{selectedJob.title}</h2>

              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Location:</span> {selectedJob.location}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Salary:</span> {selectedJob.salaryMin}€ -{' '}
                {selectedJob.salaryMax}€
              </p>

              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Type:</span> {jobTypes[selectedJob.jobType]}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 mb-4">{selectedJob.description}</p>

              <h3 className="text-lg font-bold text-green-700 mb-2">
                Company: {selectedJob.company.name}
              </h3>

              <div className="flex justify-between items-center mt-6">
                <Link
                  href={`/company/${selectedJob.company.id}`}
                  className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                >
                  View Company
                </Link>
                <button
                  onClick={() =>
                    (window.location.href = `/job/${selectedJob.id}/application/create`)
                  }
                  className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 md:hidden">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-4">{selectedJob.title}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location:</span> {selectedJob.location}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Salary:</span> {selectedJob.salaryMin}€ -{' '}
              {selectedJob.salaryMax}€
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Type:</span> {jobTypes[selectedJob.jobType]}
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600 mb-4">{selectedJob.description}</p>
            <h3 className="text-lg font-bold text-green-700 mb-2">
              Company: {selectedJob.company.name}
            </h3>
            <div className="flex flex-col space-y-4 mt-6">
              <Link
                href={`/company/${selectedJob.company.id}`}
                className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all text-center"
              >
                View Company
              </Link>
              <button
                onClick={() => (window.location.href = `/job/${selectedJob.id}/application/create`)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={() => setSelectedJob(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}
