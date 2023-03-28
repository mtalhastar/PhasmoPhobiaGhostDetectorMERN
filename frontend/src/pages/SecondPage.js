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
    const [gamelist,setgamelist]=useState([])
    const[game,setgame]=useState('Phasmophobia')
    const[extraghosts,setghostsextra]=useState([])
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


 const startGame =()=>{
  const ghooost = extraghosts
  console.log(JSON.stringify(ghost))
     const updatedGhosts = ghooost.map((ghost) => ({
        ...ghost,
        EvidenceList: ghost.EvidenceList.filter((evidenceList) => evidenceList.Game ===game )
          .map((evidenceList) => evidenceList.evidences)
          .flat(),
      }));
    setghost(updatedGhosts)
    console.log(JSON.stringify(updatedGhosts))
 }



const handleOptionChange = (event) => {
     setgame(event.target.value);
     };


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
const returnElement=()=>{
 console.log(gamelist)
 console.log(ghost)
 console.log(evidences)
}
  
   useEffect(()=> {
        
    

   const fetchEvidence=async()=>{
          
         const evidence=await fetch('/evidence')
         const ghost=await fetch('/ghost')
          const games=await fetch('/game')
          const gamejson   = await games.json()
         const ghostjson=await ghost.json()
         const json = await evidence.json()
         if(evidence.ok){
           setevidences([...json])
           setghost([...ghostjson])
           setghostsextra([...ghostjson])
           setgamelist([...gamejson])
         }
         }
         fetchEvidence()
    },[])
    
return(
        <main>

        <section className="evidence-container">

            <select className="dropdown" 
             
              onChange={handleOptionChange}
              >
              <option value="">Select the Game</option>
             {gamelist && gamelist.map((option) => (
             <option   key={option._id}    value={option.Name}>
             {option.Name}
             </option>
             ))}
             </select>  
           <button onClick={startGame}>startGame</button>

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
            <Card key={element._id} e= {element} ghosts={ghost} handleCardSelect={handleCardSelect}  handleUnSelect={handleUnSelect} evidence={evidences} setEvidence={handleSetEvidence} selectedEvidence={selectedEvidences} setSelectedEvidence={setSelectedEvidences}  matchghost={matchingGhosts} />
         ))
        }
      </div>
         
       </section>
    </main>
)
}
export default SecondPage