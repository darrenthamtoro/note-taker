const express = require('express');
const PORT = process.env.port || 3001;
//Installing Express Server 
const app = express();

//Setting up Middleware 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//PUBLIC accesible to express server 
app.use(express.static('public'));

//Set up Routes 


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
