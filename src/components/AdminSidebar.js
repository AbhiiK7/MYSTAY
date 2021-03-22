import { Link } from "react-router-dom"

/**
* @author
* @function AdminSidebar
**/

const AdminSidebar = (props) => {
  return (
    <div className="col-m-4" id="sticky-sidebar">
        <div className="sidebar">
          <Link className="active" to="/admin">
            Dashboard
          </Link>
          <Link to="/ownerDetails">Owner Details</Link>
          <Link to="/verifierDetails">Verifier Details</Link>
          <Link to="/propertiesDetails">All Property</Link>
          <Link to="/VerifiedDetails">Verified Property</Link>
          <Link to="/approvedProperties">Approved Properties</Link>
        </div>
      </div>
   )
 }

export default AdminSidebar