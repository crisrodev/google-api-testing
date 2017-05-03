import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', function onDOMLoaded(){
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
    document.removeEventListener('DOMConentLoaded', onDOMLoaded, false);
}, false)