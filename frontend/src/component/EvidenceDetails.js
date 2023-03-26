import 'material-symbols';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const EvidenceDetails = ({ buyer }) => {

    const handleClick = async () => {
        const response = await fetch('/api/buyerinfo/' + buyer._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async() => {
        const name = prompt('Update Name')
        const location = prompt('Update Image')

        const Property = {
            name: name,
            location:location
        }

        const update = await fetch('/api/buyerinfo/' + buyer._id, {
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
            <p><strong>Image: </strong></p><img src={buyer.location} width="200px" height="200px" />
            <p>{formatDistanceToNow(new Date(buyer.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <h2 className="material-symbols-outlined" onClick={updateInfo}>update</h2>
        </div>
    )
}

export default EvidenceDetails