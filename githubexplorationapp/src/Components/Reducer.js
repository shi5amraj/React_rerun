import { LOGINACTION, LOGOUTACTION, SEARCHEDDATA, UPDATEDUSERDATA, USERDATAACTION, USERDETAIL } from "./ActionTypes";


const initialData={
    userData:[],
    isLoggedIn:false,
    profileData:"",
    updatedUserData:[],
    searchedData:[]

}

const Reducer=(state=initialData,action)=>
{
   
    switch(action.type)
    {
        case LOGINACTION :
        state={

            ...state,
            isLoggedIn:!state.isLoggedIn
        }
        break;
        case USERDETAIL :
            state={
                ...state,
                profileData:action.payload
            }
            break;

            case LOGOUTACTION :
                state={
                ...state,
                isLoggedIn:false

                }
                break;
                case USERDATAACTION :
                    state={
                        ...state,
                        userData:action.payload
                    }
                    break;

                    case UPDATEDUSERDATA :
                        state={
                            ...state,
                            updatedUserData:action.payload

                        }
                        break;

                        case SEARCHEDDATA :
                            state={
                                ...state,
                                searchedData:action.payload

                            }

    }




return state;

}
export default Reducer;