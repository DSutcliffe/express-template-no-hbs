// we require the express module
// without ./ means global within project (-g global within VS Code)
const express = require('express');  // npm i express - this allows me to use express server in my project

const app = express();   // now a function we are calling - initialised express to use its features

// four http methods: GET, POST , PUT & DELETE - You may see CRUD for some other stacks (Create, Read, Update & Delete)

// get is a function inside of express - for more info look at module on NPMJS
// for each file you want to load, you need a get.
app.get('/', (req, res) => {                    // each get method should have a req (Request) & res (Response). 
    // sendFile is for express only, no templating engine used.
    res.sendFile(__dirname + '/index.html');    // double underscore '__' for directory name not to get confused with snake_case
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html'); 
})

app.listen(3000, () => {    // listen is all about ports - creates a connection on a specified port (localhost:3000 - Response 'cannot GET /', looking for '/')
    console.log('I am listening on port 3000');
})      

