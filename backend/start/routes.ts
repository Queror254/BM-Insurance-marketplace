/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.get('/', async ({ view }) => {
  return view.render('leadsform/auto')
})

//Admin Dashboard
Route.get('/admin/dashboard_', 'DashboardsController.admin').as('bm.admin')
//Agent Dashboard
Route.get('/agent', 'DashboardsController.agent').as('bm.agent')

//////////////Insurance Quote Forms//////////
Route.get('/insuranceQuote', 'LeadsController.auto').as('quote.auto')
Route.get('/insuranceQuote/business', 'LeadsController.business').as('quote.business')
Route.get('/insuranceQuote/health', 'LeadsController.health').as('quote.health')
Route.get('/insuranceQuote/life', 'LeadsController.life').as('quote.life')
Route.get('/insuranceQuote/homeowner', 'LeadsController.homeowner').as('quote.homeowner')
Route.get('/insuranceQuote/renters', 'LeadsController.renters').as('quote.renters')
//////// AUTHENTICATION /////////

//  USER ///
Route.post('/auth/register', 'AuthController.register').as('auth.register')
Route.post('/auth/login', 'AuthController.login').as('auth.login')
// show both user login and register pages
Route.get('/register', 'AuthController.showRegister').as('auth.registerShow')
Route.get('/login', 'AuthController.showLogin').as('auth.loginShow')
//logout
Route.get('/auth/logout', 'AuthController.logout').as('auth.logout')


//  ADMIN ///
Route.post('/admin/register', 'AdminsController.register').as('admin.register')
Route.post('/admin/login', 'AdminsController.login').as('admin.login')
// show both user login and register pages
Route.get('/admin/register', 'AdminsController.showRegister').as('admin.registerShow')
Route.get('/admin/login', 'AdminsController.showLogin').as('admin.loginShow')
Route.get('/admin', 'AdminsController.showLogin')
//logout
Route.get('/admin/logout', 'AdminsController.logout').as('admin.logout')


//  AGENT ///
Route.post('/agent/register', 'AgentsController.register').as('agent.register')
Route.post('/agent/login', 'AgentsController.login').as('agent.login')
// show both user login and register pages
Route.get('/agent/register', 'AgentsController.showRegister').as('agent.registerShow')
Route.get('/agent/login', 'AgentsController.showLogin').as('agent.loginShow')
//logout
Route.get('/agent/logout', 'AgentsController.logout').as('agent.logout')


///////////////CREATE INSURANCE LISTINGS /////////////////////////
Route.post('/create/listing', 'ListingsController.create').as('listing.create')

/////////////// Insurance Quote Routes /////////////////////////
//Route.group(() => {
Route.post('/auto/insurance', 'QuotesController.auto').as('auto.quote')
Route.post('/health/insurance', 'QuotesController.health').as('health.quote')
Route.post('/life/insurance', 'QuotesController.life').as('life.quote')
Route.post('/renters/insurance', 'QuotesController.renters').as('renters.quote')
Route.post('/business/insurance', 'QuotesController.business').as('business.quote')
Route.post('/homeowner/insurance', 'QuotesController.home').as('homeowner.quote')
//}).prefix('api/v1');


//////////////// Common resources ////////////////
Route.get('/loading', 'CommonsController.loading').as('page.loading')
Route.get('/quote', 'CommonsController.result').as('page.result')

//////////////////////// Filter //////////////////////////////////
Route.post('/filter', 'FiltersController.filter').as('result.filter')

