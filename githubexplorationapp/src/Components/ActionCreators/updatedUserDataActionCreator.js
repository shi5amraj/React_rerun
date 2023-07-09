import { UPDATEDUSERDATA } from "../ActionTypes";



const updatedUserDataActionCreator=(data)=>{

return {
type:UPDATEDUSERDATA,
payload:data

}
}
export default updatedUserDataActionCreator;