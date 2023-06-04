const express = require('express');
const app = express();
const port = 9999;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());




app.use('/user', require('./routes/users'))





module.exports = app.listen(port, () =>{	
	console.log(`ports app listening on port ${port}`)
})