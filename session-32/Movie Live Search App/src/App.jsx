import { useState,useEffect } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from "./components/MovieCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function App(){
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [search,setSearch] = useState("");
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    async function getMovies() {
      try{
        const resp = await axios("https://api.tvmaze.com/shows");
        setMovies(resp.data);

      } catch(error){
        setError(error.message);
      } finally{
        setLoading(false);
      }

    }
    getMovies();
  },[])

  //Search Movie

  const filteredMovies = movies.filter((movie)=>movie.name.toLowerCase().includes(search.toLowerCase()))

  if(loading){
    return(<p>Loading...</p>)
  }

  if(error){
    return(<p>{error}</p>)
  }

  return(
    <>
      <h2 className="fw-bold">Movie Search</h2>

      <div className="mx-auto my-3">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter the movie name"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </InputGroup>
      </div>
      <Row className="mx-5">
        {filteredMovies.map((movie)=>{
           return(
            <Col className="mb-5" sm={12} md={6} lg={4} key={movie.id}>
              <MovieCard 
                poster={movie.image?.medium}                
                name={movie.name}
                genre={movie.genres}
                year={movie.premiered}
                rating={movie.rating?.average}
              />
            </Col>
        )})}
      </Row>
    </>
  )
}