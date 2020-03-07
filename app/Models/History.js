'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class History extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }

  questions (){
    return this.belongsTo('App/Models/Question')
  }

  answers () {
    return this.belongsTo('App/Models/Answer')
  }
}

module.exports = History
