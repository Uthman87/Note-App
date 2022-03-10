const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('../functions')

const add = yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        },
    },

    describe: 'Adding a new note',

    handler: (argv) => notes.addNote(argv.title, argv.body)
    
    // {
    //     notes.addNote(argv.title, argv.body)
    // }
})