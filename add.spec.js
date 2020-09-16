const assert = require('assert') // Node Built-in module
const add = require('./add')
const result = add(1, 4)
const expected = 4

// manual testing (manual assertion)
if(result == expected) {
  console.log('test pass')
} else {
  throw new Error('Expected 1 + 3 equal 4')
}

// using assert (there's a lot of methods)
assert.equal(result, expected, 'Add function does not work properly')
