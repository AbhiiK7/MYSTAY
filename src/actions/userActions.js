import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  OWNER_SIGNUP_REQUEST,
  OWNER_SIGNUP_SUCCESS,
  OWNER_SIGNUP_FAIL,
  VERIFIER_ADD_FAIL,
  VERIFIER_ADD_SUCCESS,
  VERIFIER_ADD_REQUEST,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  BOOKING_FETCH_REQUEST,
  BOOKING_FETCH_SUCCESS,
  BOOKING_FETCH_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../constants/userConstants'
import axios from 'axios'
import { APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS, APPOINTMENT_ADD_FAIL, APPOINTMENT_FETCH_REQUEST, APPOINTMENT_FETCH_SUCCESS, APPOINTMENT_FETCH_FAIL } from '../constants/appointmentConstants'

export const logout = () => {
  return (dispatch) => {
    sessionStorage.clear()
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/signin'
  }
}

export const signup = (firstName, lastName, phone, email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {
      firstName,
      lastName,
      phone,
      email,
      password,
    }
    const url = 'http://localhost:3000/api/signup'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {
      email,
      password,
    }
    const url = 'http://localhost:3000/api/signin'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const reg = (firstName, lastName, phone, email, password) => {
  return (dispatch) => {
    dispatch({
      type: OWNER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {
      firstName,
      lastName,
      phone,
      email,
      password,
    }
    const url = 'http://localhost:3000/api/owner/signup'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: OWNER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: OWNER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}
//user profile
export const getUserProfile = () => {
  return (dispatch) => {
    dispatch({ type: PROFILE_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'http://localhost:3000/api/getUserDetails'
    axios
      .get(url, header)
      .then((response) =>
       {
        dispatch({
          type: PROFILE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROFILE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

// Admin Functions

export const addVerifier = (firstName,
  lastName,
  email,
  phone,
  password) => {
  return (dispatch) => {
    dispatch({
      type: VERIFIER_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }
    const body = {
      firstName,
      lastName,
      email,
      phone,
      password,
    }
    const url = 'http://localhost:3000/api/admin/addverifier'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: VERIFIER_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VERIFIER_ADD_FAIL,
          payload: error,
        })
      })
  }
}


export const getUserDetails = () => {
  return (dispatch) => {
    dispatch({ type: USER_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'http://localhost:3000/api/getAllOwner'
    axios
      .get(url, header)
      .then((response) =>
       {
        dispatch({
          type: USER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}


// fetch verifier details (admin)
export const getVerifierDetails = () => {
  return (dispatch) => {
    dispatch({ type: USER_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'http://localhost:3000/api/getAllVerifiers'
    axios
      .get(url, header)
      .then((response) =>
       {
        dispatch({
          type: USER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

// user add Appoints
export const addUserApointment = (property, appDate) => {
  console.log('p_id', property)
  console.log('Date', appDate)

  return (dispatch) => {
    dispatch({ type: APPOINTMENT_ADD_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const body = {
      property,
      appDate,
    }
    console.log(body)
    const url = 'http://localhost:3000/api/user/appointOwner'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: APPOINTMENT_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: APPOINTMENT_ADD_FAIL,
          payload: error,
        })
      })
  }
}


export const getCustBookings = () => {
  return (dispatch) => {
    dispatch({ type: BOOKING_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'http://localhost:3000/api/getCustomerBookings'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: BOOKING_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: BOOKING_FETCH_FAIL,
          payload: error,
        })
      })
  }
}


export const getCustAppointments = () => {
  return (dispatch) => {
    dispatch({ type: APPOINTMENT_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'http://localhost:3000/api/getAppointments'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: APPOINTMENT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: APPOINTMENT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}


export const updateUserProfile = (firstName, lastName, phone) => {
  
    return (dispatch) => {
      dispatch({ type: USER_UPDATE_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const body = {
        firstName, lastName, phone
      }
      console.log(body)
      const url = 'http://localhost:3000/api/updateProfile'
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: USER_UPDATE_FAIL,
            payload: error,
          })
        })
    }
  }