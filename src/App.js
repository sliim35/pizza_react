import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './components/List';
import Filter from './components/Filter';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArchived: false,
      selectedEmployeeData: 1,
      rolesDictionary: {
        cook: 'Повар',
        driver: 'Водитель',
        waiter: 'Официант'
      }
    };

    this.filterEmployees = this.filterEmployees.bind(this);
    this.isArchived = this.isArchived.bind(this);
    this.sorted = this.sorted.bind(this);
    this.showModalForSelectedEmployee = this.showModalForSelectedEmployee.bind(
      this
    );
  }

  showModalForSelectedEmployee(selectedId) {
    this.setState({
      selectedEmployeeData: this.state.initialItems[selectedId - 1]
    });
  }

  filterEmployees(filter) {
    var updatedList = this.state.initialItems.filter(emp => {
      return emp.name.toLowerCase().match(filter);
    });
    this.setState({
      employees: updatedList
    });
  }

  isArchived(isArchived) {
    this.setState({
      isArchived
    });
  }
  sorted(config) {
    this.setState(config);
  }

  render() {
    let { selectedEmployeeData, rolesDictionary, isArchived } = this.state;

    if (isArchived) {
      employees = employees.filter(emp => {
        return !emp.isArchive;
      });
    }

    return (
      <Router>
        <Fragment>
          <Filter
            onFilter={this.filterEmployees}
            onArchived={this.isArchived}
            isArchived={isArchived}
          />

          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/employee/add" component={AddEmployee} />
            <Route exact path="/employee/edit/:id" component={EditEmployee} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
