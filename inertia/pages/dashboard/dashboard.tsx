import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import MainLayout from '../../layouts/MainLayout'
import { useForm } from '@inertiajs/react'

interface Application {
  id: number
  jobTitle: string
  companyName: string
  applicantFirstName: string
  applicantLastName: string
  applicantPhone: string
}

interface Job {
  id: number
  title: string
  companyName: string
  ownerId: number
}

interface Company {
  id: number
  name: string
}

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  role: string
}

interface DashboardProps {
  user: { id: number; firstName: string; lastName: string; roleId: number }
  jobs?: Job[]
  companies?: Company[]
  applications?: Application[]
  users?: User[]
}

export default function Dashboard({ user, jobs, companies, applications, users }: DashboardProps) {
  const { delete: destroy } = useForm()

  const isAdmin = user?.roleId === 3
  const isRecruiter = user?.roleId === 2

  const handleDeleteJob = (id: number) => {
    if (confirm('Are you sure you want to delete this job?')) {
      destroy(`/jobs/${id}`)
    }
  }

  const handleDeleteCompany = (id: number) => {
    if (confirm('Are you sure you want to delete this company?')) {
      destroy(`/companies/${id}`)
    }
  }

  const handleDeleteApplication = (id: number) => {
    if (confirm('Are you sure you want to delete this application?')) {
      destroy(`/applications/${id}`)
    }
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome to your Dashboard, {user.firstName} {user.lastName}
        </h1>

        {/* Admin Panel */}
        {isAdmin && (
          <div className="space-y-8">
            {/* Jobs Table */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-4">Jobs</h2>
                <a href="/jobs/create" className="text-green-600 hover:text-green-800">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Job
                </a>
              </div>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs?.length ? (
                    jobs.map((job) => (
                      <tr key={job.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{job.id}</td>
                        <td className="py-3 px-6">
                          <a href={`/job/${job.id}`} className="text-black">
                            {job.title}
                          </a>
                        </td>
                        <td className="py-3 px-6 space-x-4">
                          <a href={`/jobs/${job.id}/edit`} className="text-black hover:underline">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                          </a>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center py-4">
                        No jobs available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Companies Table */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-4">Companies</h2>
                <a href="/companies/create" className="text-green-600 hover:text-green-800">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Company
                </a>
              </div>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies?.length ? (
                    companies.map((company) => (
                      <tr key={company.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{company.id}</td>
                        <td className="py-3 px-6">
                          <a href={`/company/${company.id}`} className="text-black">
                            {company.name}
                          </a>
                        </td>
                        <td className="py-3 px-6 space-x-4">
                          <a
                            href={`/company/${company.id}/edit`}
                            className="text-black hover:underline"
                          >
                            <FontAwesomeIcon icon={faEdit} /> Edit
                          </a>
                          <button
                            onClick={() => handleDeleteCompany(company.id)}
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center py-4">
                        No companies available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Applications Table */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">First Name</th>
                    <th className="py-3 px-6 text-left">Last Name</th>
                    <th className="py-3 px-6 text-left">Phone</th>
                    <th className="py-3 px-6 text-left">Job Title</th>
                    <th className="py-3 px-6 text-left">Company Name</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications?.length ? (
                    applications.map((application) => (
                      <tr key={application.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{application.id}</td>
                        <td className="py-3 px-6">{application.applicantFirstName}</td>
                        <td className="py-3 px-6">{application.applicantLastName}</td>
                        <td className="py-3 px-6">{application.applicantPhone}</td>
                        <td className="py-3 px-6">
                          <a href={`/job/${application.id}`} className="text-black">
                            {application.jobTitle}
                          </a>
                        </td>
                        <td className="py-3 px-6">
                          <a href={`/company/${application.id}`} className="text-black">
                            {application.companyName}
                          </a>
                        </td>
                        <td className="py-3 px-6 space-x-4">
                          <a
                            href={`/applications/${application.id}`}
                            className="text-black hover:underline"
                          >
                            View Details
                          </a>
                          <button
                            onClick={() => handleDeleteApplication(application.id)}
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-4">
                        No applications available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Users</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">First Name</th>
                    <th className="py-3 px-6 text-left">Last Name</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.length ? (
                    users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{user.id}</td>
                        <td className="py-3 px-6">{user.firstName}</td>
                        <td className="py-3 px-6">{user.lastName}</td>
                        <td className="py-3 px-6">{user.email}</td>
                        <td className="py-3 px-6">{user.role}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center py-4">
                        No users available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recruiter Panel */}
        {isRecruiter && (
          <div className="space-y-8">
            {/* Recruiter Jobs */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Jobs offers</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs
                    ?.filter((job) => job.ownerId === user.id)
                    .map((job) => (
                      <tr key={job.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{job.id}</td>
                        <td className="py-3 px-6">
                          <a href={`/job/${job.id}`} className="text-black">
                            {job.title}
                          </a>
                        </td>
                        <td className="py-3 px-6 space-x-4">
                          <a href={`/jobs/${job.id}/edit`} className="text-black hover:underline">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                          </a>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                  {!jobs?.filter((job) => job.ownerId === user.id).length && (
                    <tr>
                      <td colSpan={4} className="text-center py-4">
                        No jobs available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Applications for Recruiter */}
            <div>
              <h2 className="text-2xl font-semibold">Applications for your jobs offers</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Job Title</th>
                    <th className="py-3 px-6 text-left">Company Name</th>
                    <th className="py-3 px-6 text-left">Applicant</th>
                    <th className="py-3 px-6 text-left">Phone</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications?.length ? (
                    applications.map((application) => (
                      <tr key={application.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{application.id}</td>
                        <td className="py-3 px-6">{application.jobTitle}</td>
                        <td className="py-3 px-6">{application.companyName}</td>
                        <td className="py-3 px-6">
                          {application.applicantFirstName} {application.applicantLastName}
                        </td>
                        <td className="py-3 px-6">{application.applicantPhone}</td>
                        <td className="py-3 px-6 space-x-4">
                          <a
                            href={`/application/${application.id}`}
                            className="text-black hover:underline"
                          >
                            View Details
                          </a>
                          <button
                            onClick={() => handleDeleteApplication(application.id)}
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faTimesCircle} /> Refuse
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-4">
                        No applications for your jobs.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* User Panel */}
        {!isAdmin && !isRecruiter && (
          <div>
            <h2 className="text-2xl font-semibold">Your Applications</h2>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Submitted Applications</h3>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Job Title</th>
                    <th className="py-3 px-6 text-left">Company Name</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications?.length ? (
                    applications.map((application) => (
                      <tr key={application.id} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-6">{application.id}</td>
                        <td className="py-3 px-6">{application.jobTitle}</td>
                        <td className="py-3 px-6">{application.companyName}</td>
                        <td className="py-3 px-6">
                          <a
                            href={`/application/${application.id}`}
                            className="text-black hover:underline"
                          >
                            View Details
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-4">
                        No applications submitted.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
