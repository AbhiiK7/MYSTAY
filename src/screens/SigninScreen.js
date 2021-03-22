import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userActions'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, response, error } = userSignin

  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    // console.log(response.status)
    if (response && response.status == 'success') {
      console.log('Phone', response.data.phone)

      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('firstName', response.data.firstName)
      sessionStorage.setItem('lastName', response.data.lastName)
      sessionStorage.setItem('email', response.data.email)
      sessionStorage.setItem('phone', response.data.phone)
      sessionStorage.setItem('role', response.data.role)
      if (response.data.role == 'admin') {
        props.history.push('/admin')
        window.location.reload(true)
      } else if (response.data.role == 'verifier') {
        props.history.push('/verifier')
        window.location.reload(true)
      } else if (response.data.role == 'owner') {
        props.history.push('/owner')
        window.location.reload(true)
      } else {
        props.history.push('/customer')
        sessionStorage.setItem('role', response.data.role)
        window.location.reload(true)
      }
    } else if (response && response.status == 'error') {
      alert(response.error)
    }
  }, [loading, response, error])
  return (
    <div className="row">
      <div className="col-md-4 mx-auto p-0">
        <div>
          <div className="login-box">
            <div className="login-snip">
              <label className="tab">Login</label>
              <div className="login-space">
                <div className="login">
                  {/* <form> */}
                  <div className="group">
                    <label for="validationDefaultUsername" className="label">
                      Email
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      id="validationDefaultUsername"
                      type="email"
                      className="input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="group">
                    <button onClick={onSignin} type="submit" className="button">
                      Sign in
                    </button>
                  </div>
                  {/* </form> */}
                  <div className="hr"></div>
                  <div className="foot">
                    {/* <label for="tab-2">New User? Sign up here</label> */}
                    New User? <Link to="/signup">Signup here</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninScreen
