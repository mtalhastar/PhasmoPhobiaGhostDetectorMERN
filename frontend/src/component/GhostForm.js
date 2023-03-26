import { useState } from "react"

const GhostForm = () => {
    const [name, setName] = useState('')
    const [evidenceList, setEvidenceList] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ghost = {name, evidenceList}

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

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 className="h31">Add Ghost Information</h3>

            <label className="label1">Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label className="label1">Evidence List:</label>
          
            <label className="label1">You can assign multiple evidences here"</label>
             <select className="dropdown" required >
             <option value="">Select evidence</option>
             <option value="evidence1">Evidence 1</option>
             <option value="evidence2">Evidence 2</option>
             <option value="evidence3">Evidence 3</option>
             </select>            
            
             <label className="label1">Select the Game,when done then click "Add Ghost"</label>
             <select className="dropdown" required >
             <option value="">Select evidence</option>
             <option value="evidence1">Evidence 1</option>
             <option value="evidence2">Evidence 2</option>
             <option value="evidence3">Evidence 3</option>
             </select> 
            <button className="button1">Add Ghost Details</button>


        

            {error && <xdiv className="error">{error}</xdiv>}
        </form>
    )
}

export default GhostForm