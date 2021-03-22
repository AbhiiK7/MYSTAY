import Header from "../../components/Header";
import OwnerSidebar from "../../components/OwnerSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustBookings } from "../../actions/userActions";
import moment from "react-moment";

const Bookings = (props) => {
  const dispatch = useDispatch();
  const getBook = useSelector((store) => store.getBooks);
  const { loading, response, error } = getBook;

  useEffect(() => {
    dispatch(getCustBookings());
  }, []);

  useEffect(() => {}, [loading, response, error]);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <OwnerSidebar />
        </div>
        <div className="col-md-10" id="main">
          <Header title="Bookings" />
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
                        <td>
                          <moment format="YYYY/MM/DD">{p.appDate}</moment>
                        </td>
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

export default Bookings;
