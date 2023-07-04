import { REMOVEFROMCART } from "../ActionTypes/ActionType"

const removeFromCartActionCreator=(data)=>
{
    return{
     type:REMOVEFROMCART,
     payload:data
    }



}
export default removeFromCartActionCreator;