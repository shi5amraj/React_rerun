import { CART } from "../ActionTypes/ActionType"


const cartActionCreator=(data)=>{


    return{
     type:CART,
     payload:data
    }

}

export default cartActionCreator;