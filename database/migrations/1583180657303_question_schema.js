'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table
        .integer('subject_id')
        .notNullable()
        .references('id')
        .inTable('questions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('description')
      table.timestamps()

    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
