const responseMiddleware = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    console.log(e)
    if (e && e.status && e.message) {
      ctx.status = e.status
      ctx.body = {
        message: e.message
      }
    } else {
      ctx.status = 500
      ctx.body = {
        message: 'Oops! Something went wrong.',
        status: 'Error'
      }
    }
  }
}

module.exports = responseMiddleware
