import React from 'react';
import PropTypes from 'prop-types';

import './ForumHistory.css';


class ForumHistory extends React.PureComponent {

    static propTypes = {
        header: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    };

    render() {
        console.log('Render ForumHistory');
        return <div className='HeaderMessageBlock'>
            <div className='HeaderBlock'>{this.props.header}</div>
            <div className='MessageBlock'>{this.props.message}</div>
        </div>;
    }
}

export default ForumHistory;
