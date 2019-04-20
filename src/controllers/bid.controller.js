const bidServices = require('../services/bid')

const bidController = {
  async postBid (ctx) {
    const param = {
      party: ctx.params.partyId,
      bidTo: ctx.params.chairId,
      bidAmount: ctx.params.amount
    }
    const result = await bidServices.callBid(ctx.db, param)
    ctx.body = result
  },
  async getLeaderBoard (ctx) {
    const result = await bidServices.getLeaderBoard(ctx.db)
    ctx.body = result
  },
  async postStartAuction (ctx) {
    const result = await bidServices.stratAuction(ctx.db)
    ctx.body = result
  },
  async postStopAuction (ctx) {
    const result = await bidServices.stopAuction(ctx.db)
    ctx.body = result
  }
}
module.exports = bidController
