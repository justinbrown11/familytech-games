import styles from "@/styles/crossword.module.css";
import React, { useState } from 'react';
import styles2 from "@/styles/tooltip.module.css";

function Square(props) {
  let {
    character,
    key_character,
    handleSquareInput,
    handleKeyDown,
    row,
    col,
    clueNumber,
    dimensions,
    inputLocation,
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  function handleChange(event) {
    handleSquareInput(event.target.value, row, col, inputLocation);
  }

  function handleDownKey(event) {
    handleKeyDown(event, row, col, inputLocation);
  }

  return (
    <>
      <div 
      className={styles.div}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
        <input
          ref={(element) =>
            (inputLocation.current[row * dimensions + col] = element)
          }
          className={styles.square}
          readOnly={key_character === "*" || key_character === "&"}
          style={
            key_character == "*"
              ? { backgroundColor: "black", borderColor: "black" }
              : key_character == "&"
              ? {
                  backgroundColor: "white",
                  height: 0,
                  width: 0,
                  border: 0,
                }
              : { backgroundColor: "white", borderColor: "black" }
          }
          maxLength={1}
          type="text"
          onChange={handleChange}
          onKeyDown={handleDownKey}
          disabled={
            key_character === "*" || key_character === "&"
          }
        ></input>
        {showTooltip && key_character != "*" && key_character != "&" ? 
        <div className={styles2.elementwithtooltip}>test</div>
        : <></>
        }
      </div>
    </>
  );
}

export default Square;
