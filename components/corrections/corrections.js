import PropTypes from 'prop-types'

import Question from '../question/question.js'
import Test from '../test/test.js'

export default function Corrections({corrections}) {
  return (
    <Test>
      <Test.Content>
        {corrections.map(({question: current, given}) => {
          return (
            <Question key={current.question}>
              <Question.Title>{current.question}</Question.Title>
              <Question.Answers value={given}>
                {current.answers.map(({value, isCorrect}) => (
                  <Question.Answer
                    value={value}
                    key={value}
                    isHighlighted={isCorrect}
                  >
                    {value}
                  </Question.Answer>
                ))}
              </Question.Answers>
            </Question>
          )
        })}
      </Test.Content>
    </Test>
  )
}

Corrections.propTypes = {
  corrections: PropTypes.array
}
