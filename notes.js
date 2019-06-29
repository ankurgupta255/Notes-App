const fs=require('fs');
const chalk=require('chalk');

const getNotes=function(){
	return 'Your notes....';
}

const addNote=function(title, body){
	const notes=loadNotes()
	const duplicateNotes=notes.filter(function(note){
		return note.title===title
	})
	if(duplicateNotes.length===0){
	console.log(chalk.green.inverse('New Note Added'))
	notes.push({
		title: title,
		body: body
	})
	saveNotes(notes)
	}
	else{
		console.log(chalk.red.inverse('Note Title Exists Already'))
	}
}

const saveNotes=function(notes){
	const dataJSON=JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
	try{
		const dataBuffer=fs.readFileSync('notes.json')
		const dataJSON=dataBuffer.toString()
		return JSON.parse(dataJSON)
	}
	catch(e){
		return []
	}
}

const removeNote=function(title){
	const notes=loadNotes()
	const duplicateNotes=notes.filter(function(note){
		return note.title===title
	})
	if(duplicateNotes.length > 0){
	console.log(chalk.green.inverse('Note is Deleted'))
	for(var i=0;i<notes.length;i++){
		if(notes[i].title===title){
			notes.splice(i,1)
		}
	}
	saveNotes(notes)
	}
	else{
		console.log(chalk.red.inverse('No such Note Exists'))
	}
}

const listNotes=function(){
	const notes=loadNotes()
	if(notes.length<1){
		console.log(chalk.red.inverse('No Notes Exist'))
	}
	else{
		console.log(chalk.green.inverse('NOTES: '))
		for(var i=0;i<notes.length;i++){
			console.log(notes[i].title)
		}
	}
}
const readNotes=function(title){
	const notes=loadNotes()
	const duplicateNotes=notes.filter(function(note){
		return note.title===title
	})
	if(duplicateNotes.length > 0){
	// console.log(chalk.green.inverse('Note Exists'))
	for(var i=0;i<notes.length;i++){
		if(notes[i].title===title){
			console.log(chalk.green.inverse(notes[i].title))
			console.log(notes[i].body)
			break;
		}
	}
	}
	else{
		console.log(chalk.red.inverse('No such Note Exists'))
	}
}

const editNote=function(title,body){
	const notes=loadNotes()
	const duplicateNotes=notes.filter(function(note){
		return note.title===title
	})
	if(duplicateNotes.length > 0){
	for(var i=0;i<notes.length;i++){
		if(notes[i].title===title){
			console.log(chalk.green.inverse('The Note has been Edited'))
			notes[i].body=body
			console.log('Edited Note')
			console.log(chalk.green.inverse(notes[i].title))
			console.log(notes[i].body)
			break;
		}
	}
	saveNotes(notes)
	}
	else{
		console.log(chalk.red.inverse('No such Note Exists'))
		console.log(chalk.green.inverse('Adding the Note to the List'))
		addNote(title,body)
	}
}


module.exports={
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNotes: readNotes,
	editNote: editNote
};