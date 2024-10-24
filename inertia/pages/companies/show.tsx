import MainLayout from '../../layouts/MainLayout'
import { router, Link } from '@inertiajs/react'

interface Company {
  id: number
  name: string
  industry: string
  website: string
  description: string
}

interface ShowProps {
  company: Company
}

export default function Show({ company }: ShowProps) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      router.delete(`/companies/${company.id}`)
    }
  }

  return (
    <MainLayout>
      <div className="bg-green-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-green-800 mb-6">{company.name}</h1>
              <div className="space-y-4">
                <p className="text-green-700">
                  <span className="font-medium">Industry:</span> {company.industry}
                </p>
                <p className="text-green-700">
                  <span className="font-medium">Website:</span>{' '}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-yellow-600"
                  >
                    {company.website}
                  </a>
                </p>
                <p className="text-green-700">
                  <span className="font-medium">Description:</span> {company.description}
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Link
                  href="/companies"
                  className="w-full sm:w-auto text-center bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
