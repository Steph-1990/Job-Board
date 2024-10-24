import React from 'react'
import { useForm, Link } from '@inertiajs/react'
import MainLayout from '../../layouts/MainLayout'

const Login: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post('/api/auth/login')
    }

    return (
        <MainLayout>
            <div className="bg-green-50 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto">
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-green-800 mb-6">Login</h1>
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
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-yellow-400 text-green-900 text-center py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50"
                                    >
                                        {processing ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-6 text-center">
                                <Link
                                    href="/auth/register"
                                    className="text-green-600 hover:text-yellow-600"
                                >
                                    No account yet? Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Login
