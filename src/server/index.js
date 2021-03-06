const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const config = require('./config');

const authOptions = {
  origin: true,
  methods: ['POST', 'PUT', 'DELETE', 'GET'],
  credentials: true,
  maxAge: 3600,
};

app.set('secret', config.secret);
app.set('dbUrl', config.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors(authOptions));

const build_dir = path.resolve(__dirname, '../../build');
app.use(express.static(build_dir));

app.use('/api/v1/', routes);

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
