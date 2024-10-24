import { Head } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Head title="Job Board - Find Your Next Opportunity" />

      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-green-500 flex-grow">
          <div className="max-w-screen-xl mx-auto py-12 px-4 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-white">
              Find the Job that Matches Your Personnality
            </h2>
            <p className="mt-4 text-lg text-yellow-200">
              Explore hundreds of job opportunities that fit your skills and interests.
            </p>
            <a
              href="/jobs"
              className="mt-8 bg-yellow-400 text-green-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500"
            >
              Browse Jobs
            </a>
          </div>
        </div>
        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-green-700 text-center">Multiple field</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white border border-green-200 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Mechanique</h4>
                <p className="text-green-600">TechNova Solutions</p>
                <p className="text-sm text-gray-600">Paris, France - Full-time</p>
                <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold">
                  View Details
                </a>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Agriculture</h4>
                <p className="text-green-600">DataSphere Analytics</p>
                <p className="text-sm text-gray-600">Lyon, France - Full-time</p>
                <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold">
                  View Details
                </a>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Rasage de moutons</h4>
                <p className="text-green-600">CloudPeak Systems</p>
                <p className="text-sm text-gray-600">Remote - Full-time</p>
                <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-600 py-12">
          <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
            <h3 className="text-2xl font-bold">Looking to hire talented people?</h3>
            <p className="mt-4 mb-6">Post your job on JobBoard and reach the right candidates today.</p>
            <div className="flex justify-center">
              <a
                href="jobs/create"
                className="inline-block bg-yellow-400 text-green-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
              >
                Post a Job
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
