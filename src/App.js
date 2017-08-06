import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import fusTheme from './fusTheme';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open })}
            />
            <Drawer open={this.state.open} docked={false} onRequestChange={open => this.setState({ open })}>
              <NavLink exact to="/" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose} primaryText={'Home'} />
              </NavLink>
              <NavLink exact to="/logos" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose} primaryText={'Logos'} />
              </NavLink>
              <NavLink exact to="/posters" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose}>Posters</MenuItem>
              </NavLink>
              <NavLink exact to="/letterhead" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose}>Letterhead</MenuItem>
              </NavLink>
              <NavLink exact to="/share-a-story" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose}>Share a Story</MenuItem>
              </NavLink>
              <NavLink exact to="/service-request-form" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose}>Service Request Form</MenuItem>
              </NavLink>
              <NavLink exact to="/tutorial" activeClassName="active">
                <MenuItem onTouchTap={this.handleClose}>Tutorial</MenuItem>
              </NavLink>
            </Drawer>

            <Route exact path="/" render={() => <h1>Home View</h1>} />
            <Route exact path="/logos-posters" render={() => <h1>Logos and Posters View</h1>} />
            <Route exact path="/logos" render={() => <h1>Logos View</h1>} />
            <Route exact path="/posters" render={() => <h1>Posters View</h1>} />
            <Route exact path="/letterhead" render={() => <h1>Letterhead View</h1>} />
            <Route exact path="/share-a-story" render={() => <h1>Share a Story View</h1>} />
            <Route exact path="/planning-guide" render={() => <h1>Planning Guide View</h1>} />
            <Route exact path="/services" render={() => <h1>Services View</h1>} />
            <Route exact path="/glossary" render={() => <h1>Glossary View</h1>} />
            <Route exact path="/service-request-form" render={() => <h1>Service Request Form View</h1>} />
            <Route exact path="/tutorial" render={() => <h1>Tutorial View</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
