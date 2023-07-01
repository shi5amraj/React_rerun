

import {legacy_createStore as createStore} from "redux";

import myReducer from "../Reducers/myReducer"

   let myreduxStore= createStore(myReducer);

   console.log(myreduxStore.getState())

   myreduxStore.subscribe(() => {
      console.log(myreduxStore.getState());
    });

   export default myreduxStore;