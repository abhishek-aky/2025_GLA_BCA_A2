import React from 'react'

// function Product(badmaashi) {
//   return (
//     <div>
//         <h3>{badmaashi.naam}</h3>
//         <hr />
//         <span>{badmaashi.umar}</span>
//         <hr />
//         <span>{badmaashi.city}</span>
//     </div>
//   )
// }

// export default Product

// function Product({naam, umar, city}) {
//   return (
//     <div>
//         <h3>{naam}</h3>
//         <hr />
//         <span>{umar}</span>
//         <hr />
//         <span>{city}</span>
//     </div>
//   )
// }
// export default Product


// import React from 'react'

function Product(props) {
  return (
    <div>
      <span>{props.children}</span>
      <hr />
      {/* <span>{props.children}</span> */}
      <hr />
      {/* <span>{props.children}</span> */}
    </div>
  )
}

export default Product
