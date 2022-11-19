// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {test} from '../../data/test.js'
export default function handler(req, res) {
  res.status(200).json(test)
}
