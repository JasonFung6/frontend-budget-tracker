import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './common/NavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Summary from './components/Summary'
import Expenses from './components/Expenses'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/expenses' component={Expenses} />
        <Route path='/summary' component={Summary} />

      </Switch>

    </BrowserRouter>

  )
}

export default App
