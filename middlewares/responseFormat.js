const responseFormat = (req, res, next) => {
  res.success = (data = '', statusCode = 200) => {
    res.status(statusCode || 200).send({ result: { status: 'success', statuscode: statusCode, data } })
  }

  res.error = (errorMsg, statusCode = 500) => {
    res.status(statusCode || 500).send({ result: { status: 'error', statuscode: statusCode, message: errorMsg } })
  }

  next()
}

export default responseFormat
