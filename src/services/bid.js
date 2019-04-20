const chairServices = {
  async callBid (db, param) {
    // const result = db.updatesomething()
    const result = { success: true }
    return result
  },
  async getLeaderBoard (db) {
    return [{"chair":"กลาโหม","winnerParty":{"name":"พรรค A","img":"http://aaaaa.com"},"bidAmount":60},{"chair":"ศึกษาธิการ","winnerParty":{"name":"พรรค B","img":"http://aaaaa.com"},"bidAmount":30},{"chair":"มหาดไทย","winnerParty":{"name":"พรรค C","img":"http://aaaaa.com"},"bidAmount":50},{"chair":"คมนาคม","winnerParty":{"name":"พรรค D","img":"http://aaaaa.com"},"bidAmount":80}]
  },
  async stratAuction (db) {
    return { success: true }
  },
  async stopAuction (db) {
    return { success: true }
  }
}

module.exports = chairServices
