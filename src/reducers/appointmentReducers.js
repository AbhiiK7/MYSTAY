import {
  APPOINTMENT_ADD_REQUEST,
  APPOINTMENT_ADD_SUCCESS,
  APPOINTMENT_ADD_FAIL,
  APPOINTMENT_FETCH_REQUEST,
  APPOINTMENT_FETCH_SUCCESS,
  APPOINTMENT_FETCH_FAIL,
} from '../constants/appointmentConstants'
import {
  BOOKING_FETCH_REQUEST,
  BOOKING_FETCH_SUCCESS,
  BOOKING_FETCH_FAIL,
  BOOKING_FETCH_RESET,
} from '../constants/userConstants'

export const addAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_ADD_REQUEST:
      return { loading: true }
    case APPOINTMENT_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case APPOINTMENT_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchAppsReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_FETCH_REQUEST:
      return { loading: true }
    case APPOINTMENT_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case APPOINTMENT_FETCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchBookReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_FETCH_REQUEST:
      return { loading: true }
    case BOOKING_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case BOOKING_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case BOOKING_FETCH_RESET:
      return {}
    default:
      return state
  }
}
