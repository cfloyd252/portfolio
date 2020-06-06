import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="mailto:cfloyd252@gmail.com" target="_blank"><img src={require('../../images/icons/gmail.png')} alt="Email Icon" /></a>
                <a href="https://www.linkedin.com/in/cfloyd252/" target="_blank"><img src={require('../../images/icons/linkedin.png')} alt="Linkedin Icon" /></a>
                <a href="https://github.com/cfloyd252" target="_blank"><img src={require('../../images/icons/github.png')} alt="GitHub Icon" /></a>
            </footer>
        )
    }
}

export default Footer
