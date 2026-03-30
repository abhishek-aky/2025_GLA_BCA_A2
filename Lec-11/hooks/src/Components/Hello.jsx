import React, { use, useState } from 'react'

function Hello() {

    // let usernaam = "Doraemon";
    // function handleLogout(){
    //     console.log(usernaam)
    //     usernaam = "Anonymous";
    //     console.log(usernaam);
    // }

    const [usernaam, setUsernaam]  =  useState("Doraemon");
    function handleLogout(){
        setUsernaam("Anonymous");
    }

  return (
    <div>
        <h2>Topic : Log-Out </h2>
            <strong>Welcome into the 22nd Century : {usernaam}</strong>
            <hr />
        <button onClick={handleLogout}>Log-Out</button>
    </div>
  )
}

export default Hello
