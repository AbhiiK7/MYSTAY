import {
  NEW_PROP_COUNT_REQUEST,
  NEW_PROP_COUNT_SUCCESS,
  NEW_PROP_COUNT_FAIL,
  NEW_PROP_COUNT_RESET,
  GET_APP_COUNT_REQUEST,
  GET_APP_COUNT_SUCCESS,
  GET_APP_COUNT_FAIL,
  GET_APP_COUNT_RESET,
  GET_PROP_COUNT_REQUEST,
  GET_PROP_COUNT_SUCCESS,
  GET_PROP_COUNT_FAIL,
  GET_PROP_COUNT_RESET,
  GET_APP_PROP_COUNT_REQUEST,
  GET_APP_PROP_COUNT_SUCCESS,
  GET_APP_PROP_COUNT_FAIL,
  GET_APP_PROP_COUNT_RESET,
  GET_RENTED_PROP_COUNT_REQUEST,
  GET_RENTED_PROP_COUNT_SUCCESS,
  GET_RENTED_PROP_COUNT_FAIL,
  GET_RENTED_PROP_COUNT_RESET,
  GET_BOOK_COUNT_REQUEST,
  GET_BOOK_COUNT_SUCCESS,
  GET_BOOK_COUNT_FAIL,
  GET_BOOK_COUNT_RESET,
  GET_OWNER_COUNT_REQUEST,
  GET_OWNER_COUNT_SUCCESS,
  GET_OWNER_COUNT_FAIL,
  GET_OWNER_COUNT_RESET,
  GET_VERIFIER_COUNT_REQUEST,
  GET_VERIFIER_COUNT_SUCCESS,
  GET_VERIFIER_COUNT_FAIL,
  GET_VERIFIER_COUNT_RESET,
  GET_CUSTOMER_COUNT_REQUEST,
  GET_CUSTOMER_COUNT_SUCCESS,
  GET_CUSTOMER_COUNT_FAIL,
  GET_CUSTOMER_COUNT_RESET,
  GET_UNVERIFIED_PROP_COUNT_REQUEST,
  GET_UNVERIFIED_PROP_COUNT_SUCCESS,
  GET_UNVERIFIED_PROP_COUNT_FAIL,
  GET_UNVERIFIED_PROP_COUNT_RESET,
  GET_VERIFIED_PROP_COUNT_REQUEST,
  GET_VERIFIED_PROP_COUNT_SUCCESS,
  GET_VERIFIED_PROP_COUNT_FAIL,
  GET_VERIFIED_PROP_COUNT_RESET,
  GET_APPROVED_PROP_COUNT_RESET,
  GET_APPROVED_PROP_COUNT_REQUEST,
  GET_APPROVED_PROP_COUNT_SUCCESS,
  GET_APPROVED_PROP_COUNT_FAIL,
} from "../constants/countConstants";

// VERIFIER
export const countNewPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_PROP_COUNT_REQUEST:
      return { loading: true };
    case NEW_PROP_COUNT_SUCCESS:
      return { loading: false, response: action.payload };
    case NEW_PROP_COUNT_FAIL:
      return { loading: false, error: action.payload };
    case NEW_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const countNewAppReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APP_COUNT_REQUEST:
      return { loading1: true };
    case GET_APP_COUNT_SUCCESS:
      return { loading1: false, response1: action.payload };
    case GET_APP_COUNT_FAIL:
      return { loading1: false, error1: action.payload };
    case GET_APP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};
// VERIFIER

// OWNER
export const countPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROP_COUNT_REQUEST:
      return { loading: true };
    case GET_PROP_COUNT_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_PROP_COUNT_FAIL:
      return { loading: false, error: action.payload };
    case GET_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const countAppPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APP_PROP_COUNT_REQUEST:
      return { loading1: true };
    case GET_APP_PROP_COUNT_SUCCESS:
      return { loading1: false, response1: action.payload };
    case GET_APP_PROP_COUNT_FAIL:
      return { loading1: false, error1: action.payload };
    case GET_APP_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const countRentedPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RENTED_PROP_COUNT_REQUEST:
      return { loading2: true };
    case GET_RENTED_PROP_COUNT_SUCCESS:
      return { loading2: false, response2: action.payload };
    case GET_RENTED_PROP_COUNT_FAIL:
      return { loading2: false, error2: action.payload };
    case GET_RENTED_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const countOwnAppReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APP_COUNT_REQUEST:
      return { loading3: true };
    case GET_APP_COUNT_SUCCESS:
      return { loading3: false, response3: action.payload };
    case GET_APP_COUNT_FAIL:
      return { loading3: false, error3: action.payload };
    case GET_APP_COUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const countBookPropsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOK_COUNT_REQUEST:
      return { loading4: true };
    case GET_BOOK_COUNT_SUCCESS:
      return { loading4: false, response4: action.payload };
    case GET_BOOK_COUNT_FAIL:
      return { loading4: false, error4: action.payload };
    case GET_BOOK_COUNT_RESET:
      return {};
    default:
      return state;
  }
};
// OWNER

export const countOwners = (state = {}, action) => {
  switch (action.type) {
    case GET_OWNER_COUNT_REQUEST:
      return { loading3: true };
    case GET_OWNER_COUNT_SUCCESS:
      return { loading3: false, response3: action.payload };
    case GET_OWNER_COUNT_FAIL:
      return { loading3: false, error3: action.payload };
    case GET_OWNER_COUNT_RESET:
      return {};
    default:
      return state;
  }
}

export const countVerifier = (state = {}, action) => {
  switch (action.type) {
    case GET_VERIFIER_COUNT_REQUEST:
      return { loading1: true };
    case GET_VERIFIER_COUNT_SUCCESS:
      return { loading1: false, response1: action.payload };
    case GET_VERIFIER_COUNT_FAIL:
      return { loading1: false, error1: action.payload };
    case GET_VERIFIER_COUNT_RESET:
      return {};
    default:
      return state;
  }
}


export const countcUSTOMER = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER_COUNT_REQUEST:
      return { loading2: true };
    case GET_CUSTOMER_COUNT_SUCCESS:
      return { loading2: false, response2: action.payload };
    case GET_CUSTOMER_COUNT_FAIL:
      return { loading2: false, error2: action.payload };
    case GET_CUSTOMER_COUNT_RESET:
      return {};
    default:
      return state;
  }
}


export const countUnverifiedProp = (state = {}, action) => {
  switch (action.type) {
    case GET_UNVERIFIED_PROP_COUNT_REQUEST:
      return { loading4: true };
    case GET_UNVERIFIED_PROP_COUNT_SUCCESS:
      return { loading4: false, response4: action.payload };
    case GET_UNVERIFIED_PROP_COUNT_FAIL:
      return { loading4: false, error4: action.payload };
    case GET_UNVERIFIED_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
}


export const countVerifiedProp = (state = {}, action) => {
  switch (action.type) {
    case GET_VERIFIED_PROP_COUNT_REQUEST:
      return { loading5: true };
    case GET_VERIFIED_PROP_COUNT_SUCCESS:
      return { loading5: false, response5: action.payload };
    case GET_VERIFIED_PROP_COUNT_FAIL:
      return { loading5: false, error5: action.payload };
    case GET_VERIFIED_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
}

export const countApprovedProp = (state = {}, action) => {
  switch (action.type) {
    case GET_APPROVED_PROP_COUNT_REQUEST:
      return { loading6: true };
    case GET_APPROVED_PROP_COUNT_SUCCESS:
      return { loading6: false, response6: action.payload };
    case GET_APPROVED_PROP_COUNT_FAIL:
      return { loading6: false, error6: action.payload };
    case GET_APPROVED_PROP_COUNT_RESET:
      return {};
    default:
      return state;
  }
}