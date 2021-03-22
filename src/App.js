import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import Navigation from './components/Navigation'
import ContactScreen from './screens/ContactScreen'
import OwnerRegScreen from './screens/OwnerRegScreen'
import { Provider } from 'react-redux'
import store from './store'
import OwnerHome from './screens/ownerScreens/OwnerHome'
import AddProperty from './screens/ownerScreens/AddProperty'
import Bookings from './screens/ownerScreens/Bookings'
import ListProperty from './screens/ownerScreens/ListProperties'
import PaymentHistory from './screens/ownerScreens/PaymentHistory'
import ViewAppointments from './screens/ownerScreens/ViewAppointment'
import AdminHome from './screens/AdminScreens/AdminHome'
import OwnerDetails from './screens/AdminScreens/OwnerDetails'
import VerifierDetails from './screens/AdminScreens/VerifierDetails'
import PropertiesDetails from './screens/AdminScreens/PropertiesDetails'
import AddVerifier from './screens/AdminScreens/AddVerifier'
import ApprovedProperties from './screens/AdminScreens/ApprovedProperties'
import VerifierHome from './screens/VerifierScreens/VerifierHome'
import ScheduleAppointments from './screens/VerifierScreens/ScheduleAppointments'
import PropertyVerification from './screens/VerifierScreens/PropertyVerification'
import VerifierAppointments from './screens/VerifierScreens/VerifierAppointments'
import Verifierprofile from './screens/VerifierScreens/VerifierProfile'
import VerifyProperties from './screens/VerifierScreens/VerifyProperties'
import CustomerHome from './screens/CustomerScreen/CustomerHome'
import CustProfile from './screens/CustomerScreen/CustProfile'
import VerifiedDetails from './screens/AdminScreens/VerifiedDetails'
import CustomerAppointments from './screens/CustomerScreen/CustomerAppointments'
import EditCustProfile from './screens/CustomerScreen/EditProfile'
import EditProfile from './screens/VerifierScreens/VerEditProfile'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navigation />
          <div>
            <Switch>
              <Route exact path="/" component={()=> (<Redirect to ='/home' />)}/> 
              <Route path="/signin" component={SigninScreen} />
              <Route path="/signup" component={SignupScreen} />
              <Route path="/reg" component={OwnerRegScreen} />
              <Route path="/home" component={HomeScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route path="/contact" component={ContactScreen} />
              <Route path="/editProfile" component={EditProfile} />
              
              {/* Owner screens */}
              <Route path="/owner" component={OwnerHome} />
              <Route path="/addProperty" component={AddProperty} />
              <Route path="/bookings" component={Bookings} />
              <Route path="/properties" component={ListProperty} />
              <Route path="/paymentHistory" component={PaymentHistory} />
              <Route path="/appointments" component={ViewAppointments} />

              {/* Admin Screens */}
              <Route path="/admin" component={AdminHome} />
              <Route path="/ownerDetails" component={OwnerDetails} />
              <Route path="/verifierDetails" component={VerifierDetails} />
              <Route path="/propertiesDetails" component={PropertiesDetails} />
              <Route path="/verifiedDetails" component={VerifiedDetails} />
              <Route path="/addVerifier" component={AddVerifier} />
              <Route path="/approvedProperties" component={ApprovedProperties} />

              {/* Verifier Screens */}
              <Route path="/verifier" component={VerifierHome} />
              <Route path="/schedule" component={ScheduleAppointments} />
              <Route path="/pendings" component={PropertyVerification} />
              <Route path="/verifierAppointments" component={VerifierAppointments} />
              <Route path="/verifierProfile" component={Verifierprofile} />
              <Route path="/verify" component={VerifyProperties} />

              {/* Customer Screen */}
              <Route path="/customer" component={CustomerHome} />
              <Route path="/custProfile" component={CustProfile} />
              <Route path="/custAppointments" component={CustomerAppointments} />
              <Route path="/editCustProfile" component={EditCustProfile} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

export default App
