'use strict'

const Question = use('App/Models/Question')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with questions
 */
class QuestionController {
  /**
   * Show a list of all questions.
   * GET questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const questions = await Question.query()
    .with('subject')
    .with('answers')
    .fetch()
    response.send(questions)
  }

  async store ({ request, response }) {
    const data = request.only(['subject_id', 'description'])
    const question = await Question.create({ ...data })
    response.send(question)
  }

  /**
   * Display a single question.
   * GET questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const question = await Question.query()
    .where('id', params.id)
    .with('subject')
    .with('answers')
    .fetch()

    response.send(question)
  }



  /**
   * Update question details.
   * PUT or PATCH questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a question with id.
   * DELETE questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const question = await Question.findOrFail(params.id)

    await question.delete()
  }
}

module.exports = QuestionController
