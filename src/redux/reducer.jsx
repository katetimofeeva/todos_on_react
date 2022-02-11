import * as actions from "../redux/actions.jsx";

const initialState = {
  todos: [],
  visibleTask: [],
  marker: "all",
};

function reduser(
  state = initialState,
  { type, id, description, completed, marker, attribute }
) {
  switch (type) {
    case actions.ADD_TASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: id, description: description, completed: false },
        ],
      };

    case actions.DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== id),
      };//[]
    case actions.TOGGLE_COMPLETE_TASK:
      console.log(attribute)
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (id === item.id) {
            return {
              ...item,
              [attribute]: !item[attribute],
            };
          }
          return item;
        }),
      };
    case actions.EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (id === item.id) {
            return {
              ...item,
            [attribute]: description,
            };
          }
          return item;
        }),
      };

    case actions.COMPLETED_ALL_TASKS://rename
      return {
        ...state,
        todos: state.todos.map((item) => {
          return {
            ...item,
            completed: completed,
          };
        }),
      };
    case actions.SET_MARKER:
      console.log("SET_MARKER");
      return {
        ...state,
        marker: marker,
      };
    case actions.DELETE_ALL_TASKS:
      console.log(" DELETE_ALL_TASKS");
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
        marker: "all",
      };

    default:
      return state;
  }
}

export default reduser;
