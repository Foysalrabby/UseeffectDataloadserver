
import { useState, useEffect } from 'react';
import Userdat from './Userdata/Userdat';
 
function App() {
const [user,setuser]=useState([]);
useEffect( () =>{
  fetch("https://randomuser.me/api/?results=15")
  .then(res => res.json ())
  .then(data => setuser(data.results))
},[])
const [takename,settakname]=useState('');
const addmember=(name)=>{
  console.log("member added",name);
  settakname(name);

}
  return (
    <div>
    <h2> Total team member:  {takename}  </h2>
   {
    
    user.map(user => <Userdat userinfo={user}
    addmember={addmember}
    ></Userdat>)
   }
      
    </div>
  )
}

export default App;
