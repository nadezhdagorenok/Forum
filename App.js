"use strict";
require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';

import ForumBlock from './components/ForumBlock';


let titleText='The best Topics!';
let messagesArray=[{header:'', message:'', code:0}];

ReactDOM.render(
    <ForumBlock
        title={titleText}
        historyMessages={messagesArray}
    />
    , document.getElementById('container')
);
