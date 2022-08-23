import { useState } from "react";


function App() {


  const [job,setJob] = useState('')
  const [jobs,setJobs] = useState(() =>{
  // lấy dữ liệu trên local storage
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })

  const handleSubmit = () =>{
    setJobs(prev => {
      const newJobs = [...prev,job]
      
      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }


  return (
    <div style={{textAlign:"center" , padding:32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      
      <ul>
        {jobs.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
