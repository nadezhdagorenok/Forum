import React from 'react';
import PropTypes from 'prop-types';
import './ForumMessages.css';


class ForumMessages extends React.PureComponent {

    static propTypes = {
        newHeader: PropTypes.string.isRequired,
        newMessage: PropTypes.string.isRequired,
        cbHeaderTextChanged: PropTypes.func.isRequired,
        cbMessageTextChange: PropTypes.func.isRequired,
        cbSendClicked: PropTypes.func.isRequired,
    };
    headerTextChange = (EO) => {
        console.log('HeaderMessage: текст свободного ввода заголовка изменён - '+EO.target.value);
        this.props.cbHeaderTextChanged(EO.target.value);
    };

    messageTextChange = (EO) => {
        console.log('TextMessage: текст свободного ввода текста изменён - '+EO.target.value);
        this.props.cbMessageTextChange(EO.target.value);
    };

    sendButton = () => {
        console.log('Кнопка send нажата - ');
        this.props.cbSendClicked();
    };

    render() {
        console.log('Render ForumMessages');
        return (
            <div className='ForumMessages'>
                <form className='FormForum' action='http://localhost:3000/messages' method='post'>
                    <div className='InputBlock'>
                        <label htmlFor='header' className='HeaderMessage'>Header</label>
                        <input type='text' onChange={this.headerTextChange} id='header' className='Header-control'  value={this.props.newHeader} placeholder="Type header" required autoFocus />
                    </div>
                    <div className='InputBlock'>
                        <label htmlFor='message' className='TextMessage'>Message</label>
                        <textarea id='message' className='Message-control'  value={this.props.newMessage} onChange={this.messageTextChange} placeholder='Type your message' maxLength='140' rows='7'/>
                    </div>
                    <input className='SendButton' onClick={this.sendButton} type='submit' value='Send' />
                </form>
            </div>
        )
    }

}

export default ForumMessages;