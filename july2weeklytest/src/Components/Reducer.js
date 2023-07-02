
const initialState=true;


const Reducer=(state=initialState,action)=>
{
if(action.type==="toggle")
{
    state=action.payload;
}


 return state;
}

export default Reducer;