import React, { Component } from 'react'

import List from './List'
import Filter from './Filter'
import Addemployees from './Addemployees'
import ActiveUser from './ActiveUser'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: [],
      initialItems: [],
      isArchived: false
    }

    this.filterEmployees = this.filterEmployees.bind(this)
    this.isArchived = this.isArchived.bind(this)
    this.sorted = this.sorted.bind(this)
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

    let { employees } = this.state

    if (this.state.isArchived) {
      employees = employees.filter((emp) => {
        return !emp.isArchive
      })

    }

    return (
      <div>
        <Filter
          onFilter={ this.filterEmployees }
          onArchived={ this.isArchived }
          isArchived={ this.state.isArchived }
         />
        <List employees={ employees } update={ this.sorted } />
        <Addemployees />
        <ActiveUser />
      </div>
    )
  }

}

export default App
