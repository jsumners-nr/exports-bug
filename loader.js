'use strict'

const path = require('node:path')
const toLoad = path.join(process.cwd(), 'data.js')

module.exports = require(toLoad).data