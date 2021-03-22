import { userSigninReducer, userSignupReducer, ownerSignupReducer, fetchUserReducer, fetchProfileReducer, addVerifierReducer, updateProfileReducer } from './reducers/userReducers'
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addPropertyReducer, fetchPropsReducer, verifyPropReducer, verifiedPropReducer, approvePropReducer, searchPropsReducer, deletePropsReducer } from './reducers/propertyReducers'
import { addAppointmentReducer, fetchAppsReducer, fetchBookReducer } from './reducers/appointmentReducers'
import { countNewPropsReducer, countNewAppReducer, countPropsReducer, countAppPropsReducer, countRentedPropsReducer, countOwnAppReducer, countBookPropsReducer, ownersCount, countOwners, countVerifier, countcUSTOMER, countUnverifiedProp, countVerifiedProp, countApprovedProp } from './reducers/countReducers'

const reducers = combineReducers({
  // signin & signup
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  ownerSignup: ownerSignupReducer,

  //common
  getProfile: fetchProfileReducer,
  updateProfile: updateProfileReducer,

  // property
  getProperty: fetchPropsReducer,
  addNewProperty: addPropertyReducer,
  getVerified: verifiedPropReducer,
  propApprove: approvePropReducer,
  searchCity: searchPropsReducer,
  deleteProperty: deletePropsReducer,

  // appointment
  addAppointment: addAppointmentReducer,
  getApps: fetchAppsReducer,
  getBooks: fetchBookReducer,

  // verifier
  getOwners: fetchUserReducer,
  propVerify: verifyPropReducer,

  //  admin
  addVerifiers: addVerifierReducer,
  
  // COUNT
  getNewPropsCount: countNewPropsReducer,
  getNewAppsCount: countNewAppReducer,
  getPropsCount: countPropsReducer,
  getAppPropsCount: countAppPropsReducer,
  getRentedPropsCount: countRentedPropsReducer,
  getOwnAppsCount: countOwnAppReducer,
  getBookCount: countBookPropsReducer,
  getOwnersCount: countOwners,
  getVerifiersCount: countVerifier,
  getCustomersCount: countcUSTOMER,
  getUnverifiedPropCount: countUnverifiedProp,
  getVerifiedPropCount: countVerifiedProp,
  getApprovedPropCount: countApprovedProp,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
