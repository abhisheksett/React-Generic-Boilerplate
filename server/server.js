const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
const test = require('./routers/test');
const login = require('./routers/login');
const appConfig = require('./routers/app_config');
const userAuthenticated = require('./routers/user_authenticated');

const certOptions = {
  key: fs.readFileSync(path.resolve('server/cert/server.key')),
  cert: fs.readFileSync(path.resolve('server/cert/server.crt'))
};

const app = express();
app.use(cors());
//const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.use('/api/test', test);
app.use('/api/login', login);
app.use('/api/app-config', appConfig);
app.use('/api/isAuthenticated', userAuthenticated);

//app.listen(port, () => console.log(`Listening on port ${port}`));

https.createServer(certOptions, app).listen(443);
