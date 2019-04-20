const partyData = require('./party_data.js')

const partyServices = {
  async getPartyById (db, id) {
    // const result = db.getsomething()
    console.log('getPartyById id: ', id)

    // const result = {
    //   id: 1,
    //   name: 'พรรค A',
    //   budget: 100
    // }
    // return result
    return partyData[id]
  }
}

module.exports = partyServices
