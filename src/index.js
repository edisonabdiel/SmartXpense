import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="87c874c0-8d6a-41aa-b2f9-c9faedf24fde" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>, document.getElementById('root'));



