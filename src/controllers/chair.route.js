const chairController = require('./chair.controller')

exports.default = {
  controller: chairController,
  routes: [
    { method: 'get', url: '/chairs', handler: 'getChairs' }
  ]
}
