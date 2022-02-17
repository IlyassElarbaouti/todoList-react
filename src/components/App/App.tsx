import * as React from 'react'
import TodoList from './TodoList/TodoList'
import SignIn from './Authentication/SignIn/SignIn'
import SignUp from './Authentication/SigUp/SignUp'
import Activation from './Authentication/Activation/Activation'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PageNotFound from './Authentication/NotFound/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={localStorage.getItem('token') ? <TodoList /> : <SignIn />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/activation" element={<Activation />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
