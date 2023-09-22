import { useEffect, useState } from "react";
import Job from "../Job/Job";


const JobFeature = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('../jobs.json').then(res=>res.json()).then(data=>setJobs(data))
    },[])
    const [showJob, setShowJob] = useState([4])
    return (
        <div className="my-36 mx-auto max-w-[1200px]">
            <h3 className="text-center text-3xl font-bold">Featured Jobs</h3>
            <p className="text-center text-lg ">Explore thousands of job opportunities with all  <br /> the information you need. Its your future</p>
           <div className="grid grid-cols-2 gap-7">
            {
                jobs.slice(0, showJob).map( job => <Job key={job.id} job={job}></Job>)
            }
           </div>
          <div className={showJob === jobs.length ? `hidden`: ''}>
          <div  className="text-center">
            <button onClick={()=>setShowJob(jobs.length)} className="btn">Show All</button>
           </div>
          </div>
        </div>
    );
};

export default JobFeature;