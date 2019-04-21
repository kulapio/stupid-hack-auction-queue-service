const Auction_process = require('./auction_process')
const Auction = require('../models/auction.js')
const partyData = require('./party_data.js')

const chairServices = {
  async callBid (db, param) {
    const userId = param.party
    const auctionId = param.bidTo
    const price = param.bidAmount

    console.log('param', param)
    const auction_process = new Auction_process(db)
    let output = await auction_process.bid(auctionId, userId, price) 
    console.log(output)

    const result = { success: true }
    return result
  },
  async getLeaderBoard (db) {
    const auction = new Auction(db)
    let auctionList = await auction.getAuctionList()

    let auctionListTransformed = auctionList.map(auctionInfo => {
      console.log('auctionInfo ', auctionInfo)
      return {
        id: auctionInfo.id,
        chair: auctionInfo.name,
        winnerParty: {
          id:  auctionInfo.currentWinner,
          name: partyData[auctionInfo.currentWinner].name,
          img: partyData[auctionInfo.currentWinner].img,
          color:  partyData[auctionInfo.currentWinner].color
        },
        bidAmount: auctionInfo.currentPrice
      }
    })
    
    return auctionListTransformed
  },
  async stratAuction (db) {
    return { success: true }
  },
  async stopAuction (db) {
    return { success: true }
  }
}

module.exports = chairServices
