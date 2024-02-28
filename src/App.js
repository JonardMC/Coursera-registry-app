import React , {useState} from 'react';
import {BrowserRouter, Switch , Route, Link} from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Registry.js"
import './App.css';
import './routes/Registry.css';

function App(){
    //const [name, setName] = useState("")
    document.body.style.backgroundColor = "#B2BEB5";
    return(
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
                <Route path="/registry">
                <Registry />
              </Route>
            </Switch>
          </BrowserRouter>

        </div>
    )
}


export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
