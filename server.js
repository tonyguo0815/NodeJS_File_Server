const express     = require('express'); 
const bodyparser  = require('body-parser');  
const router      = express.Router(); 
const app         = express();

const port = 3030;

const files = require('./routes/files.js');

app.use(router); 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

router.get('/', (req , res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.use('/', files);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})