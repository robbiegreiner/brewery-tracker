const errorMessage = (state = '', action) => {
  switch (action.type) {
  case 'ERROR_OCCURRED':
    return action.errorMessage;
  default:
    state = '';
    return state;
  }
};

export default errorMessage;
