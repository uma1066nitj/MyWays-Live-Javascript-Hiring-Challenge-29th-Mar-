import React from 'react'
function {notes} = props;

return {
  <div>
    <h1>Notes</h1>
    <ul>
  {notes.map((note,index) =>(
    <li key={index}>
    <h2>{note.title}</h2>
    <p>{note.content.substring(0,100))}...</p>
</li>
))}
</ul>
  </div>  
}

export default Home;
