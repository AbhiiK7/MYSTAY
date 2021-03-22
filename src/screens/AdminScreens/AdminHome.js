import React, { useEffect } from "react";
import Header from "../../components/Header";
import AdminSidebar from "../../components/AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getApprovedPropCount, getCustCount, getOwnerCount, getPropertyCount, getUnverifiedPropCount, getVerCount, getVerifiedPropCount } from "../../actions/countActions";

/**
 * @author
 * @function AdminHome
 **/

const AdminHome = (props) => {
  const dispatch = useDispatch();
  const countOwners = useSelector((store) => store.getOwnersCount)
  const countVerifiers = useSelector((store) => store.getVerifiersCount)
  const countCustomers = useSelector((store) => store.getCustomersCount)
  const countProperty = useSelector((store) => store.getPropsCount)
  const countUnverifiedProp = useSelector((store) => store.getUnverifiedPropCount)
  const countVerifiedProp = useSelector((store) => store.getVerifiedPropCount)
  const countApprovedProp = useSelector((store) => store.getApprovedPropCount)
  // const countBook = useSelector((store) => store.getBookCount)

  const { loading3, response3, error3 } = countOwners
  const { loading1, response1, error1 } = countVerifiers
  const { loading2, response2, error2 } = countCustomers
  const { loading, response, error } = countProperty
  const { loading4, response4, error4 } = countUnverifiedProp
  const { loading5, response5, error5 } = countVerifiedProp
  const { loading6, response6, error6 } = countApprovedProp
  // const { response4 } = countBook

  useEffect(() => {
    dispatch(getOwnerCount())
    dispatch(getVerCount())
    dispatch(getCustCount())
    dispatch(getPropertyCount())
    dispatch(getUnverifiedPropCount())
    dispatch(getVerifiedPropCount())
    dispatch(getApprovedPropCount())
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
        <AdminSidebar />
        </div>
        <div className="col-md-10 " id="main">
          <Header title="Dashboard"/>
          {/* <!-- Widgets  --> */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response3 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response3.count}</span>
                          </div>
                          <div className="stat-heading">Owners</div>
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
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response1 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response1.count}</span>
                          </div>
                          <div className="stat-heading">Verifiers</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response2 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response2.count}</span>
                          </div>
                          <div className="stat-heading">Customers</div>
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
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response.count}</span>
                          </div>
                          <div className="stat-heading">Properties</div>
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
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response4 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response4.count}</span>
                          </div>
                          <div className="stat-heading">Unverified Properties</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response5 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response5.count}</span>
                          </div>
                          <div className="stat-heading">Verified Properties</div>
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
                    <div className="stat-icon dib flat-color-1">
                      <i className="pe-7s-cash"></i>
                    </div>
                    {response6 && (
                      <div className="stat-content">
                        <div className="text-left dib">
                          <div className="stat-text">
                            <span className="count">{response6.count}</span>
                          </div>
                          <div className="stat-heading">Approved Properties</div>
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
  );
};

export default AdminHome;
