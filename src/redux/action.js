export const SetOperationName = OperationName => {
  return {
    type: 'SET_OPERATION_NAME',
    payload: OperationName,
  };
};

export const SetTopName = TopName => {
  return {
    type: 'SET_TOP_NAME',
    payload: TopName,
  };
};
export const SetTopCoordinate = TopCoordinate => {
  return {
    type: 'SET_TOP_COORDINATE',
    payload: TopCoordinate,
  };
};

export const SetTopTim = TopTim => {
  return {
    type: 'SET_TOP_TIM',
    payload: TopTim,
  };
};

export const SetTimAction = TimAction => {
  return {
    type: 'SET_TIM_ACTION',
    payload: TimAction,
  };
};

export const DeleteTopTim = () => {
  return {
    type: 'DELETE_TOP_TIM',
  };
};

export const SetTopTarget = TopTarget => {
  return {
    type: 'SET_TOP_TARGET',
    payload: TopTarget,
  };
};
