import MainLayout from '../../layouts/MainLayout'
import { Link } from '@inertiajs/react'

interface Company {
  id: number
  name: string
  industry: string
  website: string
  description: string
}

interface CompaniesProps {
  companies: Company[]
}

export default function Companies({ companies }: CompaniesProps) {
  return (
    <MainLayout>
      <div className="bg-green-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Companies</h1>
          <div className="flex flex-wrap -mx-4">
            {companies.map((company) => (
              <div key={company.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-green-700">{company.name}</h2>
                    <br />
                    <p className="text-green-600 mb-4">
                      Industry: <span className="font-medium">{company.industry}</span>
                    </p>
                    <p className="text-green-600 mb-4">
                      Website: <span className="font-medium"> </span>
                      <a
                        href={company.website}
                        target="_blank"
                        className="text-green-800 hover:text-yellow-600"
                        rel="noopener noreferrer"
                      >
                        {company.website}
                      </a>
                    </p>

                    <div className="flex space-x-4 mt-4">
                      <Link
                        href={`/company/${company.id}`}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
