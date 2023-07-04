
const initialData={

   products:[],
   cart:[]

}




const MyReducer=(state=initialData,action)=>{

   switch(action.type)
   {
  case "product" :
    state={
    ...state,
    products:action.payload

    }   
    break;

    case "cart" :
      state={
      ...state,
      cart: [...state.cart,action.payload]
    

      }


   }


return state;


}

export default MyReducer;