//const { require, argv } = require('yargs')
const yargs = require('yargs')

const notes = require('../functions')
const list = yargs.command({
    command: 'list',
    describe: 'Listing all the saved notes',
    handler: () => {
       notes.listNotes()
    }
})