import React, { useState } from 'react'

function LogIn() { //JS

    function handle(event){
        event.preventDefault();
        alert(`Name : ${naam}
            Email : ${mail}
            Password : ${password}`);
    }


  const [naam, setNaam] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return ( //HTML
    <div>
      <form onSubmit={handle}>
        <fieldset>
            <legend>Log-IN From</legend>
            <input type="text" placeholder='Enter ur Name' onChange={(event)=> setNaam(event.target.value) }/>
            <input type="email" placeholder = "Enter ur Email" onChange={(event)=> setMail(event.target.value)} />
            <input type="password" placeholder="Enter ur password" onChange={(event)=> setPassword(event.target.value)}/>
            <button type="submit">Log-In</button>
        </fieldset>
      </form>
    </div>
  )
}

export default LogIn;
(event)=>{setNaam(event.target.value);}


