import path from 'path'
import debug from 'debug'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import connectRedis from 'connect-redis'
import compression from 'compression'
import cors from 'cors'

import conf from '../conf/conf'
import render from './render'
import i18n from '../i18n'

const log = debug('express')
const app = express()

const { port } = conf

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const RedisStore = connectRedis(session)

app.use(jsonParser)
app.use(urlencodedParser)
app.use(session({
  // store: new RedisStore({
  //   host: '121.40.92.7',
  //   prefix: 'ms5.me.session:',
  // }),
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
  cookie: { maxAge: 60000 },
  secret: 'ms5.me.3.1415926',
}))

app.use(cors())
app.use(compression())
app.use('/static/', express.static(path.resolve(__dirname, '../public/static')))

app.post('/api/updateLocale', (req, res) => {
  const locale = req.body.locale
  req.session.locale = locale
  res.status(200).send({
    locale,
    value: i18n[locale],
  })
})

app.get('/*', (req, res) => {
  console.log(req.session)
  res.send(
    render({
      req,
      res,
      title: '梅花UI组件',
      location: req.url,
    }),
  )
})

app.listen(port, () => {
  log(`App is listening port ${port}`)
})
