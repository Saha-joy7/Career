import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobList = () => {
    const [categories, setCategory] = useState([]);
    useEffect(()=>{
        fetch('../categories.json').then(res=>res.json()).then(data=>setCategory(data))
    },[])
    console.log(categories);
    return (
        <div>
            <h3 className="text-center text-3xl font-bold">Job Category List</h3>
            <p className="text-center text-lg ">Explore thousands of job opportunities with all the information you need. <br /> Its your future</p>
            <div className="grid grid-cols-4 gap-5 my-7">
               {
                categories.map(category => <Category key={category.id} category={category}></Category>)
               }
            </div>
        </div>
    );
};

export default JobList;