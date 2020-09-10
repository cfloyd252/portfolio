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
      console.log(rand1)
      console.log(rand2)

      if (grid[rand1][rand2] === 0) {
        grid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
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
    </div>
  )
}

export default TwentyFortyEight
