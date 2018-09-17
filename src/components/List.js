import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props);

    this.sorted = {
      role: false,
      birthday: false
    }
  }

  roleRus(role) {
    switch (role) {

      case 'cook':
        return 'Повар'
        break

      case 'driver':
        return 'Водитель'
        break

      case 'waiter':
        return 'Официант'
        break

    default:
      return 'Не указано'
      break
    }
  }

  convertToTS(dateStr) {
    const date = dateStr.split('.')
    return new Date(date[2] + '-' + date[1] + '-' + date[0]).getTime()
  }

  sort(type) {
    const { update, employees } = this.props
    const isSorted = this.sorted[type]
    let direction = isSorted ? 1 : -1

    const sorted = [].slice.call(employees).sort((a, b) => {
      if (type === 'birthday') {
        const aConverted = this.convertToTS(a[type])
        const bConverted = this.convertToTS(b[type])

        if (aConverted === bConverted) { return 0; }
        return aConverted > bConverted ? direction : direction * -1;
      } else {
        if (a[type] === b[type]) { return 0; }
        return a[type] > b[type] ? direction : direction * -1;
      }
    })

    // меняем порядок сортировки
    this.sorted[type] = !isSorted;

    // обновляем состояние
    update({
      employees: sorted
    })
  }

  showModal = (e) => {
    this.props.showModalForSelectedEmployee(e.currentTarget.getAttribute('data-id'))
    $('#exampleModal').modal()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead className="thead-color">
                <tr>
                  <th>ФИО</th>
                  <th className="sorted" onClick={() => this.sort('role')}>
                    Должность <i className="fas fa-sort"></i>
                  </th>
                  <th>Телефон</th>
                  <th className="sorted" onClick={() => this.sort('birthday')}>
                    Дата рождения <i className="fas fa-sort"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees.map((emp) => {
                  return(
                    <tr
                      onClick={this.showModal}
                      key={emp.id}
                      data-id={emp.id}
                    >
                      <td>{emp.name}</td>
                      <td>
                        {this.roleRus(emp.role)}
                      </td>
                      <td>{emp.phone}</td>
                      <td>{emp.birthday}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default List
