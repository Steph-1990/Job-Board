/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { Application } from '@adonisjs/core/app'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const UsersController = () => import('#controllers/auth/users_controller')
const JobsController = () => import('#controllers/jobs_controller')
const CompaniesController = () => import('#controllers/companies_controller')
const ApplicationsController = () => import('#controllers/applications_controller')
const PageController = () => import('#controllers/pages_controller')

// router.get('/', [PageController, 'home'])
router.get('/', [PageController, 'home']).as('home.home')
// router.on('/').renderInertia('home/home')

// COMPANIES ROUTES
router.get('/companies', [CompaniesController, 'index']).use(middleware.auth())
router.get('/company/:id', [CompaniesController, 'show']).use(middleware.auth())
router.get('/companies/create', [CompaniesController, 'create']).use(middleware.auth())
router.post('/companies', [CompaniesController, 'store']).use(middleware.auth())
router.get('/company/:id/edit', [CompaniesController, 'edit']).use(middleware.auth())
router.put('/companies/:id', [CompaniesController, 'update']).use(middleware.auth())
router.delete('companies/:id', [CompaniesController, 'destroy']).use(middleware.auth())
// JOBS ROUTES
router.get('/jobs', [JobsController, 'index']).use(middleware.auth())
router.get('/job/:id', [JobsController, 'show']).use(middleware.auth())
router.get('/jobs/create', [JobsController, 'create']).use(middleware.auth())
router.post('/jobs', [JobsController, 'store']).use(middleware.auth())
router.get('/jobs/:id/edit', [JobsController, 'edit']).use(middleware.auth())
router.put('/jobs/:id', [JobsController, 'update']).use(middleware.auth())
router.delete('/jobs/:id', [JobsController, 'destroy']).use(middleware.auth())

// USER ROUTES
router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show')
    router.get('/login', [LoginController, 'show']).as('login.show')
    router.get('/logout', [LogoutController, 'show']).as('logout.show')
  })
  .as('auth')
  .prefix('/auth')
router.get('/user', [UsersController, 'show']).as('user.show')
router
  .group(() => {
    router
      .group(() => {
        router.post('/register', [RegisterController, 'store']).as('register.store')
        router.post('/login', [LoginController, 'store']).as('login.store')
        router.post('/logout', [LogoutController, 'store']).as('logout.store')
        // router.get('/logout', [LogoutController, 'store']).as('logout.show')
      })
      .as('auth')
      .prefix('/auth')
    router
      .group(() => {
        router.post('/edit', [UsersController, 'edit']).as('user.edit')
        router.delete('/delete', [UsersController, 'delete']).as('user.delete')
      })
      .as('user')
      .prefix('/user')
  })
  .as('api')
  .prefix('/api')

// APPLICATIONS ROUTES
router
  .group(() => {
    // router.get('/applications', [ApplicationsController, 'index'])
    router.get('/application/:id', [ApplicationsController, 'show'])
    router.delete('/applications/:id', [ApplicationsController, 'destroy'])
  })
  .use(middleware.auth())
router
  .get('/job/:job_id/application/create', [ApplicationsController, 'create'])
  .use(middleware.auth())
router.post('/job/:job_id/application', [ApplicationsController, 'store']).use(middleware.auth())
// DASHBOARD
router.get('/dashboard', [PageController, 'dashboard']).use(middleware.auth())
