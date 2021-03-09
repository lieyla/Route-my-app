import './App.css';
import Dummy from './Dummy';
import ListComponent from './ListComponent';
import './nav.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router><div className="Container">
      <div className="nav">
        <h1><Link to='/'> Dummy </Link> </h1>
        <h1><Link to='/Another'>ListComponent </Link></h1>
      </div>
    <switch>
<Route path='/'exact component={Dummy}/>
<Route path='/Another' component={ListComponent}/>

    </switch>
    </div>
    </Router>
  );
}

export default App;
