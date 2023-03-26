import { useEffect, useState } from 'react'

import GhostDetails from '../component/GhostDetails'
import GhostForm from '../component/GhostForm'

const GhostPage = () => {
    
    const [buyer,setBuyerState]=useState()

    useEffect(() => {
        
        const fetchBuyer = async () => {
            const response = await fetch('/api/ghostinfo')
            const json = await response.json()

            if (response.ok) {
                setBuyerState([...json])
            }
        }

        fetchBuyer()
    })

    return (
        <div className="home">
            <div className='buyer'>
                {buyer && buyer.map((buyer) => (
                    <GhostDetails key={buyer._id} buyer={buyer} />
                ))}
            </div>
            <GhostForm />
        </div>
    )
}

export default GhostPage