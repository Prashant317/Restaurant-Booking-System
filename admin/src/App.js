import React from 'react'
import './App.css'
import { Switch, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Protect from './Pages/Protect'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div className="App">
            <Switch>
              {/*
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
              */}
                <Protect exact path = "/" component={Dashboard}/>  
                <Route path="/login"
                        render={props => (
                            <Login {...props} />
                        )}>
                </Route>
               {/* <Route exact path="*" render={()=> "404 Not Found!" }/> */}
               <Route exact path="*" component={NotFound} />

            </Switch>
    </div>
  );
}

export default App;
