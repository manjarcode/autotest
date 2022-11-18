
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function Question({children}) {
    return (
      <>
        {children}
      </>
    )
}

const Title = props => <FormLabel {...props} />
const Answers = props => <RadioGroup {...props} />
const Answer = ({value, children}) => <FormControlLabel label={children} value={value} control={<Radio/>} />

Question.Title = Title
Question.Answers = Answers
Question.Answer = Answer