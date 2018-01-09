import React from 'react';
import PropTypes from 'prop-types';
import {default as isoFetch} from 'isomorphic-fetch';

import './ForumBlock.css';
import ForumTitle from './ForumTitle';
import ForumMessages from './ForumMessages';
import ForumHistory from './ForumHistory';


class ForumBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loadData();
    }
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     historyMessages: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             code: PropTypes.number.isRequired,
    //             header: PropTypes.string.isRequired,
    //             message: PropTypes.string.isRequired,
    //         })
    //     ),
    // };

    state = {
        dataReady: false,
        selectedAnswerCode: null,
        newHeader:'',
        newMessage:'',
        messageArray: this.props.historyMessages,
        countMessage: 0,
        isChangeText:false,
        isChangeHeader: false,
    };

    headerTextChange = (value) => {
        console.log('изменено поле заголовка ' + value);
        this.setState( {newHeader:value, isChangeHeader:true});
    };
    messageTextChange = (mes) => {
        console.log('изменено поле сообщения ' + mes);
        this.setState( {newMessage:mes, isChangeText:true});
    };
    Clicked = ()=> {
        let blockMessage = [...this.state.messageArray];
        let count = this.state.countMessage;
        let key = blockMessage.length;
        if (this.state.isChangeHeader && this.state.isChangeText) {
            blockMessage.push({header:this.state.newHeader, message:this.state.newMessage, code: key});
            count++;
        this.setState({messageArray: blockMessage, countMessage: count, keyCode: key, isChangeHeader: false, isChangeText: false, newMessage:'', newHeader:''});
        }
    };

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
    fetchSuccess = (loadedData) => {
        console.log(loadedData);
        this.setState({
            dataReady:true,
            messageArray:loadedData,
        });
    };


    loadData = () => {

        isoFetch("http://localhost:3000/messages", {
            method: 'post',
            headers: {
                "Accept": "application/json",
            },
        })
            .then( (response) => {
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                try {
                    this.fetchSuccess(data);
                }
                catch ( error ){
                    this.fetchError(error.message);
                }
            })
            .catch( (error) => {
                this.fetchError(error.userMessage||error.message);
            })
        ;

    };

    render() {
        console.log('Render ForumBlock');

        // if ( !this.state.dataReady )
        //     return <div>data load...</div>;

        let messagesCode=this.state.messageArray.map( v =>
            <ForumHistory key={v.code} header={v.header} message={v.message}/>//<div className='HeaderMessageBlock'{this.state.messageArray}</div>
        );

        return (
            <div className='ForumBlock'>
                <ForumTitle title={this.props.title}/>
                <ForumMessages cbHeaderTextChanged={this.headerTextChange} cbMessageTextChange={this.messageTextChange} cbSendClicked={this.Clicked} newHeader={this.state.newHeader} newMessage={this.state.newMessage}/>
                <div className='MessageBlock'>{messagesCode}</div>
                <div className='CountMessage'>
                    <span>Number of messages: </span>
                    <span>{this.state.countMessage}</span>
                </div>
            </div>
        );

    }

}

export default ForumBlock;




