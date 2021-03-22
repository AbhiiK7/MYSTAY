import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SignupScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/signin')
    } else if (error) {
      console.log(error)
      //alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    dispatch(signup(firstName, lastName, phone, email, password))
  }
  return (
    <div className="row">
      <div className="col-md-4 mx-auto p-0">
        <div >
          <div className="login-box" style={{ minHeight: '900px' }}>
            <div className="login-snip">
              <label for="tab-1" className="tab">
                Sign up
              </label>
              <div className="login-space">
                <div className="sign-up-form">
                  {/* <form> */}
                  <div className="group">
                    <label for="user" className="label">
                      Firstname
                    </label>
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value)
                      }}
                      id="fname"
                      type="text"
                      className="input"
                      placeholder="Enter Firstname"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="user" className="label">
                      Lastname
                    </label>
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value)
                      }}
                      id="lname"
                      type="text"
                      className="input"
                      placeholder="Enter lastname"
                      required
                    />
                  </div>
                  <div className="group">
                      <label for="user" className="label">
                        Phone
                      </label>
                      <PhoneInput
                        className="input"
                        country={'in'}
                        value={phone}
                        onChange={setPhone}
                        buttonStyle={{
                          border: 'none',
                          padding: '10px',
                          borderRadius: '25px',
                          background: 'rgba(255, 255, 255, 0.1)',
                        }}
                        inputStyle={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          fontSize: '16px',
                          color: 'white',
                          border: 'none',
                          paddingTop: '20px',
                          paddingBottom: '20px',
                          paddingLeft: '18%',
                          borderRadius: '25px',
                          background: 'rgba(255, 255, 255, 0.1)',
                        }}
                        required
                      />
                  </div>
                  {/* <div className="group">
                    <label for="user" className="label">
                      Phone
                    </label>
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value)
                      }}
                      id="phone"
                      type="tel"
                      className="input"
                      maxLength="10"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div> */}
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      id="email"
                      type="email"
                      className="input"
                      placeholder="Enter your email address"
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
                      placeholder="Create your password"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Repeat Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Repeat your password"
                      required
                    />
                  </div>
                  <div className="group">
                    <button onClick={onSignup} className="button">
                      Sign up
                    </button>
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    Existing User? <Link to="/signin">Login here</Link>
                  </div>
                  <div className="foot">
                    Register as Owner? <Link to="/reg">Click here</Link>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
