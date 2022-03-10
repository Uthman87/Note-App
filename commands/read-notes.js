const yargs = require('yargs')
const notes = require('../functions')

const read = yargs.command({
    command: 'read',

    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },

    describe: 'Read note',

    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})

module.exports = read