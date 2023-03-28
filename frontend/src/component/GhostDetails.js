import 'material-symbols';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import 'material-symbols'
const GhostDetails = ({ ghost }) => {

    const handleClick = async () => {
        const response = await fetch('/ghost/' + ghost._id, {
            method: 'DELETE'
        })
        
    }

    const updateInfo = async() => {
        const name = prompt('Update Name')
        const evidenceList = {

        }
         
        
        const Property = {
            Name: name,
            evidenceList:evidenceList
        }

        const update = await fetch('/ghost/' + ghost._id, {
            method: 'PUT',
            body: JSON.stringify(Property),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="buyer-details">
            <p><strong>Name: </strong>{ghost.Name}</p>
            <p><strong>Evidence List: </strong>{ghost.EvidenceList && ghost.EvidenceList.map((ghostz) => (
           <div>
           <h1>Game: {ghostz.Game}</h1>
           {ghostz.evidences && ghostz.evidences.map((ghosts) => (
          <p>{ghosts}</p>
        ))}
        </div>
         ))}</p>
            <p>{formatDistanceToNow(new Date(ghost.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <h2 className="material-symbols-outlined" onClick={updateInfo}>update</h2>
        </div>
    )
}

export default GhostDetails