'use strict'

class Auction_queue {
  constructor(knex) {
    this.knex = knex
  }

  async getAuctionQueue() {
    let output = await this.knex.select().from('auctionQueue').timeout(3000, {cancel: true})
    return output
  }

  async createAuctionQueue(auctionId, type, userId, price) {
    let output = this.knex('auctionQueue').insert({auctionId: auctionId, type: type, userId, userId, price: price, createdAt: 'now()', updatedAt: 'now()'})

    // let output = await this.knex.select().from('auctionQueue').timeout(3000, {cancel: true})
    return output
  }
}

module.exports = Auction_queue
