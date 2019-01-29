import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = { showSideDrawer: false };

  sideDrawerCloserHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawerToggleClicled = () => {
    this.setState(preState => ({ showSideDrawer: !preState.showSideDrawer }));
  };
  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicled={this.drawerToggleClicled}
          clicked={this.sideDrawerCloserHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloserHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
