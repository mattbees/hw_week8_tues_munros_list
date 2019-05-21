import React, { Component } from 'react';
import Munro from './Munro';
import './MunrosList.css';

class MunrosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: []
    }
    this.listItems = this.listItems.bind(this);
    this.listItemsByHeight = this.listItemsByHeight.bind(this);
    this.listItemsByName = this.listItemsByName.bind(this);
  }

  componentDidMount() {
    this.setState({currentList: this.listItems})
  }

  listItems() {
    console.log('CALL');
    this.props.munros.map((munroData, index) => {
      return <Munro
      munroData={ munroData }
      key={index}
      index={index}
      removeMunro={this.props.removeMunro}
      />
    });
  }

  listItemsByHeight() {
    this.props.munrosByHeight.map((munroData, index) => {
      return <Munro
      munroData={ munroData }
      key={index}
      index={index}
      removeMunro={this.props.removeMunro}
      />
    });
  }

  listItemsByName() {
    this.props.munrosByName.map((munroData, index) => {
      return <Munro
      munroData={ munroData }
      key={index}
      index={index}
      removeMunro={this.props.removeMunro}
      />
    });
  }
  // I would need new removeMunro methods or unique keys to do this accurately

  handleSortByHeightClick() {
    this.setState({currentList: this.listItemsByHeight});
  }

  handleSortByNameClick() {
    this.setState({currentList: this.listItemsByName});
  }

  render() {
    return (
      <>
        <button onClick={ this.handleSortByHeightClick }>Sort by height</button>
        <button onClick={ this.handleSortByNameClick }>Sort alphabetically</button>
        <div id='munros-list'>
        { this.state.currentList }
        </div>
      </>
    );
  }

}

export default MunrosList;
