import React, { useEffect } from "react";
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { useDispatch, useSelector } from "react-redux";
import { getApprovedProperty } from "../../actions/propertyActions";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ApprovedProperties
 **/

const ApprovedProperties = (props) => {
    const dispatch = useDispatch()
    const approvedProperty = useSelector((store) => store.getProperty)
    const { loading, response, error } = approvedProperty
  
    useEffect(() => {
      dispatch(getApprovedProperty())
    }, [])
    useEffect(() => {}, [loading, response, error])

  return (
    <div>
      <div className="row">
      <div className="col-md-2">
          <AdminSidebar />
        </div>

        <div className="col-md-9 " id="main">
          <Header title="Properties List" />
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
                <th>availability</th>
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
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default ApprovedProperties
