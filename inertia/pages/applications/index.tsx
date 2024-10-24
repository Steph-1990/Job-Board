import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import MainLayout from '../../layouts/MainLayout'
import { Link } from '@inertiajs/react'

interface Company {
  name: string
}

interface Job {
  id: number
  title: string
  company: Company
}

interface Application {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: number
  createdAt: string
  job: Job
}

interface ApplicationsProps {
  applications: Application[]
}

export default function ApplicationsIndex({ applications }: ApplicationsProps) {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Job Applications</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <Link
              key={application.id}
              href={`/application/${application.id}`}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{application.job.title}</h2>

              {application.job.company && (
                <p className="text-sm text-gray-500 mb-4">{application.job.company.name}</p>
              )}

              <p className="text-gray-700">
                <span className="font-semibold">Applicant:</span> {application.firstName}{' '}
                {application.lastName}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {application.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> {application.phone}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Submitted on{' '}
                {format(new Date(application.createdAt), 'dd MMMM yyyy, HH:mm', { locale: fr })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
