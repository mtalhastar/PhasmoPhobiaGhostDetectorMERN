import { useEffect,useState,useMemo } from "react"
import Card from "../component/Card.js"
import axios from 'axios'

const refresh=()=>{
  window.location.reload()
}


const SecondPage =()=>{
   const [evidences,setevidences] =useState(null)
   const [ghost,setghost]=useState(null)
    const [matchingGhosts, setMatchingGhosts] = useState([]);
    const [selectedEvidences, setSelectedEvidences] = useState([]);
    const [selectedCards,setSelectedCards]=useState([])
    
/*const handleSetGhosts = (matchingGhost) => {
    setMatchingGhosts(matchingGhost);
};
*/
const handleCardSelect=(evidence)=>{
  const updatedSelectedCards = [...selectedCards, evidence];
    setSelectedCards(updatedSelectedCards);
    const filteredGhosts = ghost.filter((ghost) =>
      updatedSelectedCards.every((selected) =>
        ghost.EvidenceList.includes(selected.Name)
      )
    );
    setMatchingGhosts(filteredGhosts);
}

const handleUnSelect=(evidence)=>{
  const updatedSelectedCards = selectedCards.filter(
      (selected) => selected.Name !== evidence.Name
    );
    setSelectedCards(updatedSelectedCards);

    if (updatedSelectedCards.length === 0) {
      setMatchingGhosts([]);
    } else {
      const filteredGhosts = ghost.filter((ghost) =>
        updatedSelectedCards.every((selected) =>
          ghost.EvidenceList.includes(selected.Name)
        )
      );
      setMatchingGhosts(filteredGhosts);
    }
}
const handleCardDisable=(disabled) =>{
if (disabled) {
      return;
}
}
const handleSetEvidence = (matchingEvidences, removeGhost) => {
  const uniqueEvidencesSet = new Set(selectedEvidences.concat(matchingEvidences));
  let uniqueEvidences = Array.from(uniqueEvidencesSet);
  if (removeGhost) {
    const removeIndex = uniqueEvidences.findIndex(evidence => evidence._id === removeGhost._id);
    if (removeIndex !== -1) {
      uniqueEvidences.splice(removeIndex, 1);
    }
  }
  setSelectedEvidences(uniqueEvidences);
}
   useEffect(()=> {
      
         const fetchEvidence=async()=>{
          
         const evidence=await fetch('/evidence')
         const ghost=await fetch('/ghost')
         const ghostjson=await ghost.json()
         const json = await evidence.json()
         if(evidence.ok){
           setevidences([...json])
           setghost([...ghostjson])
         }
         }

         fetchEvidence()
        
    },[])
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

       <section className="ghost-evidence-section">
        <h2>Ghost Evidence</h2>
        <button onClick={refresh}>Reset</button>
        <div className="cards">
        {evidences&&evidences.map((element)=>(
            <Card key={element._id} e= {element} ghosts={ghost}  onDisable={handleCardDisable} handleCardSelect={handleCardSelect}  handleUnSelect={handleUnSelect} evidence={evidences} setEvidence={handleSetEvidence} selectedEvidence={selectedEvidences} setSelectedEvidence={setSelectedEvidences}  matchghost={matchingGhosts} />
         ))
        }
      </div>
       </section>
    </main>
)
}
export default SecondPage