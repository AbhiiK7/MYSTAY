import {
  PROP_FETCH_REQUEST,
  PROP_FETCH_SUCCESS,
  PROP_FETCH_FAIL,
  PROP_FETCH_RESET,
  PROP_ADD_REQUEST,
  PROP_ADD_SUCCESS,
  PROP_ADD_FAIL,
  PROP_ADD_RESET,
  PROP_VERIFY_REQUEST,
  PROP_VERIFY_SUCCESS,
  PROP_VERIFY_FAIL,
  PROP_VERIFY_RESET,
  GET_VERIFIED_REQUEST,
  GET_VERIFIED_SUCCESS,
  GET_VERIFIED_FAIL,
  GET_VERIFIED_RESET,
  PROP_APPROVE_REQUEST,
  PROP_APPROVE_SUCCESS,
  PROP_APPROVE_FAIL,
  PROP_APPROVE_RESET,
  PROP_SEARCH_REQUEST,
  PROP_SEARCH_SUCCESS,
  PROP_SEARCH_FAIL,
  PROP_SEARCH_RESET,
  PROP_DELETE_REQUEST,
  PROP_DELETE_SUCCESS,
  PROP_DELETE_FAIL,
  PROP_DELETE_RESET,
} from '../constants/propertyConstants'

export const addPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_ADD_REQUEST:
      return { loading: true }
    case PROP_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_ADD_FAIL:
      return { loading: false, error: action.payload }
    case PROP_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_FETCH_REQUEST:
      return { loading: true }
    case PROP_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case PROP_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const verifyPropReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_VERIFY_REQUEST:
      return { loading: true }
    case PROP_VERIFY_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_VERIFY_FAIL:
      return { loading: false, error: action.payload }
    case PROP_VERIFY_RESET:
      return {}
    default:
      return state
  }
}


export const verifiedPropReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_VERIFIED_REQUEST:
      return { loading: true }
    case GET_VERIFIED_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_VERIFIED_FAIL:
      return { loading: false, error: action.payload }
    case GET_VERIFIED_RESET:
      return {}
    default:
      return state
  }
}


export const approvePropReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_APPROVE_REQUEST:
      return { loading: true }
    case PROP_APPROVE_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_APPROVE_FAIL:
      return { loading: false, error: action.payload }
    case PROP_APPROVE_RESET:
      return {}
    default:
      return state
  }
}


export const searchPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_SEARCH_REQUEST:
      return { loading: true }
    case PROP_SEARCH_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    case PROP_SEARCH_RESET:
      return {}
    default:
      return state
  }
}


export const deletePropsReducer = (state = {}, action) => {
  switch (action.type) {
    case PROP_DELETE_REQUEST:
      return { loading: true }
    case PROP_DELETE_SUCCESS:
      return { loading: false, response: action.payload }
    case PROP_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case PROP_DELETE_RESET:
      return {}
    default:
      return state
  }
}