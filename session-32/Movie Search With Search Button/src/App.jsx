import { useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MovieCard from './components/MovieCard';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


export default function App() {

  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [movies,setMovies] = useState([]);
  const [filteredMovies,setFilteredMovies] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    async function getMovies() {
      try {
        const resp = await axios("https://api.tvmaze.com/shows");
        setMovies(resp.data);
        setFilteredMovies(resp.data);
      } catch (error) {
          setError(error.message);
      } finally{
        setLoading(false);
      }
    }
    getMovies();
  },[])

  function handleSearch()
  {
    const result = movies.filter((movie)=>movie.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredMovies(result);
  }

  function handleClear(){
    setSearch("");
    setFilteredMovies(movies);
  }

  if(loading){
    return(<p>Loading...</p>)
  }

  if(error){
    return(<p>{error}</p>)
  }
  return (
    <>
      <h2 className='fw-bold'>Movie Search</h2>

      <div className='mx-auto my-2'>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter the movie name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e => {
            if(e.key==="Enter"){
              handleSearch();
            }
          })}
        />
        <Button 
          className='btn btn-warning'
          onClick={handleSearch}
          disabled={search.trim().length===0}
          >
          Search
        </Button>
        <Button className='btn btn-danger' 
        onClick={handleClear}>Clear</Button>

      </InputGroup>
      </div>

    {filteredMovies.length===0 ?
      <p>No Movies Found</p> 
      :
      <Row className="mx-5">
        {filteredMovies.map((movie)=>{
          return(
            <Col sm={12} md={6} lg={4} className='mb-5' key={movie.id}>
              <MovieCard 
              poster={movie.image?.medium}
              name={movie.name}
              genre={movie.genres}
              year={movie.premiered}
              rating={movie.rating?.average}
              />
            </Col>
          )
        })}
      </Row>
    }
    </>
  )
}

