import { useState } from 'react'
function App(){

  const [name, setName] = useState("");

  const handleChange = (e) =>{
    setName(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Form Submitted", name);
    setName("");
  }
  return <>
    <div className="min-h-screen bg-gray-300">
      <form 
        className="p-3" 
        onSubmit={(e)=>{
          handleSubmit(e);
        }}>
        <label htmlFor="name" >Name:</label>
        <input 
          value = {name}
          onChange={(e)=>{
            handleChange(e);
          }}
          type="text" id="name" name="name" 
          className="border-2 ms-1" />
        <button 
          type="submit" 
          className="flex border-2 border-blue-500 rounded mt-2 px-3 py-1 bg-blue-300">Submit</button>
      </form>
    </div>  
  </>
}

export default App;