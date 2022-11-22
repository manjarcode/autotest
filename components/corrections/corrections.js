import PropTypes from 'prop-types'

import Question from '../question/question.js'

export default function Corrections({wrongAnswers, score}) {
  return (
    <>
      <div>
        Nota: {score.value} / {score.maxScore}
      </div>
      {wrongAnswers.map(({question: current, given}) => {
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
    </>
  )
}

Corrections.propTypes = {
  wrongAnswers: PropTypes.array,
  score: PropTypes.shape({
    value: PropTypes.number,
    maxScore: PropTypes.number
  })
}
