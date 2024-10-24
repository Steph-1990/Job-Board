import React from 'react'
import { useForm, Head, Link } from '@inertiajs/react'
import MainLayout from '../../layouts/MainLayout'

interface Company {
  id: number
  name: string
}

interface Props {
  companies: Company[]
}

const Register: React.FC<Props> = ({ companies }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: '',
    role: 'user',
    company: 0,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    post('/api/auth/register')
  }

  return (
    <MainLayout>
      <Head title="Sign up" />
      <div className="bg-green-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-green-800 mb-6">Sign up</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-700">Email address:</label>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-green-700">First name:</label>
                  <input
                    id="first_name"
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData('first_name', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  {errors.first_name && <div className="text-red-500 text-sm mt-1">{errors.first_name}</div>}
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-green-700">Last name:</label>
                  <input
                    id="last_name"
                    type="text"
                    value={data.last_name}
                    onChange={(e) => setData('last_name', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  {errors.last_name && <div className="text-red-500 text-sm mt-1">{errors.last_name}</div>}
                </div>

                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-green-700">Phone number:</label>
                  <input
                    id="phone_number"
                    type="tel"
                    value={data.phone_number}
                    onChange={(e) => setData('phone_number', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  {errors.phone_number && <div className="text-red-500 text-sm mt-1">{errors.phone_number}</div>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-green-700">Password:</label>
                  <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  />
                  {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-green-700">Role:</label>
                  <select
                    id="role"
                    value={data.role}
                    onChange={(e) => setData('role', e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                  >
                    <option value="user">User</option>
                    <option value="recruiter">Recruiter</option>
                  </select>
                  {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                </div>

                {data.role === 'recruiter' && (
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-green-700">Company:</label>
                    <select
                      id="company"
                      value={data.company}
                      onChange={(e) => setData('company', parseInt(e.target.value))}
                      required
                      className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                    >
                      <option value="">Select a company</option>
                      {companies.map((company) => (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      ))}
                    </select>
                    {errors.company && <div className="text-red-500 text-sm mt-1">{errors.company}</div>}
                  </div>
                )}

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-yellow-400 text-green-900 text-center py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50"
                  >
                    {processing ? 'Signing up...' : 'Sign up'}
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <Link
                  href="/auth/login"
                  className="text-green-600 hover:text-yellow-600"
                >
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Register
