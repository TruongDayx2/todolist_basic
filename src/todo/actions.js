import {SET_JOB,ADD_JOB,DELETE_JOB} from './constants'

export const setJobFunction = payload=>{
    return{
      type: SET_JOB,
      payload
    }
  }
  
export const addJobFunction = payload =>{
    return{
      type:ADD_JOB,
      payload
    
    }
  }
export const deleteJobFunction = payload =>{
    return{
      type:DELETE_JOB,
      payload
    
    }
  }