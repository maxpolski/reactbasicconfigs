import express from 'express';
import fs from 'fs';

import * as dataMethods from './data/index';

const PORT = 8080;
const app = express();

app.use(express.static('static'));

app.get('/', (request, responce) => {
  fs.readFile('./static/index.html', (err, data) => {
    if (!err) {
      responce
        .set('Content-Type', 'text/html')
        .send(data);
    }

    console.error(err);
  });
});

app.get('/todos', (request, responce) => {
  responce
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.getData()));
});

app.post('/todo', (request, responce) => {

});

export default () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};
