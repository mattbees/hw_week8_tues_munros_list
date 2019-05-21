import React, { Component } from 'react';
import './MunroForm.css';

class MunroForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      gridref: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newMunro = {
      name: evt.target.name.value,
      height: evt.target.height.value,
      gridref: evt.target.gridref.value
    }
    this.props.addMunro(newMunro);
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      height: '',
      gridref: ''
    });
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit.bind(this) }>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label htmlFor='height'>Height:</label>
        <input
          type='number'
          name='height'
          id='height'
          value={this.state.height}
          onChange={this.handleInputChange}
        />

        <label htmlFor='gridref'>Grid reference:</label>
        <input
          name='gridref'
          id='gridref'
          value={this.state.gridref}
          onChange={this.handleInputChange}
        />

        <input type='submit' value='Add Munro' />
      </form>
    );
  }

};

export default MunroForm;
