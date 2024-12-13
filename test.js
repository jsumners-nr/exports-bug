'use strict'

const test = require('node:test')
const assert = require('node:assert')
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

const [,minor] = process.version.split('.')

test('should not blow up', { skip: Number(minor) > 11 }, async () => {
	try {
	await exec('node index.mjs', { cwd: __dirname + '/esm-mod' })
	} catch (error) {
		assert.equal(error.stderr.includes('ERR_REQUIRE_ESM'), true)
	}
})

test('should not blow up', { skip: Number(minor) < 12 }, async () => {
	try {
	await exec('node index.mjs', { cwd: __dirname + '/esm-mod' })
	} catch (error) {
		assert.equal(error.stderr.includes('exports is not defined in ES module scope'), true)
	}
})