import React from 'react'
import './App.css'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Login from'./Component/Login'
import SignUp from './Component/SignUp'
import Protect from './Component/Protect'
import Begin from './Component/Begin'
import NotFound from './Component/NotFound'
import Logout from './Component/Logout'
import About from './Component/About'
import Price from './Component/pricing'
import Contact from './Component/Contact'
import Profile from './Component/Profile'
import UpdateProfile from './Component/UpdateProfile'
import Password from './Component/Password'
import Service from './Component/Services'
import MyBookings from './Component/MyBookings'
import MyCompletedBookings from './Component/MyCompletedBookings'

export default class App extends React.PureComponent {

  render() {
 
    return (
      <BrowserRouter>
        <Switch>     
                  <Protect exact path="/" component={Begin}/>
                  <Protect exact path="/about" component={About}/>
                  <Protect exact path="/pricing" component={Price}/>
                  <Protect exact path="/contact" component={Contact}/>
                  <Protect exact path="/profile" component={Profile}/>
                  <Protect exact path="/Update/:id" component={UpdateProfile}/>
                  <Protect exact path="/password" component={Password}/>
                  <Protect exact path="/service" component={Service}/>
                  <Protect exact path="/myBookings" component={MyBookings}/>
                  <Protect exact path="/myCompletedBookings" component={MyCompletedBookings}/>


                  <Route path="/login"
                      render={props => (
                          <Login {...props} />
                      )}>
                  </Route>

                  <Route path="/signup" component={SignUp}/>
                  
                  <Protect exact path="/logout" component={Logout}/>      

                  <Route component={NotFound}/>     
                                         
         </Switch>
      </BrowserRouter>
    )
  }
}