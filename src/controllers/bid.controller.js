const bidServices = require('../services/bid')

let isOpenAuction = false

function getJsonFromUrl(url) {
  if(!url) url = location.href;
  var question = url.indexOf("?");
  var hash = url.indexOf("#");
  if(hash==-1 && question==-1) return {};
  if(hash==-1) hash = url.length;
  var query = question==-1 || hash==question+1 ? url.substring(hash) : 
  url.substring(question+1,hash);
  var result = {};
  query.split("&").forEach(function(part) {
    if(!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq>-1 ? part.substr(0,eq) : part;
    var val = eq>-1 ? decodeURIComponent(part.substr(eq+1)) : "";
    var from = key.indexOf("[");
    if(from==-1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]",from);
      var index = decodeURIComponent(key.substring(from+1,to));
      key = decodeURIComponent(key.substring(0,from));
      if(!result[key]) result[key] = [];
      if(!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}

const bidController = {
  getIsOpenAuction (ctx) {
    ctx.body = isOpenAuction
  },
  async postBid (ctx) {
    if (!isOpenAuction) {
      ctx.body = { success: false, message: "Auction is not open." }
      return
    }
    const query = getJsonFromUrl(ctx.request.url)
    const param = {
      party: query.partyId,
      bidTo: query.chairId,
      bidAmount: query.amount
    }
    const result = await bidServices.callBid(ctx.db, param)
    ctx.body = result
  },
  async getLeaderBoard (ctx) {
    const result = await bidServices.getLeaderBoard(ctx.db)
    ctx.body = result
  },
  async postStartAuction (ctx) {
    isOpenAuction = true
    const result = await bidServices.stratAuction(ctx.db)
    ctx.body = result
  },
  async postStopAuction (ctx) {
    isOpenAuction = false
    const result = await bidServices.stopAuction(ctx.db)
    ctx.body = result
  }
}
module.exports = bidController
