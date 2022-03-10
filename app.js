const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')


// Importing command modules
const add = require('./commands/add-notes.js')
const remove = require('./commands/remove-notes.js')
const read = require('./commands/read-notes.js')
const list = require('./commands/list-notes.js')

// Creating a read command



yargs.parse()