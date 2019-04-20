require('dotenv').config()
const Koa = require('koa')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const router = require('./controllers')
const es = require('./models/elasticsearch')
const responseMiddleware = require('./middlewares/responseMiddleware')

const app = new Koa()
app.context.es = es

app.use(cors())
app.use(koaBody({
  formLimit: '5mb',
  multipart: true
}))

app.use(responseMiddleware)
app.use(router.routes())

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
app.listen(port)
console.log('Environment: ', env)
console.log(`Server is running on http://localhost:${port}/api/v1`)

exports.default = app
