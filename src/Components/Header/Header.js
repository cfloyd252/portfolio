/* eslint-disable default-case */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import './Header.css'

const marks = [
  {
    value: 0,
    label: <Link to='/'>Welcome</Link>,
  },
  {
    value: 1,
    label: <Link to='/bio'>Bio</Link>,
  },
  {
    value: 2,
    label: <Link to='/projects'>Projects</Link>,
  },
];

function findDefaultValue(param) {
  switch(param) {
    case '/bio':
      return 1;
    case '/projects':
      return 2;
    default:
      return 0
  }
}

export class Header extends Component {
  state = {
    defaultValue: findDefaultValue(this.props.location.pathname)
  }
  
  updateSectionView = (value) => {
    switch(value) {
      case 0:
        this.props.history.push(`/`)
        break;
      case 1:
        this.props.history.push(`/bio`)
        break;
      case 2:
        this.props.history.push(`/projects`)
        break;
    }
  }
      
    render() {
      return (
        <header>
            <div id='name'>
            <span role='img' aria-label='Programmer'>👨🏽‍💻</span><img src={require('../../images/icons/name.png')} alt='Christopher Floyd Logo'/><span role='img'>👨🏽‍💻</span>
            </div>
            <Slider 
              defaultValue={this.state.defaultValue}
              onChange={(e, value) => this.updateSectionView(value)}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
              max={2}
            />
        </header>
      )
    }
}

export default Header
