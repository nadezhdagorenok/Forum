import React from 'react';
import PropTypes from 'prop-types';

import './ForumTitle.css';


class ForumTitle extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        console.log('Render ForumTitle');
        return <div className='ForumTitle'>
                   <h1>{this.props.title}</h1>
               </div>;
    }
}

export default ForumTitle;
