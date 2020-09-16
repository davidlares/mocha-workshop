const parse = (queryString) => {
  if(queryString[0] == "?") {
    queryString = queryString.substring(1)
  }
  let queries = queryString.split("&")
  const params = []
  // iterating
  queries.forEach(query => {
    const queryObject = query.split("=")
    params[queryObject[0]] = queryObject[1]
  })
  // return params
  return params
}

const removeEmpty = (obj) => {
  Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])
  return obj
}

const stringify = (queryObject) => {
  queryObject = removeEmpty(queryObject)
  let queryString = ''
  for(let element of Object.keys(queryObject)) {
    queryString = `${queryString}&${element}=${queryObject[element]}`
  }
  return queryString.substring(1)
}

module.exports = {parse, stringify}
