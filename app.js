import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Create from './components/Create'

function App(){
const [notes, setNotes] = useState([])
const addNote = (note) => {
  setNotes([..notes, note]);
}

return {
  <Router>
    <nav>
      <ul>
        <li>
          <link to="/"> Home</link>
        </li>
          <li>
          <link to="/create">Create</link>
        </li>
      </ul>
    </nav>
  
  <switch>
    <Route path='/create'>
      <Create addNote={addNote}/>
  </Route>
  <Route path='/'>
      <Create addNote={notes}/>
  </Route>
  </switch>
  </Router>
}
}

export default App;
