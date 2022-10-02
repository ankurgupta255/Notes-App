# Notes-App

A Comand Line Controlled Application made using NodeJs which can store your Notes(containing a Title and a Description).

## Prerequisites:

Firstly Clone the repository in your computer and open the command line in the folder.
Then run `npm install` to install all the dependencies

## How to Use:

### Adding a note:

`node app.js add --title="Title of the Note" --body="Body of the note"`

### Removing a note:

`node app.js remove --title="Title of the Note"`

### Listing all the Notes:

`node app.js list`

### Reading a Note:

`node app.js read --title="Title of the Note"`

### Editing a Note:

`node app.js edit --title="Title of the Note" --body="New Content to be added to the note"`
