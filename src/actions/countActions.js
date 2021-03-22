import {
  NEW_PROP_COUNT_REQUEST,
  NEW_PROP_COUNT_SUCCESS,
  NEW_PROP_COUNT_FAIL,
  GET_APP_COUNT_REQUEST,
  GET_APP_COUNT_SUCCESS,
  GET_APP_COUNT_FAIL,
  GET_PROP_COUNT_REQUEST,
  GET_PROP_COUNT_SUCCESS,
  GET_PROP_COUNT_FAIL,
  GET_APP_PROP_COUNT_REQUEST,
  GET_APP_PROP_COUNT_SUCCESS,
  GET_APP_PROP_COUNT_FAIL,
  GET_RENTED_PROP_COUNT_REQUEST,
  GET_RENTED_PROP_COUNT_SUCCESS,
  GET_RENTED_PROP_COUNT_FAIL,
  GET_BOOK_COUNT_REQUEST,
  GET_BOOK_COUNT_SUCCESS,
  GET_BOOK_COUNT_FAIL,
  GET_OWNER_COUNT_REQUEST,
  GET_OWNER_COUNT_SUCCESS,
  GET_OWNER_COUNT_FAIL,
  GET_VERIFIER_COUNT_REQUEST,
  GET_VERIFIER_COUNT_SUCCESS,
  GET_VERIFIER_COUNT_FAIL,
  GET_CUSTOMER_COUNT_SUCCESS,
  GET_CUSTOMER_COUNT_FAIL,
  GET_CUSTOMER_COUNT_REQUEST,
  GET_UNVERIFIED_PROP_COUNT_REQUEST,
  GET_UNVERIFIED_PROP_COUNT_SUCCESS,
  GET_UNVERIFIED_PROP_COUNT_FAIL,
  GET_VERIFIED_PROP_COUNT_REQUEST,
  GET_VERIFIED_PROP_COUNT_SUCCESS,
  GET_VERIFIED_PROP_COUNT_FAIL,
  GET_APPROVED_PROP_COUNT_REQUEST,
  GET_APPROVED_PROP_COUNT_SUCCESS,
  GET_APPROVED_PROP_COUNT_FAIL,
} from '../constants/countConstants'
import axios from 'axios'

// VERIFIER
export const getNewPropCount = () => {
  return (dispatch) => {
    dispatch({ type: NEW_PROP_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfUnverifiedProperties'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: NEW_PROP_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NEW_PROP_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getVerAppCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_APP_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/getAppointment'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_APP_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_APP_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }
// VERIFIER

// OWNER
  export const getPropCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_PROP_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/noOfOwnersProperties'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_PROP_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_PROP_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getAppPropCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_APP_PROP_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/noOfOwnersApprovedProperties'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_APP_PROP_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_APP_PROP_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getRentedPropCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_RENTED_PROP_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/noOfOwnersRentedProperties'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_RENTED_PROP_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_RENTED_PROP_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getOwnAppCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_APP_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/noOfOwnersAppointments'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_APP_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_APP_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getBookCount = () => {
    return (dispatch) => {
      dispatch({ type: GET_BOOK_COUNT_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const url = 'https://oap-mystay.herokuapp.com/api/noOfOwnersBookings'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: GET_BOOK_COUNT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: GET_BOOK_COUNT_FAIL,
            payload: error,
          })
        })
    }
  }

// OWNER



/* ADMIN */
export const getOwnerCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_OWNER_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfOwner'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_OWNER_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_OWNER_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getVerCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_VERIFIER_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfVerifier'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_VERIFIER_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_VERIFIER_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getCustCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_CUSTOMER_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfCustomer'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_CUSTOMER_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_CUSTOMER_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getPropertyCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_PROP_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfProperty'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_PROP_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_PROP_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getUnverifiedPropCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_UNVERIFIED_PROP_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfUnverifiedProperties'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_UNVERIFIED_PROP_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_UNVERIFIED_PROP_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getVerifiedPropCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_VERIFIED_PROP_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfVerifiedProperties'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_VERIFIED_PROP_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_VERIFIED_PROP_COUNT_FAIL,
          payload: error,
        })
      })
  }
}


export const getApprovedPropCount = () => {
  return (dispatch) => {
    dispatch({ type: GET_APPROVED_PROP_COUNT_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/noOfApprovedProperty'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_APPROVED_PROP_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_APPROVED_PROP_COUNT_FAIL,
          payload: error,
        })
      })
  }
}