import path from 'path'
import debug from 'debug'
import express from 'express'
import compression from 'compression'
import cors from 'cors'

import render from './views/render.jsx'
import conf from 'conf/conf'

const log = debug('express')
const app = express()

const { port } = conf

app.use(cors())
app.use(compression())
app.use('/static', express.static(path.resolve(__dirname, '../../public/static')))

app.get('*', (req, res) => {
  res.send(render({
    location: req.url,
    title: 'react-stack'
  }))
})

app.listen(port, () => {
  log(`App is listening port ${port}`)
})
