import { useState,useReducer, useRef, useEffect } from "react";
import reducer,{initState} from "./reducer";
import {setJobFunction,addJobFunction,deleteJobFunction} from './actions'

function App() {


//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     // lấy dữ liệu trên local storage
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     return storageJobs ?? []
//   })

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }

  // useReducer
  const [state, dispatch] = useReducer(reducer, initState)
  const {jobR,jobRs} = state

  const inputRef = useRef()

  const handleAddJob = ()=>{
    if (jobR !== ''){
      dispatch(addJobFunction(jobR))
      dispatch(setJobFunction(''))
    }
    inputRef.current.focus()
  }

  useEffect(() => {
    function handleAddBtn(e) {
      e.code === "Enter" && document.querySelector(".btnAdd").click();
    }
    window.addEventListener("keydown", handleAddBtn);
    return () => {
      window.removeEventListener("keydown", handleAddBtn);
    };
  }, []);

  return (
    <div style={{ padding: 32, display: 'flex' }}>
      {/* <div>
        <p>Todolist use useState</p>
        <input
          value={job}
          onChange={e => setJob(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}

      {/* Dùng useReducer Hook   */}

      <div >
        <p>Todolist use useReducer</p>
        <input
          ref={inputRef}
          value={jobR}
          onChange={e => {
            dispatch(setJobFunction(e.target.value))
          }}
        />
        <button className="btnAdd" onClick={handleAddJob}>Add</button>

        <ul>
          {jobRs.map((item, index) => (
            <li key={index}>
              {item}
              <span onClick={()=>dispatch(deleteJobFunction(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}

export default App;
