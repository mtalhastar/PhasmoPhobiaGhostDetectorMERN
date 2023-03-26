import { useState,useEffect } from "react"

const GhostForm = () => {
    const [name, setName] = useState('')
    const [evidenceList, setEvidenceList] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [allevidenceList,setAllEvidenceList]=useState('')



  useEffect(() => {
        
        const fetchEvidence = async () => {
            const response = await fetch('/evidence')
            const json = await response.json()

            if (response.ok) {
                setAllEvidenceList([...json])
            }
        }

        fetchEvidence()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ghost = {Name:name, EvidenceList:evidenceList}

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

    return (
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
             <select className="dropdown" 
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
             <select className="dropdown">
             <option value="">Select evidence</option>
             <option value="evidence1">Evidence 1</option>
             <option value="evidence2">Evidence 2</option>
             <option value="evidence3">Evidence 3</option>
             </select> 
            <button className="button1"    > Add Ghost Details</button>
            {error && <xdiv className="error">{error}</xdiv>}
        </form>
    )
}

export default GhostForm