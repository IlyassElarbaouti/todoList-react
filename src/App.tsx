import * as React from 'react'
import TodoList from './components/App/TodoList/TodoList'
import SignIn from './components/App/Authentication/SignIn/SignIn'
import SignUp from './components/App/Authentication/SigUp/SignUp'
import Activation from './components/App/Authentication/Activation/Activation'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/App/Authentication/NotFound/PageNotFound'

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
