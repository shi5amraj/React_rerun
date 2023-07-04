
import {legacy_createStore as createStore} from "redux";
import MyReducer from "../Reducer/MyReducer";

const myReduxStore= createStore(MyReducer);


myReduxStore.subscribe(()=>{

  console.log(myReduxStore.getState());

})

export default myReduxStore;