import React, { useEffect } from "react";
import Header from "../../components/Header";
import AdminSidebar from "../../components/AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../actions/userActions";

/**
 * @author
 * @function OwnerDetails
 **/

const OwnerDetails = (props) => {

  const dispatch = useDispatch()
    const property = useSelector((store) => store.getOwners)
    const { loading, response, error } = property
  
    useEffect(() => {
      dispatch(getUserDetails())
    }, [])
    // console.log('response : ',response.data);
    useEffect(() => {}, [loading, response, error])
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar />
        </div>

        <div className="col-md-9 " id="main">
          <Header title="Owner List" />
          <table className="col-m-8 table table-striped table-bordered">
            <thead>
              <tr>
                <th>Owner Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Reg Date</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.owner &&
                response.owner.length > 0 &&
                response.owner.map((o) => {
                  return (
                    <tr>
                      <td>{o._id}</td>
                      <td>{o.firstName}</td>
                      <td>{o.lastName}</td>
                      <td>{o.email}</td>
                      <td>{o.phone}</td>                 
                      <td>{o.createdAt}</td>                 
                    </tr>
                  )
                 })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
