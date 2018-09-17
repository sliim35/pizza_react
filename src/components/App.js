import React, { Component } from 'react'

import List from './List'
import Filter from './Filter'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: [],
      initialItems: [],
      isArchived: false,
      selectedEmployeeData: 1,
      rolesDictionary: {
         cook: 'Повар',
         driver: 'Водитель',
         waiter: 'Официант'
      }
    }

    this.filterEmployees = this.filterEmployees.bind(this)
    this.isArchived = this.isArchived.bind(this)
    this.sorted = this.sorted.bind(this)
    this.showModalForSelectedEmployee = this.showModalForSelectedEmployee.bind(this)
  }

  componentWillMount() {
    fetch('employees.json')
      .then((res) => {
        return res.json()
      })
      .then((employees) => {
        this.setState({
          initialItems: employees,
          employees
        })
      })
  }

  // componentDidMount() {
  //   function loadFile() {
  //     return new Promise((resolve) => {
  //       const xhr = new XMLHttpRequest()
  //
  //       xhr.open('GET', 'employees.json')
  //       xhr.send()
  //       xhr.addEventListener('load', () => {
  //         resolve()
  //       })
  //     })
  //   }
  //
  //   loadFile()
  //     .then(() => {
  //
  //   })
  // }

  showModalForSelectedEmployee(selectedId) {
    this.setState({
      selectedEmployeeData: this.state.initialItems[selectedId - 1]
    })
  }

  filterEmployees(filter) {
    var updatedList = this.state.initialItems.filter((emp) => {
      return emp.name.toLowerCase().match(filter)
    })
     this.setState({
       employees: updatedList
     })
  }

  isArchived(isArchived) {
    this.setState({
      isArchived
    })
  }
  sorted(config) {
    this.setState(config);
  }

  render() {
    let {
      employees,
      selectedEmployeeData,
      rolesDictionary,
      isArchived
    } = this.state

    if (isArchived) {
      employees = employees.filter((emp) => {
        return !emp.isArchive
      })
    }

    return (
      <div>
        <Filter
          onFilter={ this.filterEmployees }
          onArchived={ this.isArchived }
          isArchived={ isArchived }
         />

        <List
          employees={ employees }
          update={ this.sorted }
          showModalForSelectedEmployee={this.showModalForSelectedEmployee}
        />

        <AddEmployee />

        <EditEmployee
          selectedEmployeeData={selectedEmployeeData}
          rolesDictionary={rolesDictionary}
        />
      </div>
    )
  }

}

export default App
