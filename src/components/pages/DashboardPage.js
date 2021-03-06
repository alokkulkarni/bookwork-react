import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConfirmEmailMessage from '../messages/confirmEmailMessage';



class DashboardPage extends Component {

    render() {

        const { isConfirmed } = this.props;

        return (
            <div>
              <h1>Dashboard Page </h1>
              {!isConfirmed && <ConfirmEmailMessage />} 
            </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}



export default connect(mapStateToProps)(DashboardPage);