import 'material-symbols';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import 'material-symbols'
import '../index.css'



import { useState,useEffect } from 'react'
const EvidenceDetails = ({ evidence }) => {
   
    const[image,setImage]=useState("")
    const[name,setName]=useState("")
    const[gamelist,setgamelist]=useState("")
    const[game,setgame]=useState("")
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(()=> {
        
    

   const fetchGames=async()=>{
          
   
          const games=await fetch('/game')
          const gamejson   = await games.json()
        
           setgamelist([...gamejson])
         
         }
         fetchGames()
    })




    const handleClick = async () => {
        const response = await fetch('/evidence/' + evidence._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async(e) => {
         
      e.preventDefault()
         
       const Evidence={GameList:game}
         
       
        const update = await fetch('/evidence/' + evidence._id, {
            method: 'PUT',
            body: JSON.stringify(Evidence),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

     const handleOptionChange = (event) => {
     setSelectedOption(event.target.value);
     };

     const handleAddGame= () => {
     if (selectedOption && !game.includes(selectedOption)) {
      setgame([...game, selectedOption]);
      setSelectedOption('');
      }
    }

    return (
        <div className="buyer-details">
            <p><strong>Name: </strong>{evidence.Name}</p>
            <h3>GameList:</h3>
            
             {evidence.GameList && evidence.GameList.map((games)=>{
                  return <p>{games}</p>
              })
             }
             
            <p><strong>Image: </strong></p><img className='img1' src={evidence.Image}/>
            <p>{formatDistanceToNow(new Date(evidence.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            
       <form  onSubmit={updateInfo}> 
 
        <label className="label1">Assign The Game</label>
        <select className="dropdown"
           value={selectedOption}
            onChange={handleOptionChange}
            onClick={handleAddGame}>
            <option value="">Select Option</option>
        {gamelist && gamelist.map((option) => (
        <option   key={option._id}     value={option.Name}>
        {option.Name}
             </option>
         ))}
        </select>
        <button className='a' >Update</button>
        </form>



        </div>
    )
}

export default EvidenceDetails