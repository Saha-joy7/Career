import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto max-w-[1200px]">
            <figure className="px-10 pt-10">
                <img src={logo} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-7">
                <button className="border-blue-400 py-2 text-blue-300 border p-2  bg-white">{remote_or_onsite}</button>
                <button className="border-blue-400 py-2 text-blue-300 border p-2 bg-white">Full time</button>
                </div>
                <div className="flex gap-4">
                    <h2 className="font-medium">{location}</h2>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                <Link to={`/details/${id}`}>
                    <button className="btn bg-blue-300">View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};
export default Job;