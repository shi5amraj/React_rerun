import { SEARCHEDDATA } from "../ActionTypes";

const searchedDataActionCreator=(data)=>{


return{
   type:SEARCHEDDATA,
   payload:data

}


}

export default searchedDataActionCreator;