import React, {Component} from 'react';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
          <div>
           <input
             placeholder="Enter your Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <input
               type="password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button label="Submit" onClick={(event) => this.handleClick(event)}>Login</button>
         </div>
      </div>
    );
  }
}
export default Login;