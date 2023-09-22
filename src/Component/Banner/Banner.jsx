import { Link } from "react-router-dom";
import image from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen p-4 bg-stone-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg" />
                <div>
                <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className="text-blue-500"> Dream Job</span></h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need.  <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link><button className="btn-primary p-2 rounded-lg"> Star Applying</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;