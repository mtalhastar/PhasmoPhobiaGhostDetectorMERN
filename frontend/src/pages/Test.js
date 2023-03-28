import { useEffect,useState,useMemo } from "react"
import Card from "../component/Card.js"
import axios from 'axios'

const refresh=()=>{
  window.location.reload()
}


const Test =()=>{
  
    const [matchingGhosts, setMatchingGhosts] = useState([]);
    const [selectedEvidences, setSelectedEvidences] = useState([]);
  

/*const handleSetGhosts = (matchingGhost) => {
    setMatchingGhosts(matchingGhost);
};
*/
useEffect(() => {
const matchingGhostsFromStorage = JSON.parse(localStorage.getItem('matchingevidence'))
if (matchingGhostsFromStorage !== null) {
      setMatchingGhosts([...matchingGhostsFromStorage])

    }
   const evidencesFromStorage = JSON.parse(localStorage.getItem('selectedevidence'))
    if (evidencesFromStorage !== null) {
      setSelectedEvidences([...evidencesFromStorage])
       }
  })


  
return(
        <main>
        <section className="evidence-container">
        <section className="evidence-section">
         <h2>Evidence</h2>
        {selectedEvidences && selectedEvidences.map((content) => (
                    <p key={content._id}>{content.Name}</p>
          ))}
        </section>
        <section className="ghost-section">
            <h2>Ghost</h2>
         {matchingGhosts && matchingGhosts.map((content) => (
                    <p key={content._id}>{content.Name}</p>
          ))}
        </section>
        </section>
    </main>
)
}
export default Test