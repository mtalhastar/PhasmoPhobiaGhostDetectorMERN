import { useState } from "react"

const EvidenceForm = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const buyer = {Name:name, Image:image}

        const response = await fetch('/evidence', {
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
            setImage('')
            setError(null)
            setEmptyFields([])
           
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 className="h31">Add Evidence Information</h3>

            <label className="label1">Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label className="label1">Image:</label>
            <input 
                type="text" 
                onChange={(e) => setImage(e.target.value)}
                value={image}
                className={emptyFields.includes('location') ? 'error' : ''}
            />

            <button className="button1">Add Evidence Details</button>
            {error && <div className="error">{error}</div>}


            <h3 className="h31">Add New Game</h3>

            <label className="label1">Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <button className="button1">Add Game</button>
            {error && <div className="error">{error}</div>}
        </form>

        
    )
}

export default EvidenceForm