import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const GhostDetails = ({ buyer }) => {

    const handleClick = async () => {
        const response = await fetch('/api/ghostinfo/' + buyer._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async() => {
        const name = prompt('Update Name')
        const evidenceList = prompt('Update Image')

        const Property = {
            name: name,
            evidenceList:evidenceList
        }

        const update = await fetch('/api/ghostinfo/' + buyer._id, {
            method: 'PUT',
            body: JSON.stringify(Property),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="buyer-details">
            <p><strong>Name: </strong>{buyer.name}</p>
            <p><strong>Evidence List: </strong>{buyer.evidenceList}</p>
            <p>{formatDistanceToNow(new Date(buyer.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <h2 className="material-symbols-outlined" onClick={updateInfo}>update</h2>
        </div>
    )
}

export default GhostDetails