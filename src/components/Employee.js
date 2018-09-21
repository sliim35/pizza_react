import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { roleRus } from '../helpers/rolesRus';

import { saveEmployee } from '../actions/employeeActions';

class Employee extends Component {
  saveEmployeeContact = (name, role, phone, birthday) => {
    const employee = {
      name,
      role,
      phone,
      birthday
    };

    this.props.saveEmployee(employee);
  };

  render() {
    const { id, name, role, phone, birthday } = this.props.emp;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{roleRus(role)}</td>
        <td>{phone}</td>
        <td>{birthday}</td>
        <td>
          <Link
            to={`edit/${name}`}
            onClick={this.saveEmployeeContact.bind(
              this,
              name,
              role,
              phone,
              birthday
            )}
          >
            <i className="far fa-edit" />
          </Link>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { saveEmployee }
)(Employee);
