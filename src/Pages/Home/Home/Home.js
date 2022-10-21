import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
   const newses = useLoaderData(); 
   console.log(newses); 
   return (
      <div>
         <h4 className='bg-primary p-2 text-center d-block'>{newses.length} News Available</h4>
         {
            newses.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
         }
      </div>
   );
};

export default Home;