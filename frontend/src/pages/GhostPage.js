import { useEffect, useState } from 'react'

import GhostDetails from '../component/GhostDetails'
import GhostForm from '../component/GhostForm'

const GhostPage = () => {
    
    const [ghost,setGhostState]=useState()

    useEffect(() => {
        
        const fetchBuyer = async () => {
            const response = await fetch('/ghost')
            const json = await response.json()

            if (response.ok) {
                setGhostState([...json])
            }
        }

        fetchBuyer()
    },[ghost])

    return (
        <div className="home">
            <div className='buyer'>
                {ghost && ghost.map((ghost) => (
                    <GhostDetails key={ghost._id} ghost={ghost} />
                ))}
            </div>
            <GhostForm />
        </div>
    )
}

export default GhostPage