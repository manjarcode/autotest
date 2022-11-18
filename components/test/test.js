import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function Test({children}) {
  return <FormControl>
    <Card>
      {children}
    </Card>
  </FormControl>
}

const Counter = ({index, total}) => <Box>{index} / {total}</Box>
const Content = props => <CardContent {...props} />
const Actions = props => <CardActions {...props} />
const Next = props => <Button {...props} />
const Correct = props => <Button {...props} />

Test.Counter = Counter
Test.Content = Content
Test.Actions = Actions
Test.Next = Next
Test.Correct = Correct