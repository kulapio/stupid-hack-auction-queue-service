const chairServices = {
  async getChairs (db) {
    // const result = db.getsomething()
    const result = [ // mock
      {
        id: 1,
        name: "กระทรวงเวทมนต์"
      },
      {
        id: 2,
        name: "กระทรวงความมั่งคั่ง"
      },
      {
        id: 3,
        name: "กระทรวงอนาล็อกเพื่อเศรษฐกิจและสังคม"
      },
      {
        id: 4,
        name: "กระทรวงทำลายล้างเท็คโนโลยี"
      },
      {
        id: 5,
        name: "กระทรวงกลาโหม"
      }
    ]
    return result
  }
}

module.exports = chairServices
