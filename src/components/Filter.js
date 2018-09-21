import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchQuery } from '../actions/filterActions';

class Filter extends Component {
  handleChange = e => {
    this.props.getSearchQuery(e.target.value);
  };

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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.filter.query
});

export default connect(
  mapStateToProps,
  { getSearchQuery }
)(Filter);
