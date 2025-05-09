'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('/users', 'UserController.index')
  Route.post('/register', 'AuthController.register')
  Route.post('/authenticate', 'AuthController.authenticate')
}).prefix('api/v1')

Route.group(() => {

  Route.resource('/materias', 'SubjectController').apiOnly()
  Route.resource('/questoes', 'QuestionController').apiOnly()
  Route.resource('/respostas', 'AnswerController').apiOnly()
  Route.resource('/history', 'HistoryController').apiOnly()

}).prefix('api/v1')//.middleware('auth')


