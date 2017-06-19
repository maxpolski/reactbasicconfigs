import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoListWrapper from './TodoListWrapper';

export default () => (
  <BrowserRouter>
    <Route path="/:type?" component={TodoListWrapper} />
  </BrowserRouter>
);
