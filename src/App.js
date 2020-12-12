import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './common/NavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Expenditure from './components/Expenditure'
import SpendInput from './components/SpendInput'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/spend' component={SpendInput} />
        <Route path='/expenditure' component={Expenditure} />

      </Switch>

    </BrowserRouter>

  )
}

export default App
