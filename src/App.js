import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedIndex: 0
    };
  }
  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open })}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={open => this.setState({ open })}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
