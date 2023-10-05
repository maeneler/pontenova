import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container fluid className='footer'>
                <Row className='test'>
                    <Col>
                        <h2>Logo</h2>
                    </Col>
                    <Col>
                        <h6>PonteNova AG</h6>
                        <p>Mustergasse 11 <br/>
                        Postfach xy<br/>
                        3000 Bern</p>
                    </Col>
                    <Col>
                        <h6>Kontakt</h6>
                        <p>Tel. 031 111 11 11 <br/>
                        Fax 031 111 11 11<br/>
                        <a href= "mailto:abc@example.com">pontenova@hin.ch</a></p>
                    </Col>
                    <Col>
                        <h6>Datenschutz</h6>
                        <p><a href='https://en.wikipedia.org/wiki/Privacy_policy'>Privacy Policy</a><br/>
                        <a href='https://en.wikipedia.org/wiki/Impressum'>Impressum</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;