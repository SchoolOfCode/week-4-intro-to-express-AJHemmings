// importing express module 
import express from `express`;

// define the server
const app = express();

// define the port the server is located
const port = 3000;

const data = [
    {id: 1, name: Adam},
    {id: 2, name: Caitlin},
    {id: 3, name: Owen}
];

// landing "page" welcome message (it runs)
app.get(`/`, (req, res) => {
    res.send(`Hello World`);
});

app.get(`/users`, (req, res) =>{
    res.json(data);
});

app.get(`/users/id`, (req, res))

// port on the server that will listen for requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});