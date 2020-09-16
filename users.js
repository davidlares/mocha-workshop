const users = require('./db/users') // using the fake DB

// method
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    // auto delay
    setTimeout(() => {
      const user = users.find(user => user.id == id)
      if(!user) {
        return reject(new Error(`User with id ${id} was not found`))
      }
      return resolve({'message': 'User found successfully', user})
    }, 10)
  })
}

// method
const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    // auto delay - for async assertionss
    setTimeout(() => {
      const user = users.find(user => user.email == email)
      if(!user) {
        return reject(new Error(`User with email ${email} was not found`))
      }
      return resolve({'message': 'User found successfully', user})
    })
  })
}

// exporting
module.exports = {findUserById, findUserByEmail}
