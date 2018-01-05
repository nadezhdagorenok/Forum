import React from 'react';
import PropTypes from 'prop-types';

import './ForumMessages.css';



class ForumMessages extends React.Component {

    static propTypes = {
        messageText: PropTypes.string.isRequired,
        cbHeaderTextChanged: PropTypes.func.isRequired,
        cbMessageTextChange: PropTypes.func.isRequired,
        //code: PropTypes.number.isRequired,
        cbSendClicked: PropTypes.func.isRequired,
    };
    headerTextChange = (EO) => {
        console.log('HeaderMessage: текст свободного ввода заголовка изменён - '+EO.target.value);
        this.props.cbHeaderTextChanged(EO.target.value);
    }

    messageTextChange = (EO) => {
        console.log('TextMessage: текст свободного ввода текста изменён - '+EO.target.value);
        this.props.cbMessageTextChange(EO.target.value);
    }

    sendButton = (EO) => {
        console.log('Кнопка send нажата - ');
        this.props.cbSendClicked();
    }

    render() {
        return (
            <div className='ForumMessages'>
                <form className="formForum">
                    <label htmlFor="header" className="headerMessage">Header</label>
                    <input type="text" onChange={this.headerTextChange} id="header" className="header-control" placeholder="Header" required autoFocus />
                    <label htmlFor="message" className="textMessage">Message</label>
                    <textarea id="message" className="message-control" defaultValue={this.props.messageText} onChange={this.messageTextChange} placeholder="Type your message" maxLength="140" rows="7"/>
                    <button className="sendButton" onClick={this.sendButton} type="button" >Send</button>
                </form>
            </div>
        )
    }

}

export default ForumMessages;