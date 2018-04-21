import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props);

    this.sorted = {
      role: true,
      birthday: true
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

  sort(type) {
    // с помощью реструктуризации создаём две переменные
    const { update, employees } = this.props
    // получаем порядок сортировки
    const isSorted = this.sorted[type]
    // устанавливаем направление
    let direction = isSorted ? 1 : -1

    // создаём новый массив из данных, чтобы не перезаписывать
    // состояние и сортируем его
    const sorted = [].slice.call(employees).sort((a, b) => {
      // чтобы сортировка всегда была одинаковой учтём все условия
      // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
      // значения метод массивов sort сделает свой выбор
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    })

    // меняем порядок сортировки
    this.sorted[type] = !isSorted;

    // обновляем состояние
    update({
      employees: sorted
    })
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
                    <tr key={emp.id}>
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
