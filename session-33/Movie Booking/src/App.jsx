import React, { useState,useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import MovieCard from "./components/MovieCard";


export default function App(){
  const [initLoading,setInitLoading] = useState(true);
  const [error,setError] = useState(null);
  const [movies,setMovies] = useState([]);
  const [filteredMovies,setFiltererdMovies] = useState([]);
  const [search,setSearch] = useState("");
  const [hasSearched,setHasSearched] = useState("");
  const [count,setCount] = useState(0);

  useEffect(()=>{
    async function getMovies() {
      try {

        const resp = await axios.get("https://api.tvmaze.com/shows");
        setMovies(resp.data);
        setFiltererdMovies(resp.data);

      } catch (error) {
        setError(error.message);
      } finally{
        setInitLoading(false);
      }
    }
    getMovies();
  },[])

  // Search Movies
  function handleSearch(){
    setHasSearched(search); 
    const result = movies.filter((movie)=>movie.name.toLowerCase().includes(search.toLowerCase()));
    setCount(result.length);
    setFiltererdMovies(result);
  }

  function handleClear(){
    setSearch("");
    setFiltererdMovies(movies);
    setHasSearched("");
    setCount(0);
  }

  if(initLoading){
    return(<p>Loading...</p>)
  }

  if(error){
    return(<p>{error}</p>)
  }

  return(
    <>

      <h2 className="fw-bold">Movie Booking</h2>
      <small className="text-secondary">Book Now!!!</small>

    {/* Search group */}
    <div className="mx-auto m-3">
      <InputGroup>
          <Form.Control
            placeholder="Enter the movie name"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <Button 
            variant="outline-secondary" 
            className="btn btn-warning text-dark" 
            onClick={handleSearch} >Search</Button>
          <Button 
            variant="outline-secondary"   
            className="btn btn-danger text-dark"
            onClick={handleClear}>Clear</Button>
        </InputGroup>
    </div>

    {/* Movie Cards */}

    {hasSearched && (count>1 ? <p><b>{count} results found <br/>Search results for {hasSearched} </b> </p> 
                      :
                      <p><b>{count} result found <br/>Search result for {hasSearched} </b> </p>)}

    
  {filteredMovies.length===0 ? <h4>No movies found</h4> :
    <Row className="mx-5">
      {/* {<p>{count} movies found</p>} */}
      {filteredMovies.map((movie)=>{
         return(<>
       

          <Col sm={12} md={6} lg={4} className="mb-5" key={movie.id}>
          <MovieCard 
            image={movie.image?.medium}
            name={movie.name} 
            genre={movie.genres}
            year={movie.premiered}
            rating={movie.rating?.average}
            summary={movie.summary}
          />
        </Col>
        </>
        )
      })}
    </Row>
}

  </> 
  )
}
