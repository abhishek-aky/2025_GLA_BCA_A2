import React, { useEffect, useState } from 'react'

function GitHub({usernaam}) {
    const [user, setUser]= useState({imgUrl: "", followers:0, following:0}); 
    useEffect(()=>{
        fetch(`https://api.github.com/users/${usernaam}`).then(async function(res){
          let data = await res.json();
          console.log(data);
        let {avatar_url, followers, following} =  data;
          setUser(()=>{
            return {
                imgUrl : avatar_url,
                followers : followers,
                following:following
            }
          })
          
        })
    }, [])

  return (
    <div style={{border:"2px solid seagreen", margin:"2px", padding:"2px"}}>
      <img src={user.imgUrl} alt="img" />
      <figure>
        <p>userId : {usernaam}</p>
        <p>Followers : {user.followers}</p>
        <p>Following : {user. following}</p>
      </figure>
    </div>
  )
}

export default GitHub;





