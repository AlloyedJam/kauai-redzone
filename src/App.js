import React from 'react';
import Segment from './Components/Segment.js';
import Header from './Components/Header.js'
import './App.css';

import beach from './images/beach.jpg'
import kauai from './images/kauai.jpeg'

function App() {

  return (
    <div>
      <div className="Top-Layer">
        <Header />
      </div>

      <div className="Middle-Layer">
        <Segment segment={0} background={1}/>
        <Segment segment={1}
          title={'What does sea level rise means for Hawaii?'}
          background={2}
          msg={'  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor semper dapibus. Sed sit amet massa nisl. Sed a mi tempus, feugiat odio a, placerat nisl. Aliquam mattis dui vitae ultrices iaculis. Duis sodales risus enim, eget sollicitudin orci placerat at. Praesent sed magna ut enim aliquet hendrerit eu vel risus. Integer ultricies tempor ultricies. Fusce porta massa et arcu posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse in pharetra orci, quis tincidunt mi. Vestibulum tristique lorem non lectus rhoncus mollis. Nullam eu justo sit amet ex mollis efficitur. In tincidunt nisi vitae lacus ullamcorper elementum.'}
          image={beach}
        />
        <Segment segment={2}
          title={'What does this means for Kauai?'}
          background={2}
          msg=
          {
            'Potential damages to infrastructure and disruption to the economy'
          }
          image={kauai}
        />
        <Segment segment={3}/>
      </div>

      <div className="Bottom-Layer">
      </div>

      <div className="Ocean-background"></div>
    </div>
  );
}

export default App;
