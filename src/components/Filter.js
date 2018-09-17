import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
  }

  handleChange(e) {
    this.props.onFilter(e.target.value.toLowerCase())
  }

  handleChangeCheckbox (e) {
    this.props.onArchived(e.target.checked)
  }

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
          <div className="col-md-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Archived"
                checked={this.props.isArchived}
                onChange={this.handleChangeCheckbox}
               />
              <label className="form-check-label" htmlFor="Archived">
                Скрыть архивные должности
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter
