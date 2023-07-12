const INITIAL_STATE = {
  Operations: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPERATIONS':
      return {
        ...state,
        Operations: [...state.Operations, action.payload],
      };

    default:
      return state;
  }
};
