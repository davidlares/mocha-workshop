const {parse, stringify} = require('../parse-stringify')
const assert = require('assert')

describe('The stringify function', () => {
  it('should stringify an object into a valid query string', () => {
    const actual = stringify({by: 'david-lares'})
    const expected = 'by=david-lares'
    // evaluate
    assert.equal(actual, expected)
  })
})

describe('The parse function', () => {
  it('should parse a query string into an object', () => {
    const actual = parse('?by=david-lares')
    const expected = {by: 'david-lares'}
    // evaluate
    assert.deepEqual(actual, expected)
  })
})
