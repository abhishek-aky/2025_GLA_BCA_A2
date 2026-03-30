// import React from 'react'

// function Badmaashi(aslah) {

//   return (
//     <div>
//         <h1>{aslah.naam}</h1>
//         <h2>{aslah.stmt}</h2>
//     </div>
//   )
// }

// export default Badmaashi


// import React from 'react'

// function Badmaashi({naam, stmt}) {
//   return (
//     <div>
//       <h3>{naam}</h3>
//       <h4>{stmt}</h4>
//     </div>
//   )
// }

// export default Badmaashi

import React from 'react'

function Badmaashi(props) {
  return (
    <div>
      <strong>{props.children}</strong>
    </div>
  )
}

export default Badmaashi;


