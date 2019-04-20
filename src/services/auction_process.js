'use strict'
const Auction = require('../models/auction')
const Auction_queue = require('../models/auction_queue')

class Auction_process {
  constructor(knex) {
    this.auction = new Auction(knex)
    this.auction_queue = new Auction_queue(knex)
  }

  async bid(auctionId, userId, price) {

    // get auction state
    let auctionState = await this.auction.getAuction(auctionId)


    // update latest price
    // Todo: use decimal lib instead of prseInt
    console.log('price: ', price, ' auctionState.currentPrice: ', auctionState.currentPrice)
    if (parseInt(price) > parseInt(auctionState.currentPrice)) {
      let updateRes = await this.auction.updateAuction(auctionId, price, userId)
      console.log('update auction result', updateRes)
    }

    // create auction queue
    let output = await this.auction_queue.createAuctionQueue(auctionId, 'bid', userId, price)
    return output
  }
}

module.exports = Auction_process
