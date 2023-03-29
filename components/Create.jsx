import React, {useState} from 'react'
function Create(){
  const [title, setTitle] = useState('');
  const [constent, setContent] = useState('');
  function handleTitleChange(event){
    
    setTitle(event.target.value);
  }
  function handleContentChange(event){
    
    setContent(event.target.value);
  }
  function handleSubmit(event){
    
    event.preventDefault();
  }
  
  return (
    <div> 
      <h1>Create Note</h1> 
    <form onSubmit={handleSubmit}>
    <label>
    Title:
    <input type = "text" value={title} onChange={handleTitleChange}/>
      </label>
    <br />
      <label>
    Content:
    <textarea  value={content} onChange={handleContentChange}/>
      </label>
    <br />
      <button type="submit"> Create Note</button>
</form>
    </div>
  
  )
  
  
}

export default Create;
