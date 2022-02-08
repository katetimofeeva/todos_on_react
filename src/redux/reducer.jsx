const initialState = {
    todos : [],
    marker : 'all'
}

function reduser(state = initialState, {type, id, description}) {
  switch ( type) {
    case "TODOS/ADD":
      return [
        ...state.todos,
        { id:  id, description:  description, completed: false },
      ];
    default:
      return state;
  }
}

export default reduser;
