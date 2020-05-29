import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {Login} from './components/Login'
import { Tareas } from './components/Tareas';
import Nueva from './components/NuevaTarea'
import {Navbar} from './components/Navbar';
import {Provider} from 'react-redux';
import generateStore from './redux/store';


function App() {

  const store = generateStore();

  return (
    <Router>
      <Navbar></Navbar>
      <Provider store={store}>
        <Switch>
          <Route path ="/login" component = {Login} /> 
          <Route path ="/nuevaTarea" component = {Nueva}/>
          <Route path ="/" component = {Tareas} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
