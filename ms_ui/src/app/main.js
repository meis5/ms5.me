import debug from 'debug'
import express from 'express'
import cors from 'cors'

import conf from '../conf/conf'
import render from './render'
import colors from '../web/styles/variables/colors'

const log = debug('express')
const app = express()

const { port } = conf

app.use(cors())

app.get('/*', (req, res) => {
  res.send(
    render({
      state: colors,
      location: req.url,
    }),
  )
})

app.listen(port, () => {
  log(`App is listening port ${port}`)
})
