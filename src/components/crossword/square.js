import styles from "@/styles/crossword.module.css";
import React, { useState } from 'react';
import Tooltip from "../tooltip";

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

  function handleChange(event) {
    handleSquareInput(event.target.value, row, col, inputLocation);
  }

  function handleDownKey(event) {
    handleKeyDown(event, row, col, inputLocation);
  }

  if (key_character != "*" && key_character != "&") {
    return (
      <>
        <div className={styles.div}>
          <Tooltip content="Test" direction="top">
            {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
            <input
              ref={(element) =>
                (inputLocation.current[row * dimensions + col] = element)
              }
              className={styles.square}
              style={{ backgroundColor: "white", borderColor: "black" }}
              maxLength={1}
              type="text"
              onChange={handleChange}
              onKeyDown={handleDownKey}
            ></input>
          </Tooltip>
        </div>
      </>
    );
  }

  else {
    return (
      <>
        <div className={styles.div}>
          {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
          <input
            ref={(element) =>
              (inputLocation.current[row * dimensions + col] = element)
            }
            className={styles.square}
            readOnly={true}
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
            disabled={true}
          ></input>
        </div>
      </>
    );
  }
}

export default Square;
