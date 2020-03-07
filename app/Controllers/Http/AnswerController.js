'use strict'

const Answer = use('App/Models/Answer')


class AnswerController {

  async index ({ response }) {
    const answers = await Answer.query()
    .with('question')
    .fetch()
    response.send(answers)
  }

  async store ({ request, response }) {
    const data = request.only(['question_id', 'text', 'is_correct'])
    const answer = await Answer.create({ ...data })
    response.send(answer)
  }


  async show ({ params, response }) {
    const answer = await Answer.query()
    .where('id', params.id)
    .with('question')
    .fetch()

    response.send(answer)
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params }) {
    const answer = await Answer.findOrFail(params.id)

    await answer.delete()
  }
}

module.exports = AnswerController
