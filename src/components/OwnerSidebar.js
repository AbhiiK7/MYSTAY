import { Link } from "react-router-dom"

const OwnerSidebar = (props) => {
    return(
        <div className="col-md-2" id="sticky-sidebar">
        <div className="sidebar">
          <Link className="active" to="/owner">
            Dashboard
          </Link>
          <Link to="/addProperty">Add Property</Link>
          <Link to="/properties">List Properties</Link>
          <Link to="/bookings">New Bookings</Link>
          <Link to="/appointments">View Appointment</Link>
          {/* <Link to="/paymentHistory">Payment History</Link> */}
        </div>
      </div>
    )
}

export default OwnerSidebar