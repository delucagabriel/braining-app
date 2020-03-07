'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
  questions (){
    return this.hasMany('App/Models/Question')
  }
}

module.exports = Subject
