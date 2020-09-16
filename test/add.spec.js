const assert = require('assert') // Node Built-in module
const add = require('../add')
const result = add(1, 4)
const expected = 4

// test title
describe('The add function', () => {
  // test case
  it('adds two numbers', () => {
    const actual = add(1, 3)
    const expected = 4
    assert.equal(actual, expected)
  })
})
