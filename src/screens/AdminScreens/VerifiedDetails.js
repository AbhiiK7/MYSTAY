import React, { useEffect } from 'react'
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getVerifiedProperty } from '../../actions/propertyActions'
import { approveProperty } from '../../actions/adminActions'


/**
 * @author
 * @function PropertiesDetails
 **/

const VerifiedDetails = (props) => {
  const dispatch = useDispatch()
  const verified = useSelector((store) => store.getVerified)
  const { loading, response, error } = verified

  useEffect(() => {
    dispatch(getVerifiedProperty())
  }, [])
  useEffect(() => {}, [loading, response, error])

  const approveProp = useSelector((store) => store.propApprove)
  const { loading1, response1, error1 } = approveProp
  useEffect(() => {}, [loading1, response1, error1])

  const onApprove = (p_id) => {
      console.log('p_id',p_id);
      
    dispatch(approveProperty(p_id))
    window.location.reload(true)
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar />
        </div>

        <div className="col-md-9 " id="main">
          <Header title="Verified Properties" />
          <table className="col-m-8 table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Property Name</th>
                <th>City</th>
                <th>State</th>
                <th>Address</th>
                <th>Status</th>
                <th>Rent</th>
                <th>Availability</th>
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
                      <td>{p.p_name}</td>
                      <td>{p.city}</td>
                      <td>{p.state}</td>
                      <td>{p.address}</td>
                      <td>{p.status}</td>
                      <td>{p.rent}</td>
                      <td>{p.availability}</td>
                      <td>
                        <button
                          onClick={() => {
                            onApprove(p._id)
                          }}
                          className="btn btn-primary"
                        >
                          Approve
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
  )
}

export default VerifiedDetails
