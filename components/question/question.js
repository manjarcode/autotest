import cx from 'classnames'

import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import styles from './question.module.scss'
export default function Question({children}) {
  return <>{children}</>
}

const Title = props => <FormLabel {...props} />
const Answers = props => <RadioGroup {...props} />
const Answer = ({value, children, isHighlighted}) => {
  const className = cx(styles.answer, {[styles.highlighted]: isHighlighted})

  return (
    <span className={className}>
      <FormControlLabel label={children} value={value} control={<Radio />} />
    </span>
  )
}

Question.Title = Title
Question.Answers = Answers
Question.Answer = Answer
