import Clue from "./clue";
import { useEffect, useState } from "react";

const styles2 = {
  container: {
    fontFamily: 'Arial, sans-serif'
  },
  column: {
    marginBottom: '20px',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    background: '#fff',
    textAlign: 'center',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    maxHeight: '300px', // Adjusted max height to make the boxes smaller
    maxWidth: '400px', // Adjusted max height to make the boxes smaller
    overflowY: 'auto'
  },
  clueList: {
    height: 'auto', // Adjusted height to be auto
    padding: '10px',
    borderRadius: '8px',
    overflowY: 'auto'
  },
  entry: {
    padding: '5px',
    textAlign: 'left',
    border: '1px solid #ccc', // Gray border
    borderRadius: '4px', // Rounded corners
    marginBottom: '5px', // Add some margin between entries
    maxWidth: 'calc(100% -12px)'
  }
};

function ClueList(props) {
  const { verticalClues, horizontalClues, result } = props;
  const [clueList, setClueList] = useState({ VERTICAL: verticalClues, HORIZONTAL: horizontalClues });

  useEffect(() => {
    setClueList(makeClueList());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [verticalClues, horizontalClues]);

  const handleResize = () => {
    const width = window.innerWidth;
    // Adjust based on window width if needed
  };

  function makeClueList() {
    const updatedVerticalClues = verticalClues.map((clue) => {
      const hint = result.find((item) => item.answer === clue.WORD);
      if (hint) {
        return { ...clue, CLUE: hint.clue };
      }
      return clue;
    });

    const updatedHorizontalClues = horizontalClues.map((clue) => {
      const hint = result.find((item) => item.answer === clue.WORD);
      if (hint) {
        return { ...clue, CLUE: hint.clue };
      }
      return clue;
    });

    return { VERTICAL: updatedVerticalClues, HORIZONTAL: updatedHorizontalClues };
  }

  return (
    <>
      <div style={styles2.container}>
        <h3>{'Answers can be seen by right-clicking the clue'}</h3>
        <br />
        <center><h1>Clues</h1></center>

        <div style={styles2.column}>
          <h2>Down</h2>
          <div style={styles2.clueList}>
            {clueList.VERTICAL.map((clues) => (
              <div key={clues.CLUE_NUMBER} style={styles2.entry}>
                <Clue number={clues.CLUE_NUMBER} word={clues.WORD} clue={clues.CLUE} />
              </div>
            ))}
          </div>
        </div>

        <div style={styles2.column}>
          <h2>Across</h2>
          <div style={styles2.clueList}>
            {clueList.HORIZONTAL.map((clues) => (
              <div key={clues.CLUE_NUMBER} style={styles2.entry}>
                <Clue number={clues.CLUE_NUMBER} word={clues.WORD} clue={clues.CLUE} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClueList;
