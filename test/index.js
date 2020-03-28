
const MP3Tag = require('../dist/mp3tag.js')
const assert = require('assert')

describe('mp3tag.js Usage', function () {
  it('Throws if not an audio file', function () {
    const uint8 = new Uint8Array([1, 2, 3, 4, 5])
    assert.throws(function () {
      const mp3tag = new MP3Tag(uint8.buffer)
      return mp3tag.read()
    }, /This format is not yet supported/)
  })

  after(function () {
    const tests = this.test.parent.tests
    let success = true

    for (let i = 0; i < tests.length; i++) {
      if (tests[i].state === 'failed') {
        success = false
        break
      }
    }

    if (success) require('./taggers/id3v2')
  })
})
