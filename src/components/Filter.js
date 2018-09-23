import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeEmployee, getEmployees } from '../actions/employeeActions';
import { getSearchQuery } from '../actions/filterActions';

class Filter extends Component {
  handleChange = e => {
    if (e.target.value) {
      this.props.changeEmployee(e.target.value);
      this.props.getSearchQuery(e.target.value);
    } else {
      this.props.getEmployees();
    }
  };

  render() {
    return (
      <div className="container mt100 mb30">
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Введите ФИО"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { changeEmployee, getEmployees, getSearchQuery }
)(Filter);
