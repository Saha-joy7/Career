
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
   
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id)
    const {job_description, job_responsibility,educational_requirements,experiences,contact_information } = job;
    console.log(job) 
    return (
        <div>
           
        </div>
    );
};

export default JobDetails;