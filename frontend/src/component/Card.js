import { useEffect,useState,useMemo,useRef } from "react"
function Card(props) {

const [selected, setSelected] = useState(false);
const [doubleClicked, setDoubleClicked] = useState(false);



  // Retrieve selected and doubleClicked from localStorage on component mount
  useEffect(() => {
    const savedSelected = JSON.parse(localStorage.getItem("selected"));
    const savedDoubleClicked = JSON.parse(localStorage.getItem("doubleClicked"));

    if (savedSelected !== null) {
      setSelected(savedSelected);
    }

    if (savedDoubleClicked !== null) {
      setDoubleClicked(savedDoubleClicked);
    }
  }, []);

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
    //props.setGhost(matchingGhostlist.current);
   
    } else {
      // Card is being selected
      props.setEvidence(props.e);
      console.log("I am selected")
      props.handleCardSelect(props.e)
    //  props.setGhost(matchingGhostlist.current);
    }
  };

const handleDisable = () => {
    setDoubleClicked(!doubleClicked);
    props.handleDisableClick(props.e)
    if(doubleClicked){
      props.handleEnableClick(props.e)
    }
      
  };
return (
 <div className={`card card1 ${selected ? 'selected' : ''} ${doubleClicked ? 'double-clicked' : ''}`}>
  <div className="container">
    <img src={props.e.Image} alt={props.e.Name} />
    <h3>{props.e.Name}</h3>
  </div>

    <button onClick={handleClick}>Select</button>
    <button onClick={handleDisable}>Disable</button>
 
</div>
);
}

export default Card; 