import React, {Component} from 'react';
import Message from '../components/Message';
import {connect} from 'react-redux';

class MessageContainer extends Component{
    render(){
        return(
            <Message Message={this.props.Message}/>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Message: state.Message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);