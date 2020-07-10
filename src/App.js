import React from 'react';

import './App.css';


// import htmlContent1 from './html/2020_3d/index.html';

// import htmlContent2 from './html/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5/index.html';
// import htmlContent2 from './html/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5.js';

import htmlContent3 from './html/hilites/hilites.html';
// import HilitesJS from './html/hilites/scripts/default';


function App() {
    return (
        <div className="App">

            {/* <h3>BLAH, BLAH, BLAH!</h3> */}

            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent1 }} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent2 }} /> */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent3 }} />

        </div>
    );
}

export default App;
