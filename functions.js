const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNote(notes)
        console.log(`New note added!.
        Title: ${title}`)
    } else{
        console.log('Note title taken!')
    }

   
    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const unmatchedTitle = notes.filter((note) => note.title !== title)
    
    // const unmatchedTitle = notes.filter(function(note){
    //     return note.title !== title
    // })
    

   if(notes.length > unmatchedTitle.length) {
       saveNote(unmatchedTitle)
       console.log(chalk.bgGreen(`${title} removed successfully`))
   } else if(notes.length <= unmatchedTitle.length) {
       console.log(chalk.bgRed(`${title} note not found!`))
   }
    
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your notes'))
    const list = notes.forEach((note) => {
        console.log(note.title)
    })
    // return list
}


const readNotes = (title) => {
    const notes = loadNotes()
    const searchResult = notes.find((note) => note.title === title)

    if(searchResult) {
        console.log(chalk.green(searchResult.title))
        console.log(searchResult.body)
    } else {
        console.log(chalk.red('No note found!'))
    }

    
}


const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNote = (note) => {
    const dataJSON = JSON.stringify(note)
    return fs.writeFileSync('notes.json', dataJSON)
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}