/*import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateItem() {
    const [item, setName] = useState('')
    const [date, setEmai] = useState('')
    const navigate =useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http:localhost:8081/create', {name, email})
        .then(res =>{
        console.log(res)
        navigate('/') 

        }).catch(err => console.log(err));
            
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Item</h2>
          <div className="mb-2">
            <label htmlFor="name">Item</label>
            <input type="text" id="item" placeholder="Enter Item" className="form-control" onChange={e=>setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="date">date</label>
            <input type="date" id="date" placeholder="Enter Due Date" className="form-control"  onChange={e =>setEmail(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateItem; */