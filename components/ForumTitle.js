import React from 'react';
import PropTypes from 'prop-types';

import './ForumTitle.css';


class ForumTitle extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return <div className='ForumTitle'>{this.props.title}</div>;
    }

}

export default ForumTitle;
