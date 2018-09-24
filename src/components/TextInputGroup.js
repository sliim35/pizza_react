import React, { Component } from 'react';

class TextInputGroup extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          name={this.props.name}
          type="text"
          className="form-control form-control-lg"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled ? true : null}
        />
      </div>
    );
  }
}

export default TextInputGroup;
