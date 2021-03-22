import Header from '../../components/Header'
import OwnerSidebar from '../../components/OwnerSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  getPropCount,
  getAppPropCount,
  getRentedPropCount,
  getOwnAppCount,
  getBookCount,
} from '../../actions/countActions'

const OwnerHome = (props) => {
  const dispatch = useDispatch()
  const countProp = useSelector((store) => store.getPropsCount)
  const countAppProp = useSelector((store) => store.getAppPropsCount)
  const countRentedProp = useSelector((store) => store.getRentedPropsCount)
  const countOwnApp = useSelector((store) => store.getOwnAppsCount)
  const countBook = useSelector((store) => store.getBookCount)

  const { loading, response, error } = countProp
  const { loading1, response1, error1 } = countAppProp
  const { loading2, response2, error2 } = countRentedProp
  const { loading3, response3, error3 } = countOwnApp
  const { response4 } = countBook

  useEffect(() => {
    dispatch(getPropCount())
    dispatch(getAppPropCount())
    dispatch(getRentedPropCount())
    dispatch(getOwnAppCount())
    dispatch(getBookCount())
  }, [])
  useEffect(() => {}, [])

  return (
    <div>
      <div className="row">
        <OwnerSidebar />
        <div className="col-md-10 " id="main">
          <Header title="Dashboard" />
          {/* <!-- Widgets  --> */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response.count}</span>
                          </div>
                          <div className="stat-heading">Owned Properties</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-2">
                      <i className="pe-7s-cart"></i>
                    </div>
                    {response1 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response1.count}</span>
                          </div>
                          <div className="stat-heading">
                            Approved Properties
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-3">
                      <i className="pe-7s-browser"></i>
                    </div>
                    {response2 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response2.count}</span>
                          </div>
                          <div className="stat-heading">Rented Properties</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-3">
                      <i className="pe-7s-browser"></i>
                    </div>
                    {response3 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response3.count}</span>
                          </div>
                          <div className="stat-heading">Appointments</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-3">
                      <i className="pe-7s-browser"></i>
                    </div>
                    {response4 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response4.count}</span>
                          </div>
                          <div className="stat-heading">Bookings</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Widgets --> */}
        </div>
      </div>
    </div>
  )
}

export default OwnerHome
