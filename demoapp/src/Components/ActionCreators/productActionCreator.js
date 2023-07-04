import { PRODUCT } from "../ActionTypes/ActionType";


const productActionCreator=(data)=>
{

    return{
    type:PRODUCT,
    payload:data
    }


}
export default productActionCreator;