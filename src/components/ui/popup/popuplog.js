import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// https://www.npmjs.com/package/reactjs-popup 
export default () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
    </Popup>
);