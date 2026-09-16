import { useState } from "react";
import { Card,Button } from "react-bootstrap";
import MovieDetails from "./MovieDetails";
import MovieBooking from "./MovieBooking";

export default function MovieCard({image,name,genre,year,rating,summary}){

    const [showDetails,setShowDetails] = useState(false);
    const [showBooking,setShowBooking] = useState(false);

    function handleDetails(){
        setShowDetails(true);
    }

    function handleBooking(){
        setShowBooking(true);
    }

    return(<>
        <Card className="bg-light" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{genre}</Card.Text>
            <Card.Text>{year}</Card.Text>
            <Card.Text>Rating :{rating}</Card.Text>
            <div className="d-flex justify-content-evenly">
                <Button variant="primary" className="btn btn-success" onClick={handleDetails}>Movie Details</Button>
                <Button className="btn btn-danger" onClick={handleBooking}>Book Now</Button>
            </div>
        </Card.Body>
        </Card>
        {showDetails && 
            <MovieDetails name={name} year={year} genre={genre} rating={rating} summary={summary} showDetails={showDetails} setShowDetails={setShowDetails} />
        }
        {showBooking &&
            <MovieBooking name={name} showBooking={showBooking} setShowBooking={setShowBooking}/>
        }
    </>)
}