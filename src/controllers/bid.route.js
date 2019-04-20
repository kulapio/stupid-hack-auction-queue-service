const bidController = require('./bid.controller')

exports.default = {
  controller: bidController,
  routes: [
    { method: 'post', url: '/bid', handler: 'postBid' },
    { method: 'get', url: '/leader-board', handler: 'getLeaderBoard' },
    { method: 'post', url: '/start-auction', handler: 'postStartAuction' },
    { method: 'post', url: '/stop-auction', handler: 'postStopAuction' }
  ]
}
