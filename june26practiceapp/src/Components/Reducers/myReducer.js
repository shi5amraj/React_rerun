
let initialData={
    comp1:"",
    comp2:""
}

const myReducer=(state=initialData,action)=>
{
   switch(action.type)
   {
     case "comp1Data" : 
     state={ ...state,comp1:action.payload}
     break;
     case "comp2Data" :
        state={...state,comp2:action.payload}
        break;


   }


    return state;

}

export default myReducer;