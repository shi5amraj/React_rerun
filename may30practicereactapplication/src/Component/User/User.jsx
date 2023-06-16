import { useState } from "react"





function User()
{


    const [state,setState]= useState([]);
    const [data,setData]= useState([]);


    const getUser=()=>
{

   fetch("https://randomuser.me/api/?results=30").then((resp)=>resp.json()).then((data)=>
   {
    
  
  setData(data.results)
  setState(data.results);


   })



}





return(

   <div className="userDiv">

     <h1>User Component</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis accusamus temporibus quo reiciendis assumenda cupiditate voluptatem, impedit, quasi qui labore illum suscipit ipsa eaque harum quisquam animi ducimus et autem quod necessitatibus reprehenderit eveniet. Velit, explicabo blanditiis? Voluptates natus similique dolore tenetur aspernatur quis quae, quas autem soluta magnam necessitatibus. Est autem, ipsa vero eveniet consectetur amet, culpa sequi sunt quia impedit eum id perferendis incidunt numquam temporibus expedita dolorem veritatis iste eos, unde sit! Optio animi tempore sequi natus inventore adipisci totam officiis corporis, ab nulla eligendi id voluptatum, quibusdam dolorem ea officia dolorum sed earum fugiat reprehenderit.</p>
     
     <button onClick={getUser}>Get Users</button>


{ state.length>0 && (

    <>

    <div>
   <input type="radio" name="gender" id="" value="all" checked="checked" onClick={()=>
  {

    setState(data)

  }} />All
   <input type="radio" name="gender" id="" value="male" onChange={()=>
  {

    setState(data.filter((data)=>data.gender==="male"))

  }} />Male
   <input type="radio" name="gender" id="" value="female" onChange={()=>
  {

    setState(data.filter((data)=>data.gender==="female"))

  }} />Female
   
    

    </div>

<table width="100%" frame="box" rules="all">
<thead>
<tr>
<td> Image</td>
<td> Name</td>
<td>Gender</td>
<td>Email</td>
<td>City</td>

</tr>
</thead>

{
state.map((elem)=>
{
return(

<tr>
<td><img width="50px" height="50px" src={elem.picture.large
} alt="" /></td>
<td> { elem.name.title +" "+  elem.name.first +" "+ elem.name.last}</td>
<td>{elem.gender}</td>
<td>{elem.email}</td>
<td>{elem.location
.city}</td>

</tr>


)



})

}




</table>

</>

     )}

    


   </div>

)



}

export default User;