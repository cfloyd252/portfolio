import React, { Component } from 'react'

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
        return <p>{indexValue}</p>
      })
    })

    return (
      <div>
        <h1>Hello</h1>
        {displayIndexValues}
      </div>
    )
  }
}

export default TwentyFortyEight
