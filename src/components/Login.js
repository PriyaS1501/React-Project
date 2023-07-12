import React, { Component } from 'react'
import axios from 'axios'


export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Users: [],
      username: { name: 'username', value: '', error: '' },
      password: { name: 'password', value: '', error: '' }
    }
  }
  fetchData = () => {
    axios.get("https://dark-pink-quail-hose.cyclic.app/Users")
      .then((res) => {
        console.log(res.data)
        this.setState({ Users: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { username, password } = this.state
    // function App() {
    //   const initialValues = { username: "", password: "" };
    //   const [formValues, setFormvalues] = useState(initialValues)
    //   const handleChange = (e) => {
    //     console.log(e.target)
    //     const {name,value}=e.target
    //     setFormvalues({...formValues, [name]:value})
    //   }
    // }
    return (
      <div>
        <section>
          <div class="container">
            <div class="row">
              <div class="breadcrumb">
                <h2>Login</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="gray-bg p-5">
            <div class="container">
              <div class="row">
                <div class="login-form">
                  <form onSubmit={this.onSubmit}>
                    <div class="row">
                      <div class="col-md-10 m-2">
                        <label>Username<sup>*</sup> :</label>
                        <input type="text"
                          placeholder="Enter..."
                          name="username.name"
                          value="username.value"
                          class="form-control"
                          // value={formValues.username}
                          onChange={this.onchange}
                          required></input>
                        <div style={{ color: 'red' }}>
                          {username.error.length > 4 && username.error}
                        </div>


                      </div>
                      <div class="col-md-10 m-2">
                        <label>Password<sup>*</sup> :</label>
                        <input type="password"
                          placeholder="Enter..."
                          name="password.name"
                          value='password.value'
                          class="form-control"
                          // value={formValues.password}
                          onChange={this.onChange}
                          required></input>
                        <div style={{ color: 'red' }}>
                          {password.error.length > 4 && password.error}
                        </div>
                      </div>
                      <div class="col-md-10 m-2">
                        <button type="submit" class="btn btn-secondary" >Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </section >

      </div >
    )
  }
  onChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    this.setState({ [name]: { ...this.state[name], value} })
  }
}

export default Login
