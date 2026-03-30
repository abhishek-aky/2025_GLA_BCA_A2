import React, { useState } from 'react'

function Bye() { //JS 

   const [naam, setNaam] = useState("");
   const [email, setEmail] = useState("");
   const handle = (ev)=>{
        ev.preventDefault();
        alert(`Name : ${naam}
            Email : ${email}`)
   }
  return ( //HTML
    <div>
      <form onSubmit={handle}> 
        <fieldset>
            <legend>LogIn-form</legend>
            <input type="text" placeholder='Enter ur Name' onChange={(ev)=> setNaam(ev.target.value)}/>
            <hr />
            <input type="email" placeholder='Enter ur Email' onChange={(ev)=> setEmail(ev.target.value)}/>
            <br /> 
            <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Bye;






