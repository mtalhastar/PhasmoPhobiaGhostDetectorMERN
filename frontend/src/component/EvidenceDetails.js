import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import 'material-symbols'


import { useState } from 'react'
const EvidenceDetails = ({ evidence }) => {
   
    const[image,setImage]=useState("")
    const[name,setName]=useState("")
   
    const handleClick = async () => {
        const response = await fetch('/evidence' + evidence._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async() => {
         
      
         
             const Evidence={Name:name,Image:image}
         
       

        const update = await fetch('/evidence' + evidence._id, {
            method: 'PUT',
            body: JSON.stringify(Evidence),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="buyer-details">
            <p><strong>Name: </strong>{evidence.Name}</p>
            <p><strong>Image: </strong></p><img src={evidence.Image} width="200px" height="200px" />
            <p>{formatDistanceToNow(new Date(evidence.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <h2 className="material-symbols-outlined" onClick={updateInfo}>update</h2>
          <form  onSubmit={updateInfo}> 
      
        <label> Edit Name : </label>
        <input
          
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}
        required
        />
        <label> Edit Image : </label>
         <input
        
        type="text"
        onChange={(e)=> setImage(e.target.value)}
        value={image}
        required
        />
        </form>
        </div>
    )
}

export default EvidenceDetails