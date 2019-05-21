const munroReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MUNRO':
      return [ action.munro, ...state  ]
    case 'REMOVE_MUNRO':
      const newState = state.slice();
      newState.splice(action.munroIndex, 1)
      return newState
    default:
      return state;
  }
}

export default munroReducer;
