// let divEle = document.getElementById('root');
// let head2 = document.createElement('h2');
// head2.innerHTML = `Hi from Section-A2`;
// divEle.appendChild(head2);



// ----------------React - 17
// let divEle = document.getElementById('root');
// let head2 = React.createElement('h2', null, `Hi from React DOM-17`);
// ReactDOM.render(head2, divEle);

let divEle = document.getElementById('root');
let head2 = React.createElement('h2', null, `Hi from React DOM-18`);
// ReactDOM.render(head2, divEle);
let root = ReactDOM.createRoot(divEle);
root.render(head2);