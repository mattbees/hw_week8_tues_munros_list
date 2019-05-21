import { connect } from 'react-redux';
import MunrosList from '../components/MunrosList';

const sortedByHeight = (munros) => {
  const munrosByHeight = [ ...munros];
  return munrosByHeight.sort((a, b) => a.height - b.height);
}

// MDN Array.prototype.sort() for explanation
const sortedByName = (munros) => {
  const munrosByName = [ ...munros];
  return munrosByName.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

const mapStateToProps = (state) => {
  return {
    munros: state,
    munrosByHeight: sortedByHeight(state),
    munrosByName: sortedByName(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMunro: (munroIndex) => {
      dispatch({
        type: 'REMOVE_MUNRO',
        munroIndex
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MunrosList);
