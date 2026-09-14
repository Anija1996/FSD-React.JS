import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './MovieDetails';
import { useState } from 'react';

function MovieCard({poster,name,genre,year,rating,summary}) {
  const [showDetails,setShowDetails] = useState(false);
  function handleClick(){
    setShowDetails(true);
  }
  return (<>
    <Card className="bg-dark text-white h-100" style={{ width: '18rem' }}>
      <Card.Img src={poster} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Genre: {genre}</Card.Text>
        <Card.Text>Year: {year}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Button className='mt-auto'onClick={handleClick}>Show Details</Button>
      </Card.Body>
    </Card>

    {showDetails &&
      <MovieDetails name={name} summary={summary} setShowDetails={setShowDetails} showDetails={showDetails}/>
    }
  </>)
}

export default MovieCard;