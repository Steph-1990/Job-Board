import React from 'react'
import { useForm, Link } from '@inertiajs/react'
import MainLayout from '../../layouts/MainLayout';

const Create: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        industry: '',
        website: '',
        description: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post('/companies')
    }

    return (
        <MainLayout>
            <div className="bg-green-50 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-green-800 mb-6">Add a new company</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-green-700">Company name:</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                    />
                                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                </div>
                                <div>
                                    <label htmlFor="industry" className="block text-sm font-medium text-green-700">Industry:</label>
                                    <input
                                        id="industry"
                                        type="text"
                                        value={data.industry}
                                        onChange={(e) => setData('industry', e.target.value)}
                                        required
                                        className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                    />
                                    {errors.industry && <div className="text-red-500 text-sm mt-1">{errors.industry}</div>}
                                </div>
                                <div>
                                    <label htmlFor="website" className="block text-sm font-medium text-green-700">Website:</label>
                                    <input
                                        id="website"
                                        type="text"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        required
                                        className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                    />
                                    {errors.website && <div className="text-red-500 text-sm mt-1">{errors.website}</div>}
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-green-700">Description:</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        required
                                        className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                                        rows={4}
                                    />
                                    {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                                </div>
                                <div className="mt-8 flex space-x-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-yellow-400 text-green-900 py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50"
                                    >
                                        {processing ? 'Adding...' : "Add company"}
                                    </button>
                                    <Link
                                        href="/companies"
                                        className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
                                    >
                                        Back to list of companies
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Create
