import { useEffect, useState } from 'react'

import EvidenceDetails from '../component/EvidenceDetails'
import EvidenceForm from '../component/EvidenceForm'

const EvidencePage = () => {
    
    const [evidence,setEvidence]=useState()

    useEffect(() => {
        
        const fetchBuyer = async () => {
            const response = await fetch('/evidence')
            const json = await response.json()

            if (response.ok) {
                setEvidence([...json])
            }
        }

        fetchBuyer()
    })

    return (
        <div className="home">
            <div className='buyer'>
                {evidence && evidence.map((buyer) => (
                    <EvidenceDetails key={evidence._id} evidence={buyer} />
                ))}
            </div>
            <EvidenceForm />
        </div>
    )
}

export default EvidencePage