import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

import * as dataMethods from './data/index';

const PORT = 8080;
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const indexHandler = (req, res) => {
  fs.readFile('./static/index.html', (err, data) => {
    if (!err) {
      res
        .set('Content-Type', 'text/html')
        .send(data);
    }

    console.error(err);
  });
};

app.get('/', indexHandler);

app.get('/todos', (request, responce) => {
  responce
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.getData()));
});

app.post('/todo', (request, responce) => {
  responce
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.addTodo(request.body.caption)));
});

app.post('/toggletodo/:todoId', (request, responce) => {
  responce
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(dataMethods.toggleCompletion(request.params.todoId)));
});

app.all('*', indexHandler);

export default () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};
