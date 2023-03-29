import { useState,useEffect } from "react"

const GhostForm = () => {
    const [name, setName] = useState('')
    const [evidenceList, setEvidenceList] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [allevidenceList,setAllEvidenceList]=useState('')
    const [gamelist,setgamelist]=useState([])
    const [game,setgame]=useState('')
    const [evidencelists,setevidencelists]=useState([])


  useEffect(() => {
        
        const fetchEvidence = async () => {
            const response = await fetch('/evidence')
            const json = await response.json()
            const gameResponse = await fetch('/game')
            const gamejson = await gameResponse.json()
            if (response.ok) {
                setAllEvidenceList([...json])
                setgamelist([...gamejson])
            }
           
        }

        fetchEvidence()
    },[])
    
    const addIntoLists=(obj)=>{
     setevidencelists([...evidencelists,obj])
     console.log(evidencelists)
    }

    const addInto=()=>{
        const evidenceobj=
            {
                Game:game,
                evidences:evidenceList
            }
        setEvidenceList([])
        addIntoLists(evidenceobj)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
         
        
       
        const ghost = {Name:name, EvidenceList:evidencelists}
        setevidencelists([]);
        const response = await fetch('/ghost', {
            method: 'POST',
            body: JSON.stringify(ghost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setName('')
            setEvidenceList('')
            setError(null)
            setEmptyFields([])
           
        }
    }


     const handleOptionChange = (event) => {
     setSelectedOption(event.target.value);
     };

 const handleAddEvidence = () => {
  if (selectedOption && !evidenceList.includes(selectedOption)) {
    setEvidenceList([...evidenceList, selectedOption]);
    setSelectedOption('');
  }
};

const handleAddGame = () => {
 
    setgame(selectedOption);
    console.log(game)
    setSelectedOption('');

};




    return (
        <>
        <form className="create" onSubmit={handleSubmit}>
            <h3 className="h31">Add Ghost Information</h3>

            <label className="label1">Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
                required
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label className="label1">Evidence List:</label>
          
            <label className="label1">You can assign multiple evidences here</label>
             <select className="dropdown1" 
             value={selectedOption}
             onChange={handleOptionChange}
             onClick={handleAddEvidence}
              >
              <option value=""></option>
             {allevidenceList && allevidenceList.map((option) => (
             <option   key={option._id}     value={option.Name}>
             {option.Name}
             </option>
             ))}
             </select>            
             <label className="label1">Assign The Game</label>
              <select className="dropdown1"
             value={selectedOption}
             onChange={handleOptionChange}
             onClick={handleAddGame}
              >
              <option value=""> Choose Game</option>
             {gamelist && gamelist.map((option) => (
             <option  key={option._id} value={option.Name}>
             {option.Name}
             </option>
             ))}
             </select>  
           
            
           <button className="button1" type="button" onClick={addInto}> Add List</button>
            <button className="button1"> Add Ghost Details</button>
            {error && <xdiv className="error">{error}</xdiv>}
        </form>
         
       
        </>
    )
}

export default GhostForm