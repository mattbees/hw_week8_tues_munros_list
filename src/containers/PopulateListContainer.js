import { connect } from 'react-redux';
import PopulateList from '../components/PopulateList';

const mapDispatchToProps = (dispatch) => {
  return {
    addMunros: (munrosList) => {
      munrosList.forEach((munro, index) => {
        dispatch({
          type: 'ADD_MUNRO',
          munro
        })
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(PopulateList);
