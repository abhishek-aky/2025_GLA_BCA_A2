import React from 'react'

function Hello() {

    let rn = Math.floor(Math.random()*10);
    let luckyNum = 7;
    let st;
    // if(rn === luckyNum){
    //     st = <strong>Lucky 7!!!</strong>
    // }else{
    //     st = <p>Better luck next time : {rn}</p>
    // }
  return (
    <div>
        {
            (rn === luckyNum)?(st = <strong>Lucky 7!!!</strong>):(st = <p>Better luck next time : {rn}</p>)
        }
      
    </div>
  )
}

export default Hello
