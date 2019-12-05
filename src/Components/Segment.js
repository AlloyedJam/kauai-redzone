import React from 'react';
import kauai from '../images/kauai.jpg';
import '../StyleSheets/Segment.css';
import { loadCss } from 'esri-loader';
import * as ReactDOM from 'react-dom';
import { Map } from '@esri/react-arcgis';

class Segment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagePosition: 90,
      segmentHeight: 800,
    }
  }

  getTop(i) {
    return this.state.pagePosition + (i * this.state.segmentHeight);
  }

  render() {
    const height = this.getTop(this.props.segment);

    if (this.props.background == 1) {
      return(
        <div>
          <div className="Background-Picture" style={{top: height}}>
          </div>

          <div>
            
          </div>
        </div>
      )
    } else if (this.props.background == 2) {
      return(
        <div className="No-Background-Picture" style={{top: height}}>
          <div className="Box">
            <h1> {this.props.title} </h1>
            <p> {this.props.msg} </p>
            <div className="Box-image" style={{background: 'url(' + this.props.image + ')'}}>  </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="No-Background-Picture" style={{top: height}}>
          <div className="Box">
            <h1> {this.props.title} </h1>
            <p> {this.props.msg} </p>
          </div>
        </div>
      )
    }
  }
}

export default Segment;
