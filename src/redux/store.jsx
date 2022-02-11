import { createStore,  } from "redux";
import reduser from "./reducer"; 
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reduser, composeWithDevTools())

export default store