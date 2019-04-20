const chairServices = require('../services/chair')

const rateController = {
  async getChairs (ctx) {
    const result = await chairServices.getChairs(ctx.db)
    ctx.body = result
  }
}
module.exports = rateController
