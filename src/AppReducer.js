import { combineReducers } from "redux";
import crewReducer from "./crew/crewReducer";
import destinationReducer from "./destination/destinationReducer";
import techReducer from "./technology/technologyReducer";

const appReducer = combineReducers({
  destination: destinationReducer,
  crew: crewReducer,
  technology: techReducer
});

export default appReducer;
