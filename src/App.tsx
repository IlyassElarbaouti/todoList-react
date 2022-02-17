import * as React from 'react'
import TodoList from './components/TodoList/TodoList'
import SignIn from './components/Authentication/SignIn/SignIn'
import SignUp from './components/Authentication/SigUp/SignUp'
import Activation from './components/Authentication/Activation/Activation'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/Authentication/NotFound/PageNotFound'

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
