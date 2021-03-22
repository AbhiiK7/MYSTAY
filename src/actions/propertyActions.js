import {
  PROP_FETCH_REQUEST,
  PROP_FETCH_SUCCESS,
  PROP_FETCH_FAIL,
  PROP_ADD_REQUEST,
  PROP_ADD_SUCCESS,
  PROP_ADD_FAIL,
  GET_VERIFIED_REQUEST,
  GET_VERIFIED_SUCCESS,
  GET_VERIFIED_FAIL,
  PROP_SEARCH_REQUEST,
  PROP_SEARCH_SUCCESS,
  PROP_SEARCH_FAIL,
  PROP_DELETE_REQUEST,
  PROP_DELETE_SUCCESS,
  PROP_DELETE_FAIL,
} from '../constants/propertyConstants'
import axios from 'axios'

export const addProperty = (
  p_name,
  city,
  state,
  address,
  rent,
  description,
  parking,
  ac,
  furnished,
  security
) => {
  return (dispatch) => {
    dispatch({
      type: PROP_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const body = {
      p_name,
      city,
      state,
      address,
      rent,
      description,
      parking,
      ac,
      furnished,
      security,
    }

    const url = 'https://oap-mystay.herokuapp.com/api/addImages'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PROP_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROP_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const properties = () => {
  return (dispatch) => {
    dispatch({ type: PROP_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/getProperties'
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

/* owner */
export const getAllProperty = () => {
  return (dispatch) => {
    dispatch({ type: PROP_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/getAllProperties'
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

export const getApprovedProperty = () => {
  return (dispatch) => {
    dispatch({ type: PROP_FETCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/getApprovedProperties'
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

export const getVerifiedProperty = () => {
  return (dispatch) => {
    dispatch({ type: GET_VERIFIED_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const url = 'https://oap-mystay.herokuapp.com/api/getVerifiedProperties'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_VERIFIED_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_VERIFIED_FAIL,
          payload: error,
        })
      })
  }
}

export const searchProperties = (city) => {
  console.log('CITY:- ', city)

  return (dispatch) => {
    dispatch({ type: PROP_SEARCH_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      city,
    }
    console.log('BODY:- ', body)

    const url = 'https://oap-mystay.herokuapp.com/api/findPropertiesByCity'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PROP_SEARCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROP_SEARCH_FAIL,
          payload: error,
        })
      })
  }
}

export const deleteProperties = (_id) => {
  return (dispatch) => {
    dispatch({ type: PROP_DELETE_REQUEST })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage['token']}`,
      },
    }

    const body = {
      _id,
    }

    const url = 'https://oap-mystay.herokuapp.com/api/deleteproperty'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PROP_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROP_DELETE_FAIL,
          payload: error,
        })
      })
  }
}
