import React from 'react';
import Menu from './component/menu/menu';
import Header from './component/header/header';
import Routes from './Routes';

// function add(e){
//   fetch("http://localhost:5000/",{
//     method:"POST",
//     body:JSON.stringify({name:"name" , address:"direccion"}),
//     headers:{
//       'Accept':'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   .then( res => res.json())
//   .then( data => console.log(data))
//   .catch( err => console.error(err));
// }

function App() {
  // fetch("http://localhost:5000/api")
  // .then( res => res.json())
  // .then( data => console.log(data))
  // .catch( err => console.error(err));

  return (
      <div className="App">
        <div className="wrapper ">
          <Menu />
          <div className="main-panel">
            <Header />
            <div className="content">
                <Routes/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
