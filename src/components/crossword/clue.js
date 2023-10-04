import { useState } from 'react';
import { Modal } from "@mui/material";
import Person from "@/components/person";
import { useUser } from "@/contexts/UserContext";

const styles3 = {
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "1vh"
  },
  highlightButton: {
    padding: '5px',
    textAlign: 'center',
    borderRadius: '10px', // Rounded corners
    marginBottom: '5px', // Add some margin between entries
    maxWidth: 'calc(100% -12px)',
    backgroundColor: '#ffff80',
    cursor: "pointer"
  },
  viewPersonButton: {
    padding: '5px',
    textAlign: 'left',
    borderRadius: '10px', // Rounded corners
    marginBottom: '5px', // Add some margin between entries
    maxWidth: 'calc(100% -12px)',
    backgroundColor: '#9ae59a',
    cursor: "pointer"
  },
  showAnswerButton: {
    padding: '5px',
    textAlign: 'left',
    borderRadius: '10px', // Rounded corners
    marginBottom: '5px', // Add some margin between entries
    maxWidth: 'calc(100% -12px)',
    backgroundColor: '#66a3ff',
    cursor: "pointer"
  },
  hideAnswerButton: {
    padding: '5px',
    textAlign: 'left',
    borderRadius: '10px', // Rounded corners
    marginBottom: '5px', // Add some margin between entries
    maxWidth: 'calc(100% -12px)',
    backgroundColor: '#66a3ff',
    cursor: "pointer"
  }
};

function Clue(props) {
  const { number, word, clue } = props;
  const [displayClue, setDisplayClue] = useState(true);
  const [showPersonInfo, setShowPersonInfo] = useState(false); 
  const [currentPerson, setCurrentPerson] = useState(null);
  const { userFSData } = useUser();

  // Switches between clue and answer
  function handleContextMenu(event) {
    console.log(event);
    event.preventDefault();
    setDisplayClue(!displayClue);
  }

  // Shows the person Modal when their name is clicked (little convoluted, maybe fix later)
  function handleNameClick() { 
    if (!displayClue) {
      const transformedMap = new Map([...userFSData.entries()].map(([key, value]) => [value.name.compressedName, { key }]));
      const foundPerson = transformedMap.get(word)
      const realFoundPerson = userFSData.get(Object.values(foundPerson)[0])
      if (foundPerson) {
        setCurrentPerson(realFoundPerson);
        setShowPersonInfo(true);
      }
    }
  }

  // useEffect(() => {
  //   setDisplayClue(false);
  // }, []);

  return (
    <>
      <div>
        {number + ". " + (displayClue ? clue : word)}
      </div>
      <div style={styles3.buttonContainer}>
        <div style={styles3.highlightButton}>
          Highlight
        </div>
        {displayClue ?
        <div 
        style={styles3.showAnswerButton}
        onContextMenu={handleContextMenu}>
          Reveal answer
        </div>
        :
        <>
          <div 
          style={styles3.hideAnswerButton}
          onContextMenu={handleContextMenu}>
            Hide answer
          </div>
          <div 
          style={styles3.viewPersonButton}
          onClick={displayClue ? null : handleNameClick}>
            View Person
          </div>
        </>
        }
      </div>
      <Modal open={showPersonInfo} onClose={() => setShowPersonInfo(false)}>
        <Person personData={currentPerson}/>
      </Modal>
    </>
  );
}

export default Clue;