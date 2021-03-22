import logo from '../logo/MyStay2.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const Navigation = (props) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <nav
        className="navbar navbar-fixed-top navbar-custom navbar-border bg-dark"
        role="navigation"
        style={{ position: 'fixed' }}
      >
        <div className="navbar-header">
          <a
            onclick="showOrHideMenuDropDown();"
            className="navbar-toggle"
            id="menuTab"
          >
            <i className="icon-reorder"></i>
            Menu
          </a>
          {sessionStorage.token && <Link style={{fontSize:"35px"}}>
            <img src={logo} classNameName="logo" />
            <b>MY</b>STAY
          </Link>}
          {!sessionStorage.token && <Link to="/home" style={{fontSize:"35px"}}>
            <img src={logo} classNameName="logo" />
            <b>MY</b>STAY
          </Link>}
        </div>
        <div id="main-nav">
          {sessionStorage.token && sessionStorage.role != 'user' && (
            <div className="navbar-item-hover navbar-item pull-right">
              <div>
                <Link onClick={onLogout}>Logout</Link>
              </div>
            </div>
          )}

          {sessionStorage.role == 'user' && (
            <div id="menuTab" className="navbar-item pull-right">
              <div className="menuPadding">
                <ul className=" navbar-item navbar-nav">
                  <li>
                    <a
                      className=" dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Account
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li className="animated">
                        <Link to="/customer" className="dropdown-item">
                          Home
                        </Link>
                      </li>
                      <li className="animated">
                        <Link to="/custProfile" className="dropdown-item">
                          My Profile
                        </Link>
                      </li>
                      {/* <li className="animated">
                        <Link to="/custBookings" className="dropdown-item">
                          My Bookings
                        </Link>
                      </li> */}
                      <li className="animated">
                        <Link to="/custAppointments" className="dropdown-item">
                          My Appointments
                        </Link>
                      </li>
                      <li className="animated">
                        <a
                          onClick={onLogout}
                          className="dropdown-item"
                          href="#"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>

                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link to="/customer" className="dropdown-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/editProfile" className="dropdown-item">
                          My Profile
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!sessionStorage.token && (
            <div className="navbar-item-hover navbar-item pull-right">
              <div>
                <Link to="/signin">Login / Sign Up</Link>
              </div>
            </div>
          )}

          <div className="navbar-item-hover navbar-item pull-right">
            <div>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* <div className="navbar-item-hover navbar-item pull-right">
            <div>
              <Link to="/about">About Us</Link>
            </div>
          </div> */}

          {!sessionStorage.token && (
            <div className="navbar-item-hover navbar-item pull-right">
              <div>
                <Link to="/home">Home</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navigation
