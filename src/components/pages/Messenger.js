import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import Sidebar from '../partials/Sidebar';
import ThreadView from '../partials/ThreadView';
import ChatInput from '../partials/ChatInput';

class Messanger extends Component{
    render(){
        return(
            <div className="messanger-container">
                <Sidebar />
                <ThreadView />
                <ChatInput />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
  })
  
const mapDispatchToProps = dispatch => ({
        
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Messanger));