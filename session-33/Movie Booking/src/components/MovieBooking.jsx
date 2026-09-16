import { Modal,Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function MovieBooking({name,showBooking,setShowBooking}){
    return (
        <Modal contentClassName="bg-light" show={showBooking} onHide={()=>setShowBooking(false)}>
            <Modal.Header closeButton>
            🎬Movie Booking
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                       Movie
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control className="fw-semibold" plaintext readOnly defaultValue={name} />
                        </Col>
                    </Form.Group>

                    {/* Theater */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Theatre
                        </Form.Label>

                        <Col sm="10">
                            <Form.Select>
                                <option>Select Theatre</option>
                                <option>PVR Cinemas</option>
                                <option>INOX</option>
                                <option>Cinepolis</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>


                    {/* Date */}
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Date
                    </Form.Label>

                     <Col sm="10">
                        <input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                        />                    
                    </Col>
                    </Form.Group>
                    
                    {/* Time */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Time
                        </Form.Label>

                        <Col sm="10">
                            <Form.Select>
                                <option>Select Time</option>
                                <option>9:00 a.m.</option>
                                <option>12:00 Noon</option>
                                <option>3:00 p.m.</option>
                                <option>6:00 p.m.</option>
                                <option>9:00 p.m.</option>
                                <option>12 Midnight</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Tickets */}
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Number of tickets
                    </Form.Label>

                     <Col sm="10">
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                        />                  
                    </Col>
                    </Form.Group>
                </Form>


                {/* Seat Type                 */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Seat Type
                    </Form.Label>

                    <Col sm="10">
                        <Form.Check
                            type="radio"
                            label="Standard"
                            name="seatType"
                            value="Standard"
                        />

                        <Form.Check
                            type="radio"
                            label="Premium"
                            name="seatType"
                            value="Premium"
                        />

                        <Form.Check
                            type="radio"
                            label="Recliner"
                            name="seatType"
                            value="Recliner"
                        />
                    </Col>
                </Form.Group>

                {/* Snacks */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label>
                        Snacks / AddOns
                    </Form.Label>
                    <Col sm="10">
                        <Form.Check
                            type="checkbox"
                            label="Popcorn"
                            value="Popcorn"
                        />

                        <Form.Check
                            type="checkbox"
                            label="Nachos"
                            value="Nachos"
                        />

                        <Form.Check
                            type="checkbox"
                            label="Soft Drink"
                            value="Soft Drink"
                        />

                        <Form.Check
                            type="checkbox"
                            label="Combo Meal"
                            value="Combo Meal"
                        />
                    </Col>
                </Form.Group>

                {/* Customer name */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>

                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Col>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>

                    <Col sm="10">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                        />
                    </Col>
                </Form.Group>

                {/* Phone */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>

                    <Col sm="10">
                        <Form.Control
                            type="tel"
                            placeholder="Enter your phone number"
                        />
                    </Col>
                </Form.Group>

                {/* Special request */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Special Requests
                    </Form.Label>

                    <Col sm="10">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter any special requests"
                        />
                    </Col>
                </Form.Group>

                {/* Terms */}
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                    />
                </Form.Group>

                {/* Buttons */}
                <div className="d-flex gap-2">
                    <Button type="submit">Book Movie</Button>

                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>

                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => setShowBooking(false)}
                    >
                        Cancel
                    </Button>
                </div>
                            </Modal.Body>

            <Modal.Footer>
                <Button className="btn btn-warning">Book now</Button>
                <Button className="btn btn-danger" onClick={()=>setShowBooking(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}