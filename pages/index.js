import {useState} from 'react'

import Corrections from '../components/corrections/corrections'
import Question from '../components/question/question'
import Test from '../components/test/test'
import useTest from '../hooks/useTest'

import styles from '../styles/Home.module.css'

export default function Home() {
  const {current, next, correct, isLastQuestion, position, total, corrections} =
    useTest()
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

  const hasCorrections = corrections.length > 0

  return (
    <div className={styles.container}>
      {!hasCorrections && (
        <Test>
          <Test.Counter index={position} total={total} />
          <Test.Content>
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
          </Test.Content>
          <Test.Actions>
            {isLastQuestion ? (
              <Test.Correct onClick={handleCorrect}>Corregir</Test.Correct>
            ) : (
              <Test.Next onClick={handleNext}>Siguiente</Test.Next>
            )}
          </Test.Actions>
        </Test>
      )}

      {hasCorrections && <Corrections corrections={corrections} />}
    </div>
  )
}
