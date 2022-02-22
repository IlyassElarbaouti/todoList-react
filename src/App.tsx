import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoList from './pages/TodoList/TodoList';
import PageNotFound from './pages/NotFound/PageNotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Activation from './pages/Activation/Activation';
import RootState from './types/RootState';

const App = () => {
  const isAuth = localStorage.getItem('token');
  return (
    <Routes>
      <Route path="/" element={isAuth ? <TodoList /> : <SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/activation" element={<Activation />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
