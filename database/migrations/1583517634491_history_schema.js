'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.create('histories', (table) => {
      table.increments()
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('question_id')
        .notNullable()
        .references('id')
        .inTable('questions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('answer_id')
        .notNullable()
        .references('id')
        .inTable('answers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.decimal('point', 2).unsigned().notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('histories')
  }
}

module.exports = HistorySchema
