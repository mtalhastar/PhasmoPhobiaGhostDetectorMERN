import { useState } from "react"

const GhostForm = () => {
    const [name, setName] = useState('')
    const [evidenceList, setEvidenceList] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const buyer = {name, evidenceList}

        const response = await fetch('/api/ghostinfo', {
            method: 'POST',
            body: JSON.stringify(buyer),
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
            <input 
                type="text" 
                onChange={(e) => setEvidenceList(e.target.value)}
                value={evidenceList}
                className={emptyFields.includes('evidenceList') ? 'error' : ''}
            />

            <button className="button1">Add Ghost Details</button>
            {error && <xdiv className="error">{error}</xdiv>}
        </form>
    )
}

export default GhostForm