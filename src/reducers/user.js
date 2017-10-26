const user = (state = {}, action) => {
  switch (action.type) {
  case 'CREATE_ACCOUNT_SUCCESS':
    return action.user;
  case 'LOGIN_SUCCESS':
    return action.user;
  default:
    return state;
  }
};

export default user;
