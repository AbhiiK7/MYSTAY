import { PROP_APPROVE_REQUEST, PROP_APPROVE_SUCCESS, PROP_APPROVE_FAIL } from "../constants/propertyConstants"
import axios from "axios"

export const approveProperty = (_id) => {
    return (dispatch) => {
      dispatch({ type: PROP_APPROVE_REQUEST })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage['token']}`,
        },
      }
  
      const body = {
        _id,
      }
      console.log(body)
      const url = 'http://localhost:3000/api/admin/authenticate'
      axios
        .put(url, body, header)
        .then((response) => {
          dispatch({
            type: PROP_APPROVE_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PROP_APPROVE_FAIL,
            payload: error,
          })
        })
    }
  }