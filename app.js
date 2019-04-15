const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8888;

const app = express();

/// setting up the static requirements
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

// require the mongoose and routes .js files
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// start our server
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
