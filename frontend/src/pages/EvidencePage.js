import { useEffect, useState } from 'react'

import EvidenceDetails from '../component/EvidenceDetails'
import EvidenceForm from '../component/EvidenceForm'

const EvidencePage = () => {
    
    const [buyer,setBuyerState]=useState()

    useEffect(() => {
        
        const fetchBuyer = async () => {
            const response = await fetch('/api/buyerinfo')
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
                    <EvidenceDetails key={buyer._id} buyer={buyer} />
                ))}
            </div>
            <EvidenceForm />
        </div>
    )
}

export default EvidencePage