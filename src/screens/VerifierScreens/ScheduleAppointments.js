import VerifierSidebar from '../../components/VerifierSidebar'
import Header from '../../components/Header'
import DatePicker from 'react-datepicker'
import { useState, useEffect } from 'react'
import Moment from 'react-moment'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { addApointment } from '../../actions/verifierActions'
import { addUserApointment } from '../../actions/userActions'

const ScheduleAppointments = (props) => {
  const [startDate, setStartDate] = useState(new Date())
  var Date1 = moment(startDate).format('yyyy-MM-DD')
  const dispatch = useDispatch()

  const addAppoint = useSelector((store) => store.addAppointment)
  const { loading, response, error } = addAppoint

  useEffect(() => {
    if (response && response.status == 'success') {
      if (sessionStorage.role == 'user') props.history.push('/custAppointments')
      else if (sessionStorage.role == 'verifier')
        props.history.push('/verifierAppointments')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onScheduleVer = () => {
    dispatch(addApointment(`${sessionStorage['p_id']}`, Date1))
    // sessionStorage.removeItem('p_id')
    // sessionStorage.removeItem('p_name')
    // sessionStorage.removeItem('o_name')
  }
  const onCancelVer = () => {
    sessionStorage.removeItem('p_id')
    sessionStorage.removeItem('p_name')
    sessionStorage.removeItem('o_name')
    props.history.push('/pendings')
  }

  const onScheduleCust = () => {
    dispatch(addUserApointment(`${sessionStorage['p_id']}`, Date1))
    // sessionStorage.removeItem('p_id')
    // sessionStorage.removeItem('p_name')
    // sessionStorage.removeItem('o_name')
  }
  const onCancelCust = () => {
    sessionStorage.removeItem('p_id')
    sessionStorage.removeItem('p_name')
    sessionStorage.removeItem('o_name')
    props.history.push('/customer')
  }
  return (
    <div>
      <div>
        <div className="row">
          {sessionStorage.role == 'verifier' && <VerifierSidebar />}
          <div className="col-md-10 " id="main">
            <div className="page-content page-container" id="page-content">
              <div className="padding">
                <div className="row container d-flex justify-content-center">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          <Header title="Schedule Appointment" />
                          Appointment Details
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Property id</p>
                            <h6 className="text-muted f-w-400">
                              {sessionStorage['p_id']}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600"> Property Name</p>
                            <h6 className="text-muted f-w-400">
                              {sessionStorage['p_name']}
                            </h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Owner name</p>
                            <h6 className="text-muted f-w-400">
                              {sessionStorage['o_name']}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Date</p>
                            <h6 className="text-muted f-w-400">
                              <DatePicker
                                dateFormat="yyyy-MM-dd"
                                selected={startDate}
                                onChange={setStartDate}
                              />
                              {/* <Moment date={startDate} format="yyyy-MM-DD" /> */}
                            </h6>
                          </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Action
                        </h6>

                        {/* customer button */}
                        {sessionStorage.role == 'user' && (
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">
                                <button
                                  onClick={onScheduleCust}
                                  className="btn btn-primary">
                                  Schedule Appointment
                                </button>
                              </p>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">
                                <button
                                  onClick={onCancelCust}
                                  className="btn btn-danger">
                                  Cancel
                                </button>
                              </p>
                            </div>
                          </div>
                        )}

                        {/* verifier button  */}
                        {sessionStorage.role == 'verifier' && (
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">
                                <button
                                  onClick={onScheduleVer}
                                  className="btn btn-primary">
                                  Schedule Appointment
                                </button>
                              </p>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">
                                <button
                                  onClick={onCancelVer}
                                  className="btn btn-danger">
                                  Cancel
                                </button>
                              </p>
                            </div>
                          </div>
                        )}
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

export default ScheduleAppointments
