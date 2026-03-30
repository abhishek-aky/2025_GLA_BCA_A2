import React, { useState } from 'react'

function LogIn() {


    const [naam, setUsername]=  useState("Doraemon");
    // naam : variable ka naam
    // setUsername : function jiski help se change hoga

    // let username = "Doraemon";
    function handleLogin(){
        // console.log(username);
        // username= "Anonymous";

        setUsername("Anonymous");
        // console.log(username);
    }
    // let favcolor = "Seagreen";
    // let city= "Delhi";
  return (
    <div>
        <h1>Log-In Page</h1>
      <strong>{username}</strong>
      <button onClick={handleLogin}>Log Out</button>
    </div>
  )
}

export default LogIn
