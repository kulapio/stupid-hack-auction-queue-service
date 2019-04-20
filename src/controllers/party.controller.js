const partyServices = require('../services/party')

const partyController = {
  async getParty (ctx) {
    const result = await partyServices.getPartyById(ctx.db, ctx.request.query.id)
    ctx.body = result
  }
}
module.exports = partyController
