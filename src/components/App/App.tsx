import * as React from 'react'
import TodoList from './TodoList/TodoList'
import SignIn from './Authentication/SignIn/SignIn'
import SignUp from './Authentication/SigUp/SignUp'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import PageNotFound from './Authentication/NotFound/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/todo-list" element={<TodoList />} />
    </Routes>
  )
}

export default App
