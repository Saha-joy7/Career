/* eslint-disable react/prop-types */

const Category = ({category}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, logo, category_name, availability} = category;
    return (
        <div className="shadow-orange-50 mx-auto  bg-slate-100 p-8">
            <img className="mx-auto" src={logo} alt="" />
            <h3 className="font-bold text-xl">{category_name}</h3>
            <p className="text-lg">{availability}</p>
        </div>
    );
};

export default Category;