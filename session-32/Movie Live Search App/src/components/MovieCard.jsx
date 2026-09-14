import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({poster,name,genre,year,rating}) {
  return (
    <Card className="bg-dark text-white h-100" style={{ width: '18rem' }}>
      <Card.Img src={poster} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Genre: {genre}</Card.Text>
        <Card.Text>Year: {year}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;