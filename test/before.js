
const app = require('../server/app')

global.request = require('supertest')(app)
global.assert = require('assert')