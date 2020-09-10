import React, { Component } from 'react'
import './TwentyFortyEight.css'

export class TwentyFortyEight extends Component {
  state = {
    data: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  }

  render() {
    const displayIndexValues = this.state.data.map( row => {
      return row.map(indexValue => {
        return <div>{indexValue}</div>
      })
    })

    return (
      <div id='TwentyFortyEight'>
        <h1>2048</h1>
        <div id='grid'>
          {displayIndexValues}
        </div>
      </div>
    )
  }
}

export default TwentyFortyEight
