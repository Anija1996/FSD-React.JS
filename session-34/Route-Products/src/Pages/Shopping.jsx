import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Shopping(){
    const image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOXlxLjPAx81eXrEwwt9peAqdVNKuptQ4zhoWdikUSg&s=10";
    const image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9z6lDmSejMZV_pRGJnfUByLil9GIyFYEx8L5uMTeog&s=10";
    const image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1diV1HsB52qSfB7Ho-AiRsSqLsDyecPaTKoW1vv4IJQ&s=10";


    return(
        <>
            <h2>Jewelry</h2>
            <div className='d-flex justify-content-evenly'>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Bridal Set</Card.Title>
                    <Card.Text>
                    Exciting Collections
                    </Card.Text>
                    <Link to="/products/1">
                        <Button variant="primary">Buy Now</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>Bridal Set</Card.Title>
                    <Card.Text>
                    Exciting Collections
                    </Card.Text>
                    <Link to="/products/2"> 
                        <Button variant="primary">Buy Now</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>Bridal Set</Card.Title>
                    <Card.Text>
                    Exciting Collections
                    </Card.Text>
                    <Link to="/products/3"> 
                        <Button variant="primary">Buy Now</Button>
                    </Link>                </Card.Body>
            </Card>
            </div>
        </>
    )
}