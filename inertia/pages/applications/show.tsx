import React from 'react'
import MainLayout from '../../layouts/MainLayout'

interface User {
  firstName: string
  lastName: string
  email: string
}

interface ApplicationShowProps {
  application: {
    firstName: string
    lastName: string
    email: string
    phone: number
    message: string
    job: {
      id: number
      title: string
      description: string
      location: string
      salaryMin: number
      salaryMax: number
      jobType: string
      company: {
        name: string
        description: string
      }
    }
  }
  user: User
}

const ApplicationShow: React.FC<ApplicationShowProps> = ({ application, user }) => {
  const { job } = application

  return (
    <MainLayout>
      <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div className="mb-8 border-b pb-6">
          {user ? (
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Your Application Details</h2>
            </div>
          ) : (
            <p className="text-red-500">User not found</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <p className="text-lg font-semibold">
              <span className="text-gray-700">Name:</span> {application.firstName}{' '}
              {application.lastName}
            </p>
            <p className="text-lg font-semibold">
              <span className="text-gray-700">Email:</span> {application.email}
            </p>
            <p className="text-lg font-semibold">
              <span className="text-gray-700">Phone:</span> {application.phone}
            </p>
            <p className="text-lg font-semibold col-span-2 mt-4">
              <span className="text-gray-700">Message:</span> {application.message}
            </p>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Job Details</h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h3>

          <div className="grid grid-cols-2 gap-4">
            <p className="text-lg font-medium">
              <span className="text-gray-700">Location:</span> {job.location}
            </p>
            <p className="text-lg font-medium">
              <span className="text-gray-700">Salary:</span> {job.salaryMin}€ - {job.salaryMax}€
            </p>
            <p className="text-lg font-medium">
              <span className="text-gray-700">Job Type:</span> {job.jobType}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Company: {job.company.name}
            </h4>
            <p className="text-gray-700">{job.company.description}</p>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">Job Description:</h5>
            <p className="text-gray-600">{job.description}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ApplicationShow
