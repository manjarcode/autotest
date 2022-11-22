import {useState} from 'react'

import Corrections from '../components/corrections/corrections.js'
import Exam from '../components/exam/exam.js'
import Layout from '../components/layout/layout.js'
import Question from '../components/question/question.js'
import useExam from '../hooks/useExam.js'
export default function Home() {
  const {current, next, isLastQuestion, position, total, corrections} =
    useExam()
  const [selected, setSelected] = useState()

  const handleChange = (_, value) => {
    setSelected(value)
  }

  const handleNext = () => {
    next(selected)
  }

  const handleCorrect = () => {
    next(selected, isLastQuestion)
  }

  const hasCorrections = Boolean(corrections.score)

  return (
    <Layout>
      {!hasCorrections && (
        <Exam>
          <Exam.Content>
            <Exam.Counter index={position} total={total} />
            <Question>
              <Question.Title>{current.question}</Question.Title>
              <Question.Answers onChange={handleChange}>
                {current.answers.map(({value}) => (
                  <Question.Answer value={value} key={value}>
                    {value}
                  </Question.Answer>
                ))}
              </Question.Answers>
            </Question>
          </Exam.Content>
          <Exam.Actions>
            {isLastQuestion ? (
              <Exam.Correct onClick={handleCorrect}>Corregir</Exam.Correct>
            ) : (
              <Exam.Next onClick={handleNext}>Siguiente pregunta</Exam.Next>
            )}
          </Exam.Actions>
        </Exam>
      )}

      {hasCorrections && (
        <Corrections
          wrongAnswers={corrections.wrongAnswers}
          score={corrections.score}
        />
      )}
    </Layout>
  )
}
