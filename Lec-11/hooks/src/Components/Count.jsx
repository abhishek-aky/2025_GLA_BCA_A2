import React, { useState } from 'react'

function Count() {
   const [ginti,BadalDo ] = useState(0);
    // function incre(){
    //     BadalDo(ginti+1);
    // }
    // function decre(){
    //     BadalDo(ginti - 1);
    // }
    // function rest(){
    //     BadalDo(0);
    // }
  return (
    <div>

        Value of count is : {ginti}
      <button onClick={()=> BadalDo(ginti+1)}>+</button>
      <button onClick={()=> BadalDo(ginti-1)}>-</button>
      <button onClick={()=> BadalDo(0)}>0</button>
    </div>
  )
}

export default Count;



()=> BadalDo(ginti+1)
