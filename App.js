"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ForumBlock from './components/ForumBlock';

let titleText='Лучшие темы!';

ReactDOM.render(
    <ForumBlock
        title={titleText}
        startWorkMode={1}
    />
    , document.getElementById('container')
);
