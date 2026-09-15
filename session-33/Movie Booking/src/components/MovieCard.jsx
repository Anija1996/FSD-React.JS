import { Card,Button } from "react-bootstrap";

export default function MovieCard({image,name,genre,year,rating,summary}){

    return(<>
        <Card className="bg-light" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{genre}</Card.Text>
            <Card.Text>{year}</Card.Text>
            <Card.Text>Rating :{rating}</Card.Text>
            <div className="d-flex justify-content-evenly">
                <Button variant="primary" className="btn btn-success">Movie Details</Button>
                <Button className="btn btn-danger">Book Now</Button>
            </div>
        </Card.Body>
        </Card>
    </>)
}