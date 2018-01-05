import React from 'react';
import PropTypes from 'prop-types';

import './ForumBlock.css';

import ForumTitle from './ForumTitle';
import ForumMessages from './ForumMessages';



class ForumBlock extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        startWorkMode: PropTypes.number.isRequired,

    };

    state = {
        selectedAnswerCode: null,
        messageText:'',
        workMode:this.props.startWorkMode,
        newHeader:'',
        newMessage:'',
        messageArray: [],
        countMessage: 0,
        isChangeText:false,
        isChangeHeader: false,
    }

    headerTextChange = (value) => {
        console.log('изменено поле заголовка ' + value);
        this.setState( {newHeader:value, isChangeHeader:true});
    }
    messageTextChange = (mes) => {
        console.log('изменено поле сообщения ' + mes);
        this.setState( {newMessage:mes, isChangeText:true});
    }
    Clicked = ()=>{
        let blockMessage=[...this.state.messageArray];
        let count=this.state.countMessage;
       if(this.state.isChangeHeader && this.state.isChangeText) {
           blockMessage.push([<div>{this.state.newHeader}</div>,<div>{this.state.newMessage}</div>]);
          // blockMessage.push(<div>{this.state.newMessage}</div>);
           count++;
       }
       this.setState({messageArray:blockMessage, countMessage:count});
    }




    render() {

        let messagesCode=this.state.messageArray.map( message =>
            <div key={this.state.countMessage}>{this.state.messageArray}</div>
        );

        return (
            <div className='ForumBlock'>
                <ForumTitle title={this.props.title}/>
                <ForumMessages cbHeaderTextChanged={this.headerTextChange} cbMessageTextChange={this.messageTextChange} cbSendClicked={this.Clicked} messageText={this.state.messageText}/>
                <div>{messagesCode}</div>
                <span>{this.state.countMessage}</span>
            </div>
        );

    }

}

export default ForumBlock;




