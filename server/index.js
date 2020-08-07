require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
