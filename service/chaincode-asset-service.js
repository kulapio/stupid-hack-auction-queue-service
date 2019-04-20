const ChaincodeService = require('../helper/chaincode-service')
const logger = require('log4js').getLogger('chaincode-asset-service')

class ChaincodeAssetService extends ChaincodeService {
  // Add new item to Asset ledger
  async insert(item) {
    const params = [JSON.stringify(item)]
    logger.info(`params ${params}`)
    let result = await this.invoke('insert', params)
    // let result = await this.invoke('move', ["a","b","1"])
    return result
  }

  // Update partial values of existing item
  async update(id, partialItemData) {
    // const params = [{
    //   id: id,
    //   item: partialItemData
    // }]
    // logger.info(`params ${params}`)
    let result = await this.invoke('update', [id, JSON.stringify(partialItemData)])
    return result
  }

  // Delete a item
  async delete(id) {
    // const params = [{
    //   id: id
    // }]
    // logger.info(`params ${params}`)

    // console.log(`----- id: '${id}' -----`)
    let result = await this.invoke('delete', [id])
    return result
  }

  // List all items with pagination
  async list(start, limit) {
    const params = [{
      start,
      limit
    }]
    logger.info(`params ${JSON.stringify(params)}`)

    // let result = await this.query('assetList', params)
    let result = await this.query('getAllAssets', [])
    return JSON.parse(result[0])
  }
}

module.exports = ChaincodeAssetService
