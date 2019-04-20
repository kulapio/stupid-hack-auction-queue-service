const { Client } = require('@elastic/elasticsearch')
const es = new Client({ node: process.env.AWS_ES_ENDPOINT })

module.exports = es
