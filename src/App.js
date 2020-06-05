/* eslint-disable default-case */
import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css';

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

export class App extends Component {
  state = {
    sectionView: 0
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
      <div>
        <Slider 
          defaultValue={0}
          onChange={(e, value) => this.updateSectionView(value)}
          aria-labelledby="discrete-slider-custom"
          step={1}
          marks={marks}
          max={2}
        />
      </div>
    )
  }
}

export default withRouter(App);
