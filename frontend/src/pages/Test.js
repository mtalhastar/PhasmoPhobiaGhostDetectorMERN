import { useEffect,useState,useMemo } from "react"
import Card from "../component/Card.js"
import axios from 'axios'

const refresh=()=>{
  window.location.reload()
}


const Test =()=>{
  
    const [matchingGhosts, setMatchingGhosts] = useState([]);
    const [selectedEvidences, setSelectedEvidences] = useState([]);
    const [evidencecancelled,setevidencecancelled]=useState([])

const handleSetGhosts = (matchingGhost) => {
    setMatchingGhosts(matchingGhost);
};

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


  useEffect(() => {
  const cancelled = JSON.parse(localStorage.getItem('Evidence'))
   if (cancelled !== null) {
      setevidencecancelled([...cancelled])
    }    
    console.log(evidencecancelled)
},[evidencecancelled])




return(
        <main>
        <section className="evidence-container">

        <section className="evidence-section">
         <h2>Evidence</h2>
        {selectedEvidences && selectedEvidences.map((content) => (
            <p key={content._id}>{content.Name}</p>
          ))} 
      
        </section>
        {/* <section className="ghost-section">
          <h2>Ghost</h2>
          {matchingGhosts &&
            matchingGhosts.map((content) => (
              <div key={content._id}>
                <p>{content.Name}</p>
                {content.EvidenceList &&
                  content.EvidenceList.map((evidence) => (
                    <p key={evidence._id}>{evidence}</p>
                  ))}
              </div>
            ))}
        </section> */}
<section className="evidence-section">
  {evidencecancelled && evidencecancelled.map((content) => (
            <p  class="cancelled" key={content._id}>{content.Name}</p>
          ))} 
</section>
<section className="ghost-section">
  <h2>Ghost</h2>
  {matchingGhosts &&
    matchingGhosts.map((ghost) => {
      const ghostEvidences = ghost.EvidenceList.filter(
        (evidence) => !selectedEvidences.some((sel) => sel.Name === evidence)
      );
      if (ghostEvidences.length > 0) {
        return (
          <div key={ghost._id}>
            <h1>{ghost.Name}</h1>
            {ghostEvidences.map((evidence) => (
              <p key={evidence}>{evidence}</p>
            ))}
          </div>
        );
      } else {
        return <h1>{ghost.Name}</h1>;
      }
    })}
</section> 


        </section>
    </main>
)
}
export default Test
