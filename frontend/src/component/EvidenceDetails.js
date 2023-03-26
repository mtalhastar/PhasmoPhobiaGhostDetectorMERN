import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from 'react'
const EvidenceDetails = ({ evidence }) => {
   
    const[image,setImage]=useState("")
    const[name,setName]=useState("")
   
    const handleClick = async () => {
        const response = await fetch('/api/buyerinfo/' + evidence._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async() => {
        const name = prompt('Update Name')
        const image = prompt('Update Image')

        const Evidence = {
            Name: name,
            Image:image
        }

        const update = await fetch('/api/buyerinfo/' + evidence._id, {
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
          <form className="updateTextBox" onSubmit={updateInfo}> 
      
        <label> Edit Price : </label>
        <input
          data-testid="PriceInput"
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}
        />
        <label> Edit Name : </label>
         <input
         data-testid="NameInput"
        type="text"
        onChange={(e)=> setImage(e.target.value)}
        value={image}
        />
        </form>
        </div>
    )
}

export default EvidenceDetails