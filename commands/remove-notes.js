const yargs = require('yargs')
const notes = require('../functions')

const remove = yargs.command({
    command: 'remove',

    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },

    describe: 'Title of note',

    handler: (argv) => notes.removeNote(argv.title)
    
})

module.exports = remove