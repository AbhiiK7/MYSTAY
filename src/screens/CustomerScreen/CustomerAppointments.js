import Header from '../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAppointments } from '../../actions/verifierActions'

const CustomerAppointments = (props) => {
  const dispatch = useDispatch()
  const getApp = useSelector((store) => store.getApps)
  const { loading, response, error } = getApp

  useEffect(() => {
    dispatch(getAppointments())
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])
  return (
    <div>
      <div>
        <div className="row">
            <Header className="text-center mx-auto" title="Your Appointments" />
            <table className="col-md-12 mt-5 table table-striped table-bordered mx-auto text-center">
              <thead>
                <tr>
                  <th>Appointment Id</th>
                  <th>Property Name</th>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Contact</th>
                  <th>Date</th>
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
                        <td>{p.ownerPhone}</td>
                        <td>{p.appDate}</td>
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

export default CustomerAppointments
