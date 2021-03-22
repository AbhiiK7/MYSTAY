import axios from 'axios'
import {
  PROP_FETCH_REQUEST,
  PROP_FETCH_SUCCESS,
  PROP_FETCH_FAIL,
  PROP_VERIFY_REQUEST,
  PROP_VERIFY_SUCCESS,
  PROP_VERIFY_FAIL,
} from '../constants/propertyConstants'
import {
  APPOINTMENT_ADD_REQUEST,
  APPOINTMENT_ADD_SUCCESS,
  APPOINTMENT_ADD_FAIL,
  APPOINTMENT_FETCH_REQUEST,
  APPOINTMENT_FETCH_SUCCESS,
  APPOINTMENT_FETCH_FAIL,
} from '../constants/appointmentConstants'

export const pendingProperties = () => {
  return (dispatch) => {
    dispatch({ type: PROP_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/unverifiedProp'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PROP_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROP_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const addApointment = (propertyId, appDate) => {
  console.log('p_id', propertyId)
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
      propertyId,
      appDate,
    }
    console.log(body)
    const url = 'https://oap-mystay.herokuapp.com/api/verifier/appointment'
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

export const getAppointments = () => {
  return (dispatch) => {
    dispatch({ type: APPOINTMENT_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/showappointment'
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

export const verifyProperty = (a_id, p_id) => {
  return (dispatch) => {
    dispatch({ type: PROP_VERIFY_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const body = {
      a_id,
      p_id,
    }
    console.log(body)
    const url = 'https://oap-mystay.herokuapp.com/api/verifier/verify'
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: PROP_VERIFY_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROP_VERIFY_FAIL,
          payload: error,
        })
      })
  }
}
