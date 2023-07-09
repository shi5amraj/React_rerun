import { USERDATAACTION } from "../ActionTypes"


const userDataActionCreator=(data)=>
{


    return{

        type:USERDATAACTION,
        payload:data

    }
}
export default userDataActionCreator;