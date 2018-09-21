import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { roleRus } from '../helpers/rolesRus';

class EditEmployee extends Component {
  render() {
    const { id, name, role, phone, birthday } = this.props.employee;
    return (
      <div className="container">
        <Link className="mt-10" to="/">
          <i className="far fa-hand-point-left" /> Назад
        </Link>
        <div className="card">
          <h5 className="card-header">Данные сотрудника</h5>
          <div className="card-body">
            <p className="card-text">{id}</p>
            <p className="card-text">{name}</p>
            <p className="card-text">{roleRus(role)}</p>
            <p className="card-text">{birthday}</p>
            <p className="card-text">{phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee.employee
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(EditEmployee)
);
