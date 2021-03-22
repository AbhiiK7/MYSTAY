import Header from '../../components/Header'
// import ProfileScreen from './VerEditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../actions/userActions'
import { useEffect } from 'react'

const Verifierprofile = (props) => {
  const dispatch = useDispatch()
  const getUser = useSelector((store) => store.getProfile)
  const { loading, response, error } = getUser

  useEffect(() => {
    dispatch(getUserProfile())
    
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])

 const onEditProfile=()=>{
    props.history.push('/editCustProfile')
  }

  return (
    <div>
      <div>
        <div className="row">

          <div className="col-md-10 " id="main">
            <div className="col-md-10 " id="main">
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h2 className="m-b-20 p-b-5 b-b-default f-w-600" >
                            <Header title="Profile" />
                            Information
                            <button onClick={onEditProfile} className="btn btn-primary float-end">Edit Profile</button>
                          </h2>

                          <div className="row">
                            <div className="col-sm-6">
                              <h3 className="m-b-10 f-w-600">First Name</h3>
                              <h4 className="text-muted f-w-400">
                                {sessionStorage['firstName']}
                              </h4>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="m-b-10 f-w-600">Last Name</h3>
                              <h4 className="text-muted f-w-400">
                              {sessionStorage['lastName']}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <h3 className="m-b-10 f-w-600">Email</h3>
                              <h4 className="text-muted f-w-400">{sessionStorage['email']}</h4>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="m-b-10 f-w-600">Phone</h3>
                              <h4 className="text-muted f-w-400">{sessionStorage['phone']}</h4>
                            </div>
                          </div>
                          <h2 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                            Designation
                          </h2>
                          <div className="row">
                            <div className="col-sm-6">
                              <h3 className="m-b-10 f-w-600">Role</h3>
                              <h4 className="text-muted f-w-400">{sessionStorage['role']}</h4>
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
        </div>
      </div>
    </div>
  )
}

export default Verifierprofile
