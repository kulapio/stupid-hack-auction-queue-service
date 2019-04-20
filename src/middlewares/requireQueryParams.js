const requireQueryParams = async (ctx, next, requires) => {
  let isExistsAll = true
  let missingParams = []
  requires.forEach(require => {
    if (typeof ctx.request.query[require] === 'undefined') {
      isExistsAll = false
      missingParams.push(require)
    }
  })
  if (isExistsAll) {
    await next()
  } else {
    let errMsg = ''
    missingParams.forEach(param => {
      errMsg += `${param}, `
    })
    ctx.status = 400
    ctx.body = {
      status: 'Missing parameter',
      message: `${errMsg.substring(0, errMsg.length - 2)} is require`
    }
  }
}

module.exports = requireQueryParams
