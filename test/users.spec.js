const {findUserById, findUserByEmail} = require('../users')
const assert = require('assert')

describe('The findUserByEmail', () => {
  it('finds a user by email', done => {
    // async test (done function - callback)
    findUserByEmail('david.e.lares@gmail.com').then((response) => {
      // a promise because is async
      assert.equal(response.message, 'User found successfully')
      done() // we need to call the cb later (this is necessary)
    })
  })

  // you can return a promise too
  it('find a user by email (return promise method)', () => {
    return findUserByEmail('david.e.lares@gmail.com').then((response) => {
      assert.equal(response.message, 'User found successfully')
    })
  })

  // using async/await
  it('find a user by email (async/await)', async () => {
    const response = await findUserByEmail('david.e.lares@gmail.com')
    assert.equal(response.message, 'User found successfully')
  })

  // reject
  it('rejects with error if user with email was not found', () => {
    return findUserByEmail('david@facebook.com').then(() => {
      assert.fail('Expected findUserByEmail function to reject')
    }, error => {
      assert.equal(error.message, 'User with email david@facebook.com was not found')
    })
  })
})
