import { useEffect,useState,useMemo,useRef } from "react"
function Card(props) {

const [selected, setSelected] = useState(false);
const [doubleClicked, setDoubleClicked] = useState(false);
const [disabled,setdisabled]=useState("Disable")
const [clicked,setClicked] =useState("Select")
const [evidencecancelled,setevidencecancelled]=useState([])

  // Retrieve selected and doubleClicked from localStorage on component mount
  useEffect(() => {
    localStorage.setItem('Evidence', JSON.stringify(evidencecancelled))
  }
  , [evidencecancelled]);

  // Rest of component code ...

const handleClick = () => {
   if(doubleClicked){
       return
     }
     setSelected(!selected);
   
    
  if (selected) {
    // Card is being unselected
  //  const prevMatchingGhostlist =
   // matchingGhostlist.current = prevMatchingGhostlist || [];
    props.setEvidence([], props.e);
    props.handleUnSelect(props.e)
     setClicked("Select")
    //props.setGhost(matchingGhostlist.current);
   
    } else {
      // Card is being selected
      props.setEvidence(props.e);
      setClicked("UnSelect")
      props.handleCardSelect(props.e)
    //  props.setGhost(matchingGhostlist.current);
    }
  };
const evidenceaddinto = (evidence) => {
  setevidencecancelled((prevEvidence) => [...prevEvidence, evidence]);
}

const handleDisable = () => {
    setDoubleClicked(!doubleClicked);
    props.handleDisableClick(props.e)
      setdisabled("Enable")
      evidenceaddinto(props.e)
    if(doubleClicked){
      setdisabled("Disable")
      const ecancelled = evidencecancelled.filter((e) => e !== props.e);
      setevidencecancelled(ecancelled);
      props.handleEnableClick(props.e)
    }
  };
return (
 <div className={`card card1 ${selected ? 'selected' : ''} ${doubleClicked ? 'double-clicked' : ''}`}>
  <div className="container">
    <img src={props.e.Image} alt={props.e.Name} />
    <h3>{props.e.Name}</h3>
  </div>

    <button onClick={handleClick}>{clicked}</button>
    <button onClick={handleDisable}>{disabled}</button>
 
</div>
);
}

export default Card; 