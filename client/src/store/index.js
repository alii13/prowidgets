import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./root-reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

//  const middlewareEnhancer = applyMiddleware(thunk, logger);
// //const allEnhancers = compose(applyMiddleware(thunk));
// const composedEnhancers = composeWithDevTools(applyMiddleware(thunk, logger))

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
