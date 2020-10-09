import React, { Component } from 'react'
import "../App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { LockOpen } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
import {Link} from 'react-router-dom'

export default class LoginLogoutSwitch extends Component {
    render() {
        return (
            <div>
                {
                    localStorage.getItem("login") ?
                        <div>
                        <List>
                          <Link to="/Logout" className="link">
                            <ListItem button>
                              <ListItemIcon>
                                <ExitToApp />
                              </ListItemIcon>
                              <ListItemText primary="Logout" />
                            </ListItem>
                          </Link>
                        </List>
                        </div>
                      : 
                        <div>
                        <List>
                          <Link to="/Login" className="link">
                            <ListItem button>
                              <ListItemIcon>
                                <LockOpen />
                              </ListItemIcon>
                              <ListItemText primary="Login" />
                            </ListItem>
                          </Link>
                        </List>
                      </div>
                }
            </div>
        )
    }
}
