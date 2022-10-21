import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TfiSharethis, TfiBookmark } from "react-icons/tfi";
import { FaEye, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
   const { _id, details, image_url, author, title , rating, total_view} = news;
   return (
      <Card className="my-3">
         <Card.Header className="d-flex align-items-center justify-content-between py-4">
            <div className="d-flex">
               <img
                  src={author.img}
                  alt=""
                  style={{ width: "50px", height: "50px"}}
                  className="rounded-circle"
               />
               <div className="text-start  ms-2">
                  <h6 className="mb-0 fw-bold text-uppercase text-primary">
                     {author.name ? author.name : "N/A"}
                  </h6>
                  <p className="mb-0">{author.published_date}</p>
               </div>
            </div>
            <div className='d-flex gap-2 fs-5 text-primary'>
               <TfiBookmark></TfiBookmark>
               <TfiSharethis></TfiSharethis>
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title className='mb-3'>{title}</Card.Title>
            <img src={image_url} alt="" className="img-fluid w-100 h-auto" />
            <Card.Text className="mt-3">
               {details.length > 100 ? (
                  <p>
                     {" "}
                     {details.slice(0, 100) + "..."}{" "}
                     <Link to={`/news/${_id}`}>Read more</Link>
                  </p>
               ) : (
                  <p>{details}</p>
               )}
            </Card.Text>
         </Card.Body>
         <Card.Footer className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
               <FaStar className="text-warning"></FaStar>
               <p className='fw-bold mb-0 '>{rating.number}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
               <FaEye></FaEye>   
               <p className="fw-bold mb-0">{total_view}</p>            
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsSummeryCard;
