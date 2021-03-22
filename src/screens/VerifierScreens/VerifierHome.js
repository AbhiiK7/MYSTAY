import VerifierSidebar from "../../components/VerifierSidebar"
import Header from "../../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNewPropCount, getVerAppCount } from '../../actions/countActions'

const VerifierHome = (props) => {
    const dispatch = useDispatch()
    const getNewProp = useSelector((store) => store.getNewPropsCount)
    const getNewApp = useSelector((store) => store.getNewAppsCount)
    const { loading, response, error} = getNewProp
    const { loading1, response1, error1} = getNewApp


    useEffect(() => {
        dispatch(getNewPropCount())
      }, [])
      // console.log('response : ',response.data);
      useEffect(() => {}, [loading, response, error])

      useEffect(() => {
        dispatch(getVerAppCount())
      }, [])
     
      useEffect(() => {}, [loading1, response1, error1])
      console.log('response : ',response1);
  return (
    <div>
      <div>
        <div className="row">
          <VerifierSidebar />
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
                                    {response && 
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">{response.count}</span></div>
                                            <div className="stat-heading">New Properties</div>
                                        </div>
                                    </div>}
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
                                    {response1 && <div className="stat-content">
                                        <div className="text-left dib">
                                    <div className="stat-text"><span className="count">{response1.count}</span></div>
                                            <div className="stat-heading">Appointments</div>
                                        </div>
                                    </div>}
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
                                    {response1 &&<div className="stat-content">
                                        <div className="text-left dib">
                                    <div className="stat-text"><span className="count">{response1.count}</span></div>
                                            <div className="stat-heading">Verification Pending</div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                {/* <!-- /Widgets --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifierHome