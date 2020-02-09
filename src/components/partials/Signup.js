import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../assets/css/swag.css';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordAgain: '',
            name: '',
            username: '',
            error: ''
        }
    }
    render(){
        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <div className = "form-wrapper">
                                <h3>Signup</h3>
                                <form
                                    onSubmit = {e => {
                                        e.preventDefault();
                                        if(this.props.socket){
                                            let empty = 0;
                                            Object.keys(this.state).map(key => {
                                                if(this.state[key] === ''){
                                                    empty += 1
                                                }
                                            })
                                            if(empty>0){
                                                return this.setState({error: 'All fields required'})
                                            }else{
                                                if(this.state.password  !== this.state.passwordAgain){
                                                    return this.setState({error: 'passwords must match'})
                                                }
                                            }
                                            this.props.socket.send(JSON.stringify({
                                                type: "SIGNUP",
                                                data: {
                                                    email: this.state.email,
                                                    password: this.state.password,
                                                    name: this.state.name,
                                                    username: this.state.username
                                                }
                                            }))
                                        }
                                    }}
                                
                                
                                
                                >
                                    <p>have account? <Link to="/login">Login</Link></p>
                                    {this.state.error ? 
                                       <p className = "text-danger">{this.state.error}</p> 
                                    : null}
                                    
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className = "form-group">
                                                <label>Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="name"
                                                    value = {this.state.name}
                                                    onChange = {e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                            </div>
                                        <div className="col-md-6">
                                            <div className = "form-group">
                                                <label>Username</label>
                                                <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="username"
                                                        value = {this.state.username}
                                                        onChange = {e => this.setState({username: e.target.value})}
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className = "form-group">
                                                <label>email</label>
                                                <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        placeholder="email"
                                                        value = {this.state.email}
                                                        onChange = {e => this.setState({email: e.target.value})}
                                                    />
                                            </div>
                                        </div>
                                   </div>

                                   <div className="row" >
                                        <div className="col-md-6">
                                            <div className = "form-group">
                                                <label>password</label>
                                                <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        placeholder="password"
                                                        value = {this.state.password}
                                                        onChange = {e => this.setState({password: e.target.value})}
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className = "form-group">
                                                <label>password(Again)</label>
                                                <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        placeholder="password Again"
                                                        value = {this.state.passwordAgain}
                                                        onChange = {e => this.setState({passwordAgain: e.target.value})}
                                                    />
                                            </div>
                                        </div>
                                   </div>
                                    <div className="text-center">
                                    <button className = "btn btn-primary">Sign up</button>
                                    </div>
                                    
                                </form>
                        </div>
                    </div>
                </div>
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
)(Signup);