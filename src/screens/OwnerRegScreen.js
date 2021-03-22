import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reg } from '../actions/userActions'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const OwnerRegScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const ownerSignup = useSelector((store) => store.ownerSignup)
  const { loading, response, error } = ownerSignup

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/signin')
    } else if (error) {
      console.log(error)
      // alert('error while making API call')
    }
    console.log(loading)
    console.log(response)
  }, [loading, response, error])

  const onReg = () => {
    console.log('phone', phone)

    dispatch(reg(firstName, lastName, phone, email, password))
  }
  return (
    <div className="row">
      <div className="col-md-4 mx-auto p-0">
        <div >
          <div className="login-box" style={{ minHeight: '900px' }}>
            <div className="login-snip">
              <label for="tab-1" className="tab">
                Register as Owner
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
                      <button onClick={onReg} className="button">
                        Register
                      </button>
                    </div>
                  {/* </form> */}
                  <div className="hr"></div>
                  <div className="foot">
                    Existing User? <Link to="/signin">Login here</Link>
                  </div>
                  <div className="foot">
                    Sign up as User? <Link to="/signup">Click here</Link>
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

export default OwnerRegScreen
