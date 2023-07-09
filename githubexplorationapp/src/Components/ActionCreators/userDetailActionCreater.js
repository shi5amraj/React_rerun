import { USERDETAIL } from "../ActionTypes"


const userDetailActionCreator=(data)=>{

return{
type:USERDETAIL,
payload:data
   

}


}
export default userDetailActionCreator;