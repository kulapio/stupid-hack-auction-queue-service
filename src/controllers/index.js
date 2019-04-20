const fs = require('fs')
const path = require('path')
const KoaRouter = require('koa-router')
const requireQueryParams = require('../middlewares/requireQueryParams')

const routeConfigs = fs.readdirSync(__dirname).reduce((current, next) => {
  if (
    next.indexOf('.route') !== -1 &&
    next.indexOf('.') !== 0 &&
    next !== 'index.js'
  ) {
    let config = require(path.join(__dirname, next)).default
    let configName = next.split('.')[0]

    current[configName] = config
  }
  return current
}, {})

let routerObject = new KoaRouter({ prefix: '/api/v1' })
routerObject.options('*', function() {})

for (let key in routeConfigs) {
  let routeConfig = routeConfigs[key]
  let routes = routeConfig.routes
  let controller = routeConfig.controller

  if (!routeConfig) {
    continue
  }

  routes.forEach((route) => {
    let middlewares = []
    if (route.requireParams) {
      middlewares.push((ctx, next) => requireQueryParams(ctx, next, route.requireParams))
    }
    middlewares.push(controller[route.handler])
    routerObject[route.method.toLowerCase()](route.url, ...middlewares)
  })

  routerObject['get']('/', function(ctx) {
    ctx.body = {
      message: 'OK'
    }
  })
}

module.exports = routerObject
