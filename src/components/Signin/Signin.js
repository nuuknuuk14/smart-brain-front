import React, {Component} from 'react'
import './Signin.css'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail : '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmit = () => {
    console.log("email", this.state.signInEmail);
    console.log("pw", this.state.signInPassword);
    fetch('https://desolate-thicket-39065.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }
  render() {
    const { onRouteChange } = this.props
    return (
      <div className='center form'>
          <div className="container">
            <div className="imgcontainer center">
              <p>Sign In</p>
            </div>
            <label><b>Username</b></label>
            <input onChange={this.onEmailChange} type="text" placeholder="Enter Username" name="uname" />
  
            <label><b>Password</b></label>
            <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" name="psw" />
  
            <button onClick={this.onSubmit}>Login</button>
            <div className='center'>
              <p onClick={() => onRouteChange('register')}>Register</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Signin;