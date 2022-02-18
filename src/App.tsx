import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList/TodoList';
import PageNotFound from './pages/NotFound/PageNotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Activation from './pages/Activation/Activation';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={localStorage.getItem('token') ? <TodoList /> : <SignIn />}
    />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/activation" element={<Activation />} />
    <Route path="/*" element={<PageNotFound />} />
  </Routes>
);

export default App;
