/*
 * @Author: your name
 * @Date: 2021-07-26 20:27:55
 * @LastEditTime: 2021-07-26 22:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/reducers/userReducer.js
 */


export const registerNewUserReducer = ( state ={} , action) => {
    switch(action.type){
        case 'USER_REGISTER_REQUEST' : return {
            ...state,
            loading: true
        }
        case 'USER_REGISTER_SUCCESS' : return {
            ...state,
            loading: false,
            success:true
        }
        case 'USER_REGISTER_FAILED' : return {
            ...state,
            loading: false,
            error: 'User ALready Registered!'
        }
        default : return state

    }
}

export const loginReducer = (state={} , action)=>{
    switch(action.type){
      case 'USER_LOGIN_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'USER_LOGIN_SUCCESS' : return {
          ...state ,
          loading : false , 
          success : true,
          user : action.payload
      }
      case 'USER_LOGIN_FAILED' : return {
          ...state ,
          loading : false,
          error : 'Invalid Credentials'
      }
  
      case 'USER_LOGOUT' : return {
        ...state 
      }
  
      default : return state
    }
  
  }
  
  export const updateReducer = (state={} , action)=>{  
    switch(action.type){
      case 'USER_UPDATE_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'USER_UPDATE_SUCCESS' : return {
          ...state ,
          loading : false , 
          success : true
      }
      case 'USER_UPDATE_FAILED' : return {
          ...state ,
          loading : false,
          error : 'User Already Registred'
      }  
      default : return state
    }
  
  }
  
  export const getAllUsersReducer = (state={users : []} , action)=>{  
    switch(action.type)
    {
      case 'GET_ALLUSERS_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'GET_ALLUSERS_SUCCESS' : return {
          ...state ,
          loading : false , 
          users : action.payload
      }
      case 'GET_ALLUSERS_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }  
      default : return state
    }
  
  }
  
  export const deleteUserReducer = (state={} , action)=>{
  
    switch(action.type)
    {
      case 'DELETE_USERS_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'DELETE_USERS_SUCCESS' : return {
          ...state ,
          loading : false , 
          success : true
      }
      case 'DELETE_USERS_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }  
      default : return state
    }
  }