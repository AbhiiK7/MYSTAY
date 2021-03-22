import { Link } from 'react-router-dom'

const VerifierSidebar = (props) => {
  return (
    <div className="col-md-2" id="sticky-sidebar">
      <div className="sidebar">
        <Link className="active" to="/verifier">
          Dashboard
        </Link>
        <Link to="/pendings">New Properties</Link>
        <Link to="/verifierAppointments">Appointments</Link>
        <Link to="/verify">Verify Properties</Link>
        <Link to="/verifierProfile">My Profile</Link>
      </div>
    </div>
  )
}

export default VerifierSidebar
