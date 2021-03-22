import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  OWNER_SIGNUP_REQUEST,
  OWNER_SIGNUP_SUCCESS,
  OWNER_SIGNUP_FAIL,
  VERIFIER_ADD_REQUEST,
  VERIFIER_ADD_SUCCESS,
  VERIFIER_ADD_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_FAIL,
  USER_FETCH_RESET,
  USER_FETCH_SUCCESS,
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_RESET,
  USER_UPDATE_RESET,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from '../constants/userConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }

    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }

    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true }
  
      case USER_SIGNIN_SUCCESS:
        return { loading: false, response: action.payload }
  
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload }
  
      case USER_SIGNOUT:
        return {}
        
      default:
        return state
    }
  }

  export const ownerSignupReducer = (state = {}, action) => {
    switch (action.type) {
      case OWNER_SIGNUP_REQUEST:
        return { loading: true }
  
      case OWNER_SIGNUP_SUCCESS:
        return { loading: false, response: action.payload }
  
      case OWNER_SIGNUP_FAIL:
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
  }


  /* add verifier reducer */
  export const addVerifierReducer = (state = {}, action) => {
    switch (action.type) {
      case VERIFIER_ADD_REQUEST:
        return { loading: true } 
      case VERIFIER_ADD_SUCCESS:
        return { loading: false, response: action.payload }
      case VERIFIER_ADD_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const fetchUserReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_FETCH_REQUEST:
        return { loading: true }
      case USER_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case USER_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case USER_FETCH_RESET:
        return {}
      default:
        return state
    }
  }

  export const fetchProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case PROFILE_FETCH_REQUEST:
        return { loading: true }
      case PROFILE_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case PROFILE_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case PROFILE_FETCH_RESET:
        return {}
      default:
        return state
    }
  }

  export const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return { loading: true }
      case USER_UPDATE_SUCCESS:
        return { loading: false, response: action.payload }
      case USER_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case USER_UPDATE_RESET:
        return {}
      default:
        return state
    }
  }