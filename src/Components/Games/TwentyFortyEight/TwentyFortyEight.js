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

  // Initialize
  const initGrid = () => {
    let newGrid = cloneDeep(gridData)
    let newClone = cloneDeep(gridData)

    addNewNumber(newGrid)
    addNewNumber(newGrid)
  }

  //Add new number
  const addNewNumber = (grid) => {
    let added = false;
    let gridFull = false;

    while(!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4)
      let rand2 = Math.floor(Math.random() * 4)

      if (grid[rand1][rand2] === 0) {
        grid[rand1][rand2] = Math.random() > 0.5 ? 2 :4;
        added = true;
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
      <button onClick={() => initGrid()}></button>
    </div>
  )
}

export default TwentyFortyEight
