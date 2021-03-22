import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import OwnerSidebar from "../../components/OwnerSidebar";
import { getCustAppointments } from "../../actions/userActions";

const ViewAppointments = (props) => {
  const dispatch = useDispatch();
  const getApp = useSelector((store) => store.getApps);
  const { loading, response, error } = getApp;

  useEffect(() => {
    dispatch(getCustAppointments());
  }, []);
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error]);
  return (
    <div>
        <div className="row">
          <div className="col-md-2">
            <OwnerSidebar />
          </div>
          <div className="col-md-10" id="main">
          <Header title="appointments" />
          <table className="col-m-9 table table-striped table-bordered">
            <thead>
              <tr>
                <th>Appointment Id</th>
                <th>Property Name</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Appointee</th>
                <th>Date</th>
              </tr>
            </thead>
            {
              <tbody>
                {response &&
                  response.data &&
                  response.data.length > 0 &&
                  response.data.map((p) => {
                    return (
                      <tr>
                        <td>{p._id}</td>
                        <td>{p.property.p_name}</td>
                        <td>{p.user.firstName + " " + p.user.lastName}</td>
                        <td>{p.user.phone}</td>
                        <td>{p.AppOf}</td>
                        <td>{p.appDate}</td>
                      </tr>
                    );
                  })}
              </tbody>
            }
          </table>
          </div>
        </div>
    </div>
  );
};

export default ViewAppointments;
