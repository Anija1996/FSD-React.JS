import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function MovieDetails({name,year,genre,rating,summary,showDetails,setShowDetails}){
    return(
        <Modal
            show={showDetails}
            size="lg"
            centered
            contentClassName='bg-dark text-white'
            onHide={()=>setShowDetails(false)}
        >
        <Modal.Header closeButton >
            <Modal.Title>{name} <br /></Modal.Title>
            <br /><br />{year} | {genre} | {rating}
        </Modal.Header>
        <Modal.Body>
            <h4>Summary</h4>
            <p>
            {summary}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>setShowDetails(false)}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}