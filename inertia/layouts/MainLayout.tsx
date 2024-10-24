import React, { useState } from 'react'
import { Link, usePage } from '@inertiajs/react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = usePage().props as { user?: { firstName: string; lastName: string } | null }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/inertia/ressources/logo.png" alt="Logo" className="h-20 w-20 mr-0" />
            <Link href="/" className="text-2xl font-bold hover:text-yellow-400">
              Epi'D'Maïs
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
            <Link
              href="/jobs"
              className="text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-green-900 border-2 border-transparent hover:border-yellow-400"
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className="text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-green-900 border-2 border-transparent hover:border-yellow-400"
            >
              Companies
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-green-900 border-2 border-transparent hover:border-yellow-400"
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {user ? (
              <>
                <span className="text-white">
                  Welcome,{' '}
                  <span className="font-semibold">
                    {user.firstName} {user.lastName}{' '}
                  </span>
                </span>
                <Link
                  href="/auth/logout"
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="bg-yellow-400 text-green-900 py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all"
              >
                LogIn/SignIn
              </Link>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-green-500 p-4 rounded-lg">
            <Link href="/jobs" className="block py-2 text-white hover:text-yellow-400">
              Jobs
            </Link>
            <Link href="/companies" className="block py-2 text-white hover:text-yellow-400">
              Companies
            </Link>
            <Link href="/dashboard" className="block py-2 text-white hover:text-yellow-400">
              Dashboard
            </Link>
            {user ? (
              <>
                <span className="block py-2 text-white">
                  Welcome, <span className="font-semibold">{user.firstName}</span>
                </span>
                <div className="flex justify-left mt-2">
                  <Link
                    href="/auth/logout"
                    className="inline-block px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex justify-left mt-2">
                <Link
                  href="/auth/login"
                  className="inline-block px-4 py-2 text-black bg-yellow-400 hover:bg-yellow-500 text-green-900 rounded-lg transition-colors"
                >
                  LogIn/SignIn
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      <main className="flex-grow container mx-auto py-8 px-4">{children}</main>

      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; 2024 Epi'D'Maïs, All rights reserved. Made at Epitech.
          </p>
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link href="/privacy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-yellow-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
