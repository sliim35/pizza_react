import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions/employeeActions';
import { withRouter } from 'react-router-dom';
import { roleRus } from '../helpers/rolesRus';

import TextInputGroup from './TextInputGroup';

class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      role: '',
      phone: '',
      birthday: '',
      isArchive: ''
    };
  }

  componentDidMount() {
    const { id, name, role, phone, birthday, isArchive } = this.props.employee;

    this.setState({
      id,
      name,
      isArchive,
      role,
      phone,
      birthday
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { id, name, role, phone, birthday, isArchive } = this.state;

    const updEmployee = {
      id,
      name,
      isArchive,
      role,
      phone,
      birthday
    };

    console.log(updEmployee);
    this.props.updateEmployee(updEmployee);

    this.props.history.push('/');
  };

  render() {
    const { name, role, phone, birthday } = this.state;
    return (
      <div className="container">
        <Link className="mt-10" to="/">
          <i className="far fa-hand-point-left" /> Назад
        </Link>
        <div className="card mb-3">
          <div className="card-header">Обновить контакт</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Имя"
                name="name"
                placeholder="Введите имя"
                value={name}
                onChange={this.onChange}
              />
              <TextInputGroup
                label="Роль"
                name="role"
                placeholder="Введите должность"
                value={roleRus(role)}
                disabled
              />
              <TextInputGroup
                label="Телефон"
                name="phone"
                placeholder="Введите телефон"
                value={phone}
                onChange={this.onChange}
              />
              <TextInputGroup
                label="День рождения"
                name="birthday"
                placeholder="Введите дату рождения"
                value={birthday}
                onChange={this.onChange}
              />
              <input
                type="submit"
                value="Обновить данные сотрудника"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee.employee
});

export default connect(
  mapStateToProps,
  { updateEmployee }
)(EditEmployee);
