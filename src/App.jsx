import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Edit from './components/edit'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path ="/" component ={Home} />
          <Route exact path ="/edit" component ={Edit} />
        </Switch>
      </Fragment>
    )
  }
}
