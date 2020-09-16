import React, { useState, useEffect } from 'react'
import cloneDeep from 'lodash.clonedeep';
import './TwentyFortyEight.css'

function TwentyFortyEight() {
  const [gridData, setGridData] = useState([
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0]
  ])

  useEffect(() => {
    initGrid()
  }, [])

  // Initialize
  const initGrid = () => {
    let newGrid = cloneDeep(gridData)

    addNewNumber(newGrid)
    addNewNumber(newGrid)
    setGridData(newGrid)
  }

  //Add new number
  const addNewNumber = (grid) => {
    let added = false;
    let gridFull = false;

    while(!added) {
      console.log('addNewNumber')
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4)
      let rand2 = Math.floor(Math.random() * 4)

      if (grid[rand1][rand2] === 0) {
        grid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    }
  }

  //Swipt Left
  const swipeLeft = () => {
    let oldGrid = gridData;
    let newArray = cloneDeep(gridData);

    for (let i = 0; i < 4; i++) {
      let row = newArray[i];
      let slowPointer = 0;
      let fastPointer = 1;

      while (slowPointer < 4) {
        if (fastPointer === 4) {
          fastPointer = slowPointer + 1;
          slowPointer++;
          continue
        }
        if (row[slowPointer] === 0 && row[fastPointer] === 0) {
          fastPointer++;
        } else if (row[slowPointer] === 0 && row[fastPointer !== 0]) {
          row[slowPointer] = row[fastPointer];
          row[fastPointer] = 0;
          fastPointer++;
        } else if (row[slowPointer] !== 0 && row[fastPointer] === 0) {
          fastPointer++;
        } else if (row[slowPointer] !== 0 && row[fastPointer] !== 0) {
          if (row[slowPointer] === row[fastPointer]) {
            row[slowPointer] = row[slowPointer] + row[fastPointer];
            row[fastPointer] = 0;
            fastPointer = slowPointer + 1;
            slowPointer++;
          } else {
            slowPointer++;
            fastPointer = slowPointer + 1;
          }
        }
      }
    }
  }

  const displayGrid = gridData.map( row => {
    return row.map(indexValue => {
      return <div>{indexValue}</div>
    })
  })

  return (
    <div id='TwentyFortyEight'>
      <h1>2048</h1>
      <div id='grid'>
        {displayGrid}
      </div>
    </div>
  )
}

export default TwentyFortyEight
