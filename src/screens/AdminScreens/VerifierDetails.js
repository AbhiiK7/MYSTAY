import React, { useEffect } from "react";
import Header from '../../components/Header'
import AdminSidebar from '../../components/AdminSidebar'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVerifierDetails } from "../../actions/userActions";

/**
 * @author
 * @function VerifierDetails
 **/

const VerifierDetails = (props) => {
  const dispatch = useDispatch()
  const verifier = useSelector((store) => store.getOwners)
  const { loading, response, error } = verifier

  useEffect(() => {
    dispatch(getVerifierDetails())
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])
  return (
    <div>
      <div className="row">
      <div className="col-md-2">
          <AdminSidebar />
        </div>
        <div className="col-md-9 "id="main">
          <Header title="Verifier Details" />
          <Link to="/addVerifier" type="button" class="btn btn-primary float-end">Add New Verifier</Link>
          <table className="col-m-8 mt-3 table table-striped table-bordered">
            <thead>
              <tr>
                <th>Verifier Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.verifiers &&
                response.verifiers.length > 0 &&
                response.verifiers.map((o) => {
                  return (
                    <tr>
                      <td>{o._id}</td>
                      <td>{o.firstName}</td>
                      <td>{o.lastName}</td>
                      <td>{o.email}</td>
                      <td>{o.phone}</td>
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

export default VerifierDetails;
