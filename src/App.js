import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as healthActions from "./modules/health";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { HealthActions } = this.props;
    HealthActions.getHealth();
  }

  render() {
    const { context } = this.props;
    console.log(context);

    return <div>hi</div>;
  }
}

export default connect(
  (state) => ({
    context: state.health,
  }),
  (dispatch) => ({
    HealthActions: bindActionCreators(healthActions, dispatch),
  })
)(App);
