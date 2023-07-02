

import {legacy_createStore as createStore} from "redux";

import Reducer from "./Reducer";

const myStore= createStore(Reducer);

myStore.subscribe(()=>
{

    console.log(myStore.getState())
})

export default myStore;