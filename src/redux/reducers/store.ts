import { configureStore, Reducer } from "@reduxjs/toolkit";
import rootReducer from ".";

export const createStore = () => {
  //const sagaMiddleware = createSagaMiddleware()
  //const middlewares = [sagaMiddleware]
  const store = configureStore({
    reducer: rootReducer,
    //middleware: middlewares,
    //devTools:  process.env.NODE_ENV === 'development'
  });
  //store.sagaTask = sagaMiddleware.run(rootSagas)
  return store;
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
