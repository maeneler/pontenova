import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './FragenCard.css'

const FragenCard = ({currentPage}) => {

    const imgSrc = {
        Trustcenter: 'https://www.pontenova.ch/1/Team/--Frutig.jpg',
        Treuhand: 'https://www.pontenova.ch/1/Team/Grubwinkler.jpg',
        Consulting: 'https://img2.storyblok.com/180x180/filters:format(webp):quality(100)/f/105576/1080x1080/a17b80f9d7/florin-rudisuhli.jpg'
    }

    const picture = imgSrc[currentPage]

    const textSrc = {
        Trustcenter: {
            name: 'Vorname Nachname',
            jobtitle: 'CEO Ponte Nova',
            mail: 'Vorname.Nachname@hin.ch'
        },
        Treuhand: {
            name: 'Vorname Nachname',
            jobtitle: 'Mandatsleiter Treuhand / Experte Tarifanwendung',
            mail: 'Vorname.Nachname@hin.ch'
        },
        Consulting: {
            name: 'Vorname Nachname',
            jobtitle: 'CEO der Herzen',
            mail: 'sin-siesta-no-fiesta@salamanca.ch'
        }
    }


    const info = textSrc[currentPage]


    return (
        <div>
           <Card>
            <Card.Body>
                <Row className='fragen'>
                    <Col md={2}><img src={picture} alt='' /></Col>
                    <Col className='fragen-info'>
                        <h4>Haben Sie Fragen zu unseren {currentPage}-Angeboten?</h4>
                        <h6>{info.name}</h6>
                        <p>{info.jobtitle}</p>
                        <p><a href='mailto:abc@example.ch'>{info.mail}</a></p>
                    </Col>
                </Row>
            </Card.Body>
           </Card>
        </div>
    );
};

export default FragenCard;