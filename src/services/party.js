const partyServices = {
  async getPartyById (db, id) {
    // const result = db.getsomething()
    const result = {
      id: 1,
      name: 'พรรค A',
      budget: 100
    }
    return result
  }
}

module.exports = partyServices
