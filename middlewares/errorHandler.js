import utilHelper from "./utility.js"

const createError = (errorMsg = '', statusCode = 500) => {
  let error
  console.log(typeof errorMsg)
  if (typeof errorMsg === 'string' || errorMsg instanceof String) {
    error = Error(errorMsg)
    error.status = statusCode
  } else if (errorMsg instanceof Error) { 
    if (utilHelper.isJson(errorMsg.message)) {
      error = Error(JSON.stringify(JSON.parse(errorMsg.message)))
    } else {
      error = Error(errorMsg)
    }
    error.status = errorMsg.status
  } else {
    error = Error(JSON.stringify(errorMsg))
    error.status = statusCode
  }
  return error
}

export default { createError }