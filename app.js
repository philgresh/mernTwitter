/* eslint-disable no-console */
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 5000;
const app = express();
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/tweets', tweets);

app.get('/', (req, res) => {
  console.log(res);
  res.send('Hello Worfdsald');
});
