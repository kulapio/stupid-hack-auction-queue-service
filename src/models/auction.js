'use strict'

class Auction {
  constructor(knex) {
    this.knex = knex
  }

  async getAuction(auctionId) {
    let result = await this.knex.select().from('auction').where('id', '=', auctionId).timeout(3000, {cancel: true})
    if (0 == result.length) {
      throw Error(`auction not found at id ${auctionId}`)
    }
    return result[0]
  }

  async updateAuction(auctionId, newPrice, newWinner) {
    let result = await this.knex('auction')
      .where('id', '=', auctionId)
      .update({
        currentPrice: newPrice,
        currentWinner: newWinner
      })

    return result
  }

  async getAuctionList() {
    let output = await this.knex.select().from('auction').timeout(3000, {cancel: true})
    return output
  }
}

module.exports = Auction
