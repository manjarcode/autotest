import {useEffect, useState} from 'react'

import axios from 'axios'

const initialIndex = 0
const emptyQuestion = {
  question: '',
  answers: []
}

export default function useExam() {
  const [test, setTest] = useState({questions: []})
  const [position, setPosition] = useState(initialIndex)
  const [total, setTotal] = useState(initialIndex)
  const [current, setCurrent] = useState(emptyQuestion)
  const [givenAnswers, setGivenAnswers] = useState([])
  const [corrections, setCorrections] = useState([])
  const isLastQuestion = position + 1 >= test.questions.length

  useEffect(() => {
    axios.get('/api/get-exam').then(({data}) => {
      setTest(data)
      setCurrent(data.questions[initialIndex])
      setTotal(data.questions.length)
    })
  }, [])

  function next(answer, isLastQuestion) {
    const nextIndex = position + 1
    setPosition(nextIndex)
    setCurrent(test.questions[nextIndex])

    givenAnswers[position] = answer
    setGivenAnswers(givenAnswers)
    if (isLastQuestion) {
      correct(givenAnswers)
    }
  }

  function correct(givenAnswers) {
    const wrongAnswers = []
    const {questions} = test

    let score = 0
    givenAnswers.forEach((given, index) => {
      const question = questions[index]
      const {answers} = question

      const currentAnswer = answers.find(item => item.value === given)

      if (!currentAnswer || !currentAnswer.isCorrect) {
        wrongAnswers.push({
          given,
          question
        })
      } else {
        score++
      }
    })

    setCorrections({
      score: {
        value: score,
        maxScore: givenAnswers.length
      },
      wrongAnswers
    })
  }

  return {
    current,
    next,
    correct,
    isLastQuestion,
    givenAnswers,
    position: position + 1,
    total,
    corrections
  }
}
