import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";


const News = () => {
   const news = useLoaderData();
   const { title, author, image_url, details, category_id, rating } = news;
   return (
      <Card>
         <Card.Img variant="top" src={image_url} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="d-flex justify-content-around">
               <p className="fw-bold text-transform-capitalize">Author: <span className="ms-1"> {author.name ? author.name : "N/A"}</span> </p>
               <p className="fw-bold text-transform-capitalize">publish Date: <span className="ms-1">{author.published_date ? author.published_date : "N/A"} </span> </p>
               <p className="fw-bold text-transform-capitalize">Rating: <span className="ms-1">{rating.number} </span> </p>
            </div>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`} >
               <Button variant="primary" className='mx-auto d-block'>Show this category all posts</Button>
            </Link>
         </Card.Body>
      </Card>
   );
};

export default News;
