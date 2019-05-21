import { connect } from 'react-redux';
import MunroForm from '../components/MunroForm.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addMunro: (munro) => {
      dispatch({
        type: 'ADD_MUNRO',
        munro
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(MunroForm);
