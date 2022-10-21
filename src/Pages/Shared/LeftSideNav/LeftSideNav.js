import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch(" https://dragron-news-severside.vercel.app/news-categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   return (
      <div className=" border-end  border-dark">
         <h5>All Categories: {categories.length}</h5>
         {categories.map((category) => (
            <p key={category.id}>
               <Link to={`category/${category.id}`}>{category.name}</Link>
            </p>
         ))}
      </div>
   );
};

export default LeftSideNav;
