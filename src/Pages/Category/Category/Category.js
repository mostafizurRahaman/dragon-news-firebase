import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
   const allNews = useLoaderData();
 

   return (
      <div >
         <h3 className="bg-primary p-2 text-center d-block">{allNews.length} Available</h3>
         {
            allNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
         }
      </div>
   );
};

export default Category;
