import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './Page/Index/Index';
import RK from './Page/tools/Ranking/RK';
import Login from './Page/Login/Login';
import Search from './Page/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Index}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Search" component={Search}/>
      </Router>
    </div>
  );
}

export default App;
