import React from 'react';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import './Kontakt.css'

const Kontakt = () => {
    return (
        <>
            <Container fluid className='kontakt'>
                <Row className='kontaktinfos'>
                    <Col>
                        <h3>Wir sind gerne für Sie da!</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
                    </Col>
                </Row>
                <Row className='kontaktinfos'>
                    <Col>
                        <h6>PonteNova AG</h6>
                        <p>Zentrum 32 <br/>
                        Postfach 319<br/>
                        3322 Urtenen-Schönbühl</p>
                    </Col>
                </Row>
                <Row className='kontaktinfos'>
                    <Col>
                        <h6>Kontakt</h6>
                        <p>Tel. 031 951 88 60 <br/>
                        Fax 031 951 88 61<br/>
                        <a href= "mailto:abc@example.com">pontenova@hin.ch</a></p>
                    </Col>
                </Row>
            </Container>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Kontakt;