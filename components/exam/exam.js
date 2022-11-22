import PropTypes from 'prop-types'

import {Typography} from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import {Box} from '@mui/system'

import styles from './exam.module.scss'

export default function Exam({children}) {
  return (
    <Box>
      <FormControl>{children}</FormControl>
    </Box>
  )
}
Exam.propTypes = {
  children: PropTypes.node
}

const Counter = ({index, total}) => (
  <Box className={styles.counter}>
    <Typography variant="h5">
      Pregunta: {index}/{total}
    </Typography>
  </Box>
)

Counter.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number
}

const Content = props => <Box {...props} />
const Actions = props => <Box className={styles.actions} {...props} />
const Next = props => <Button {...props} variant="contained" size="large" />
const Correct = props => <Button {...props} variant="contained" size="large" />

Exam.Counter = Counter
Exam.Content = Content
Exam.Actions = Actions
Exam.Next = Next
Exam.Correct = Correct
