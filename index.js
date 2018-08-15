var express = require('express')
, path = require('path')
, app = express()
, bodyParser = require('body-parser')
, port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers'));

app.listen(port, function() {
  console.log(`Listening on ${ PORT }`);
});

app.get('/', (req, res) => res.render('pages/index'));