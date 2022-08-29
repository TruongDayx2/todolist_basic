import {SET_JOB,ADD_JOB,DELETE_JOB} from './constants'


export const initState = {
    jobR: '',
    jobRs: JSON.parse(localStorage.getItem("jobRs")) ?? []
}
const reducer = (state, action) => {
    console.log('action', action)
    console.log('prev State', state)
    let id
    switch (action.type) {
        case SET_JOB:
            id = {
                ...state,
                jobR: action.payload
            }
            break
        case ADD_JOB:
            id = {
                ...state,
                jobRs: [...state.jobRs, action.payload]
            }
            localStorage.setItem("jobRs", JSON.stringify(id.jobRs));
            break
        case DELETE_JOB:
            const newJobsR = [...state.jobRs]
            newJobsR.splice(action.payload, 1)
            id = {
                ...state,
                jobRs: newJobsR
            }
            localStorage.setItem("jobRs", JSON.stringify(id.jobRs));

            break
        default:
            throw new Error('Invalid action')
    }
    console.log('new State', id)
    return id
}

export default reducer