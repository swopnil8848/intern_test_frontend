import { CLEAR_ERRORS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      case LOAD_USER_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case LOGOUT_REQUEST:
        return{
          ...state,
          loading:true
        }
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case LOGOUT_SUCCESS:
        return {
          loading: false,
          user: null,
          isAuthenticated: false,
        };
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
      case LOAD_USER_FAIL:
        return {
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
      case LOGOUT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

      default:
        return state;
    }
  };

  export const updateUser = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
      case UPDATE_PASSWORD_REQUEST:
      case DELETE_USER_REQUEST:
        return {
          loading : true
        }
      case UPDATE_PROFILE_SUCCESS:
      case UPDATE_PASSWORD_SUCCESS:
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading:false,
          message:action.payload
        }
      case UPDATE_PROFILE_FAIL:
      case UPDATE_PASSWORD_FAIL:
      case DELETE_USER_FAIL:
        return{
          ...state,
          loading:false,
          error:action.payload
        }
      default:
        return state;
    }
  }

//   export const userProfileReducer = (state = {}, action) => {
//     switch (action.type){
  
//       case USER_PROFILE_REQUEST:
//         return{
//           loading: true
//         }
  
//       case USER_PROFILE_SUCCESS:
//         return{
//           ...state,
//           loading: false,
//           user: action.payload
//         }
        
//         case USER_PROFILE_FAIL:
//           return{
//             loading: false,
//             error:action.payload
//           }
  
//         case CLEAR_ERRORS:
//           return {
//             ...state,
//             error: null,
//           };
  
//       default:
//         return state;
//       }
//   }