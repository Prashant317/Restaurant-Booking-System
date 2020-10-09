import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Home, Feedback } from "@material-ui/icons";
import { Create } from "@material-ui/icons";
import { ViewList } from "@material-ui/icons";
import { Search, People, PersonAdd } from "@material-ui/icons";
import logo from "../media/logo.PNG";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import HomeRestro from "../Components/Home";
import ListRestro from "../Components/List";
import CreateRestro from "../Components/Create";
import SearchRestro from "../Components/Search";
import UpdateRestro from "../Components/Update";
import Logout from "./Logout";
import Login from "./Login";
import Protect from "./Protect";
import "../App.css";
import CreateCat from "../Components/AddCategory";
import ListCat from "../Components/ListCategory";
import UpdateCat from "../Components/UpdateCat";
import Base from './Base'
import Switching from './LoginLogoutSwitch'

import User from '../UserComponents/User'
import AddUser from '../UserComponents/AddUser'
import SearchUser from '../UserComponents/SearchUser'
import Booking from '../UserComponents/Booking'
import SearchBooking from '../UserComponents/SearchBooking'
import DoBooking from '../UserComponents/DoBooking'
import UpdateUser from '../UserComponents/UpdateUser'
import BookingById from '../UserComponents/BookingById'
import UpdateCurrentBooking from '../UserComponents/UpdateCurrentBooking'
import BookingConfirmation from "../UserComponents/BookingConfirmation";
import CompletedBookings from '../UserComponents/CompletedBookings'

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Link to="/" className="imgLink">
              <Typography variant="h4" noWrap>
                <img src={logo} height="40px" style={{ marginRight: "16px" }} alt="logo"/>
                <Typography display="inline" style={{fontSize:"40px"}}>
                  Tamra Restaurant Admin
                </Typography>
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/Home" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/List" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <ViewList />
                  </ListItemIcon>
                  <ListItemText primary="List Restaurant" />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/Create" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <Create />
                  </ListItemIcon>
                  <ListItemText primary="Create Restaurant" />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/Search" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <Search />
                  </ListItemIcon>
                  <ListItemText primary="Search Restaurant" />
                </ListItem>
              </Link>
            </List>

            <Divider />
            <Divider />

            <List>
              <Link to="/Cat" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <Create />
                  </ListItemIcon>
                  <ListItemText primary="Create Category" />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/ListCat" className="link">
                <ListItem button>
                  <ListItemIcon>
                    <ViewList />
                  </ListItemIcon>
                  <ListItemText primary="List Categories" />
                </ListItem>
              </Link>
            </List>

            <Divider />
            <Divider/>


                <List>
                  <Link to="/users" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <People />
                      </ListItemIcon>
                      <ListItemText primary="All Users" />
                    </ListItem>
                  </Link>
                </List>

                <List>
                  <Link to="/addusers" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <PersonAdd />
                      </ListItemIcon>
                      <ListItemText primary="Add User" />
                    </ListItem>
                  </Link>
                </List>

                <List>
                  <Link to="/searchusers" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <Search/>
                      </ListItemIcon>
                      <ListItemText primary="Search User or Booking By UserName" />
                    </ListItem>
                  </Link>
                </List>

              <Divider/>
              <Divider/>

                
                <List>
                  <Link to="/bookings" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <ViewList />
                      </ListItemIcon>
                      <ListItemText primary="List Current Bookings" />
                    </ListItem>
                  </Link>
                </List>

                <List>
                  <Link to="/completedBookings" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <ViewList />
                      </ListItemIcon>
                      <ListItemText primary="List Completed Bookings" />
                    </ListItem>
                  </Link>
                </List>

                <List>
                  <Link to="/searchbookings" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <Search />
                      </ListItemIcon>
                      <ListItemText primary="Search For Bookings" />
                    </ListItem>
                  </Link>
                </List>

                <List>
                  <Link to="/dobookings" className="link">
                    <ListItem button>
                      <ListItemIcon>
                        <Create />
                      </ListItemIcon>
                      <ListItemText primary="Do Bookings" />
                    </ListItem>
                  </Link>
                </List>

            <Divider/>
            <Divider/>


            <Switching/>

            <Divider />
          </div>
        </Drawer>

        <main className={classes.content}>
          <Toolbar />

          <Switch>
            <Protect exact path="/" component={Base}/>
            <Protect exact path="/Home" component={HomeRestro} />
            <Protect exact path="/List" component={ListRestro} />
            <Protect exact path="/Create" component={CreateRestro} />
            <Protect exact path="/Search" component={SearchRestro} />

            <Protect exact path="/Cat" component={CreateCat} />
            <Protect exact path="/ListCat" component={ListCat} />

            <Protect exact path="/users" component={User} />
            <Protect exact path="/addusers" component={AddUser} />
            <Protect exact path="/searchusers" component={SearchUser} />

            <Protect exact path="/bookings" component={Booking} />
            <Protect exact path="/completedBookings" component={CompletedBookings}/>
            <Protect exact path="/searchbookings" component={SearchBooking} />
            <Protect exact path="/dobookings" component={DoBooking} />

            <Route path="/Logout">
              <Logout />
            </Route>
            <Route exact path="/Login" component={Login} />

            <Protect path="/Update/:id" component={UpdateRestro} />
            <Protect path="/UpdateUser/:id" component={UpdateUser} />
            <Protect path="/UpdateCat/:id" component={UpdateCat} />
            <Protect path="/bookingsById/:id" component={BookingById} />
            <Protect path="/updateBooking/:id" component={BookingById} />
            <Protect path="/updateCurrentBooking/:id" component={UpdateCurrentBooking}/>
            <Protect path="/confirm/:id" component={BookingConfirmation} />

          </Switch>
        </main>
      </div>
    </Router>
  );
}
