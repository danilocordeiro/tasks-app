const GET_TASKS = 'GET_TASKS';

function taskReducer(state, action) {
  switch (action.type) {
    case GET_TASKS:
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export { taskReducer, GET_TASKS };
