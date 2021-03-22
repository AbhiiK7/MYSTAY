import Header from '../../components/Header'
import VerifierSidebar from '../../components/VerifierSidebar'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateUserProfile } from '../../actions/userActions'

const EditProfile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const onSave = () => {
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('phone')
    sessionStorage.setItem('firstName', firstName)
    sessionStorage.setItem('lastName', lastName)
    sessionStorage.setItem('phone', phone)
    dispatch(updateUserProfile(firstName,lastName,phone))
    props.history.push('/custProfile')
  }
  const onCancel = () => {
    props.history.push('/custProfile')
  }
  
  return (
    <div className="row ">
      
      <div className="col-md-10 " id="main">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-8">
                  <div className="card-block">
                    <h2 className="m-b-20 p-b-5 b-b-default f-w-600">
                      <Header title="Edit Profile" />
                      Information
                    </h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">First Name</h5>
                        <input
                        onChange={(e) => {
                          setFirstName(e.target.value)
                        }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '10px 40px',
                            borderRadius: '25px',
                          }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">Last Name</h5>
                        <input
                        onChange={(e) => {
                          setlastName(e.target.value)
                        }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '10px 40px',
                            borderRadius: '25px',
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">Email</h5>
                        <h5 className="text-muted f-w-400">
                          {sessionStorage['email']}
                        </h5>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <input
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '10px 40px',
                            borderRadius: '25px',
                          }}
                        />
                      </div>
                    </div>

                    <h2 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <button onClick={onSave} className="btn btn-primary ">
                          Save
                        </button>
                        <button onClick={onCancel} className="btn btn-danger ms-3">Cancel</button>
                      </div>
                    </div>
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

export default EditProfile
