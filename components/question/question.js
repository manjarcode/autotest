import cx from 'classnames'
import PropTypes from 'prop-types'

import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import styles from './question.module.scss'
export default function Question({children}) {
  return <>{children}</>
}

Question.propTypes = {
  children: PropTypes.node
}

const Title = props => <FormLabel {...props} />
const Answers = props => <RadioGroup {...props} />
const Answer = ({value, isHighlighted, children}) => {
  const className = cx(styles.answer, {[styles.highlighted]: isHighlighted})

  return (
    <span className={className}>
      <FormControlLabel label={children} value={value} control={<Radio />} />
    </span>
  )
}

Answer.propTypes = {
  value: PropTypes.string,
  isHighlighted: PropTypes.bool,
  children: PropTypes.node
}

Question.Title = Title
Question.Answers = Answers
Question.Answer = Answer
