const validator=require('validator');
const chalk=require('chalk');
const yargs=require('yargs');
const notes=require('./notes.js')

// const command=process.argv[2];
// console.log(process.argv);
// if(command === 'add'){
// 	console.log('Adding Note');
// }

// else if(command === 'remove'){
// 	console.log('Removing Note');
// }

yargs.version('1.1.0')

// Add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder:{
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		// console.log('Title: ' + argv.title)
		// console.log('Body: ' + argv.body)
		notes.addNote(argv.title, argv.body)
	}
})

// Remove Command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder:{
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		notes.removeNote(argv.title)
	}
})

// List command
yargs.command({
	command: 'list',
	describe: 'List the notes',
	handler(){
		notes.listNotes()
	}
})

// Read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder:{
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		notes.readNotes(argv.title)
	}
})

yargs.command({
	command: 'edit',
	describe: 'Edit a note',
	builder:{
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv){
		notes.editNote(argv.title,argv.body)
	}
})

yargs.parse()

// console.log(yargs.argv);