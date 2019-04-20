const partyController = require('./party.controller')

exports.default = {
  controller: partyController,
  routes: [
    { method: 'get', url: '/party', handler: 'getParty', requireParams: ['id'] }
  ]
}
