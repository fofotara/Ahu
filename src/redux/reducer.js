const INITIAL_STATE = {
  OperationName: '',
  TopName: '',
  TopCoordinate: {},
  TopTarget: null,
  TopTim: [],
  TimAction: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPERATION_NAME':
      return {...state, OperationName: action.payload};

    case 'SET_TOP_NAME':
      return {...state, TopName: action.payload};

    case 'SET_TOP_COORDINATE':
      return {...state, TopCoordinate: action.payload};

    case 'SET_TOP_TARGET':
      return {...state, TopTarget: action.payload};

    case 'SET_TOP_TIM':
      return {
        ...state,
        TopTim: [...state.TopTim, action.payload],
      };

    case 'SET_TIM_ACTION':
      return {
        ...state,
        TimAction: [...state.TimAction, action.payload],
      };
    case 'DELETE_TOP_TIM':
      return {
        ...state,
        TopTim: [],
      };

    default:
      return state;
  }
};
