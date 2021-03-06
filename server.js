const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
  })
}
app.listen(port);