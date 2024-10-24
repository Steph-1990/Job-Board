import React from 'react'
import MainLayout from '../../layouts/MainLayout'

interface JobShowProps {
  job: {
    id: number
    title: string
    description: string
    location: string
    salaryMin: number
    salaryMax: number
    jobType: string
    company: {
      id: number
      name: string
      description: string
    }
  }
}

const jobTypes: { [key: string]: string } = {
  full_time: 'Full-Time',
  part_time: 'Part-Time',
  freelance: 'Freelance',
}

const JobShow: React.FC<JobShowProps> = ({ job }) => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">{job.title}</h2>
          <p className="text-gray-600 text-center mb-4">Location: {job.location}</p>

          <div className="flex justify-between text-gray-600 mb-4">
            <span>
              Salary: {job.salaryMin}€ - {job.salaryMax}€
            </span>
            <span>Type: {jobTypes[job.jobType]}</span>
          </div>

          <div className="border-t border-gray-200 my-4"></div>
          <h3 className="text-xl font-semibold text-gray-800">Description :</h3>

          <p className="text-gray-600">{job.description}</p>
          <h3 className="text-xl font-semibold text-gray-800">Company: {job.company.name}</h3>
          <p className="text-gray-600 mb-4">{job.company.description}</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default JobShow
