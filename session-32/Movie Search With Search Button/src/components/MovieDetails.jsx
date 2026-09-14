import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function MovieDetails({name,summary,setShowDetails,showDetails}){
  function handleClose(){
    setShowDetails(false);
  }
  return(

      <Modal show={showDetails}>
        <Modal.Header>
          <Modal.Title>{name}         
        </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{summary}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>          
        </Modal.Footer>
      </Modal>

  )
}