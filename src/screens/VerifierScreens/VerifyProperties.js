import VerifierSidebar from '../../components/VerifierSidebar'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAppointments,verifyProperty } from '../../actions/verifierActions'

const VerifyProperties = (props) => {
  const dispatch = useDispatch()
  const getApp = useSelector((store) => store.getApps)
  const { loading, response, error } = getApp

  useEffect(() => {
    dispatch(getAppointments())
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])

  const verifyProp = useSelector((store) => store.propVerify)
  const { loading1, response1, error1 } = verifyProp
  useEffect(() => {}, [loading1, response1, error1])
  
  const onVerify = (a_id,p_id) => {
    dispatch(verifyProperty(a_id,p_id))
    window.location.reload(true)
  }
  return (
    <div>
      <div>
        <div className="row">
          <VerifierSidebar />
          <div className="col-md-10 " id="main">
            <Header title="Property Verification" />
            <table className="col-m-8 table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Property Name</th>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {response &&
                  response.data &&
                  response.data.length > 0 &&
                  response.data.map((p) => {
                    return (
                      <tr>
                        <td>{p._id}</td>
                        <td>{p.property.p_name}</td>
                        <td>{p.ownerName}</td>
                        <td>{p.property.address}</td>
                        <td>{p.property.city}</td>
                        <td>{p.property.state}</td>
                        <td>
                          <button
                          onClick={()=>{
                            onVerify(p._id,p.property._id)}}
                            // onClick={}
                            className="btn btn-primary"
                          >
                            Verify
                          </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyProperties
