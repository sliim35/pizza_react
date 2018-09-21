import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getEmployees,
  saveEmployee,
  changeEmployee
} from '../actions/employeeActions';

import Employee from './Employee';
import Filter from './Filter';

class List extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    console.log(query);
    if (query !== nextProps.query) {
      this.props.changeEmployee(query);
    }
  }

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <Fragment>
        <Filter />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead className="thead-color">
                  <tr>
                    <th>ФИО</th>
                    <th className="sorted" onClick={() => this.sort('role')}>
                      Должность <i className="fas fa-sort" />
                    </th>
                    <th>Телефон</th>
                    <th
                      className="sorted"
                      onClick={() => this.sort('birthday')}
                    >
                      Дата рождения <i className="fas fa-sort" />
                    </th>
                    <th>Редактировать</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.employees.map(emp => (
                    <Employee key={emp.id} emp={emp} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employee.employees,
  query: state.filter.state
});

export default withRouter(
  connect(
    mapStateToProps,
    { getEmployees, saveEmployee, changeEmployee }
  )(List)
);
