// express is a framework wrapped on top of node - used for backend development
// npm is a tool that allows us to download libraries from internet (package manager)
// npm is a Node Package manager and comes default with node to manage project dependencies
// npm can install and use modules from either local destinations on my computer / from
//remote locations called npm registry
const express = require("express");
const app = express();
// call the body parser library to parse the post data
// needed to handle post calls.
const bodyParser = require("body-parser");
app.use(bodyParser.json());
console.log(__dirname + "/todo_one/build/");


app.use(express.static(__dirname + "/todo_one/build/"));
const notes = [
  { id: 1, title: "This is a test express server" },
  { id: 2, title: "Why is express server better than node" },
  { id: 3, title: "Why do we need node and benifits of node" },
];

const listItems = [{ task: 'Absolutly anything', status: 'completed' },
{ task: 'be aware', status: 'active' },
{ task: 'call your mom', status: 'completed' },
{ task: 'do things somewhere', status: 'active' },
{ task: 'eat food', status: 'active' }
];
console.log(listItems);



// These are the definitions of what to pass when this url is called
app.get("/", (req, res) => {
  res.json({ x: 5 });
})

app.get("/notes", (req, res) => {
  res.json({
    payload: notes,
    status: true
  });
})

// route to get listitems from UI
app.get("/listItems", (req, res) => {

  res.json({
    payload: listItems,
    status: true
  });
})

// route to put data into the above list
app.post('/putItems', (req, res) => {
  listItems.push(req.body);
  res.json({
    status: "Successfully inserted data into Item list",
    payload: listItems,
  });
})

app.listen(1337);