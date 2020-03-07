'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table
        .integer('question_id')
        .notNullable()
        .references('id')
        .inTable('questions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('text')
      table.boolean('is_correct')
      table.timestamps()

    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
