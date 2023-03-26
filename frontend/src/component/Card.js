import { useEffect,useState,useMemo,useRef } from "react"
function Card(props) {

const [selected, setSelected] = useState(false);
const [doubleClicked, setDoubleClicked] = useState(false);

const matchingGhostlist=useRef([])
function findGhosts(evidenceArray, ghostArray) {
const ghosts = [];
for (const ghost of ghostArray) {
let found = true;
for (const evidence of evidenceArray) {
if (!ghost.EvidenceList.includes(evidence.Name)) {
found = false;
break;
}
}
if (found) {
ghosts.push(ghost);
}
}
return ghosts;
}

const handleClick = () => {
     setSelected(!selected);
  if (selected) {
    // Card is being unselected
  //  const prevMatchingGhostlist =
   // matchingGhostlist.current = prevMatchingGhostlist || [];
    props.setEvidence([], props.e);
    props.handleUnSelect(props.e)
    //props.setGhost(matchingGhostlist.current);
   
    } else {
      // Card is being selected
      props.setEvidence(props.e);
      console.log("I am selected")
      props.handleCardSelect(props.e)
    //  props.setGhost(matchingGhostlist.current);
    }
  };

const handleDoubleClick = () => {
    setDoubleClicked(!doubleClicked);
  };
return (
 <div className={`card card1 ${selected ? 'selected' : ''} ${doubleClicked ? 'double-clicked' : ''}`} onClick={handleClick} onDoubleClick={handleDoubleClick} >
  <div className="container">
    <img src={props.e.Image} alt={props.e.Name} />
  </div>
  <div className="details">
    <h3>{props.e.Name}</h3>
  </div>
</div>
);
}

export default Card; 