import React, { Component } from 'react'
import './Welcome.css'

export class Welcome extends Component {
    render() {
        return (
            <main id='welcome'>
                <h2 id="opening_statement">My name is Chris and I went to math camp.</h2>
                <img src={require('../../images/fallout_suit.jpeg')}/>
            </main>
        )
    }
}

export default Welcome
