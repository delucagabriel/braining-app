'use strict'

const SubjectModel = use('App/Models/Subject')
const QuestionModel = use('App/Models/Question')
const AnswerModel = use('App/Models/Answer')

/*
|--------------------------------------------------------------------------
| SubsjectSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class SubsjectSeeder {
  async run () {

    // Populando as matérias
    await SubjectModel.create({
      title: "Português"
    })
    await SubjectModel.create({
      title: "Matemática"
    })
    await SubjectModel.create({
      title: "Geografia"
    })
    await SubjectModel.create({
      title: "Biologia"
    })

    // Populando as perguntas
    await QuestionModel.create({
      subject_id: 2,
      description: "Quanto é 1 + 1?"
    })
    await QuestionModel.create({
      subject_id: 2,
      description: "Quanto é 2 + 1?"
    })
    await QuestionModel.create({
      subject_id: 2,
      description: "Quanto é 3 + 1?"
    })

    // Populando as respostas
    await AnswerModel.create({
      question_id: 1,
      text: "1",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 1,
      text: "2",
      is_correct: true
    })
    await AnswerModel.create({
      question_id: 1,
      text: "3",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 1,
      text: "4",
      is_correct: false
    })

    await AnswerModel.create({
      question_id: 2,
      text: "1",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 2,
      text: "2",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 2,
      text: "3",
      is_correct: true
    })
    await AnswerModel.create({
      question_id: 2,
      text: "4",
      is_correct: false
    })


    await AnswerModel.create({
      question_id: 3,
      text: "1",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 3,
      text: "2",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 3,
      text: "3",
      is_correct: false
    })
    await AnswerModel.create({
      question_id: 3,
      text: "4",
      is_correct: true
    })

  }
}

module.exports = SubsjectSeeder
