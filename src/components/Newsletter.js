import React from 'react';
import { FloatingLabel, Form, Button, Container, Row, Col } from 'react-bootstrap';
import'./Newsletter.css'

const Newsletter = () => {
    return (
        <div>
            <Container fluid className='newsletter'>
                <Row className='justify-content-md-center align-items-center'>
                    <Col lg={6} md={12}   className='text-center'><h3>Bleiben sie am Puls mit unserem Newsletter.</h3></Col>
                    <Col lg={3} md={12} >
                        <FloatingLabel
                            controlId='floatingInput'
                            label='Ihre E-Mail-Adresse'
                            >
                            <Form.Control type='email' placeholder='max.mustermann@muster.ch' />
                        </FloatingLabel>
                    </Col>
                    <Col lg={3} md={12}  className='text-center'>
                        <Button type='submit' className='abonnieren-btn'>Abonnieren</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;