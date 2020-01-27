import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import EditItem from './components/edit'
import Todo from './components/todo'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path ="/" component ={Todo} />
          <Route exact path ="/edit/:name/:id" component ={EditItem} />
        </Switch>
      </Fragment>
    )
  }
}
