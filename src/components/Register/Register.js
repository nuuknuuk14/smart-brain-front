import React, {Component} from 'react'
import './Register.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail : '',
      registerPassword: '',
    }
  }
  onNameChange = (event) => {
    this.setState({registerName: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value})
  }

  onSubmit = () => {
    fetch('https://desolate-thicket-39065.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name : this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
      })
  }
  render() {
    const { onRouteChange } = this.props
    return (
      <div className='center form'>
          <div className="container">
            <div className="imgcontainer center">
              <p>Register</p>
            </div>
            <label><b>Name</b></label>
            <input onChange={this.onNameChange} type="text" placeholder="Enter Username" name="name" />

            <label><b>Username</b></label>
            <input onChange={this.onEmailChange} type="text" placeholder="Enter Username" name="uname" />
  
            <label><b>Password</b></label>
            <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" name="psw" />
  
            <button onClick={this.onSubmit}>Register</button>
            <div className='center'>
              <p onClick={() => onRouteChange('register')}>Register</p>
            </div>
          </div>
      </div>
    );
  }
}


export default Register;