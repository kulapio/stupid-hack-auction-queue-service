const logger = require('log4js').getLogger('chaincode-service')

// General purpose of chaincode service for query / invoke
// To use, extend from this class add add utility function as you wish.
class ChaincodeService {
  // Initial with chaincode configuration
  constructor (fabricStarterClient, channelId, chaincodeId) {
    this.fabricStarterClient = fabricStarterClient
    this.channelId = channelId
    this.chaincodeId = chaincodeId
  }

  // Query with speicific func name and args
  async query (functionName, args, transientMap=null, targets=null) {
    let result = await this.fabricStarterClient.query(
      this.channelId,
      this.chaincodeId,
      functionName,
      JSON.stringify(args),
      transientMap,
      targets
    );

    logger.info(`result ${JSON.stringify(result)}`)
  
    if(result[0].startsWith('Error')) {
      throw new Error(result[0]);
    }
  
    return result
  }

  // Invoke with speicific func name and args
  async invoke (functionName, args, transientMap=null, targets=null, waitForTransactionEvent=null) {
    let result = await this.fabricStarterClient.invoke(
      this.channelId,
      this.chaincodeId,
      functionName,
      args,
      transientMap,
      targets,
      waitForTransactionEvent
    )

    logger.info(`result ${JSON.stringify(result)}`)

    return result
  }
}

module.exports = ChaincodeService
