import React from 'react';
import DienstleistungHeader from './DienstleistungHeader';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import './PonteNova.css';
import Angebote from './Angebote';
import Video from './Video';
import Team from './Team';
import Verwaltungsrat from './Verwaltungsrat';
import Partner from './Partner';


const PonteNova = ({ currentPage, onPageChange}) => {
    return (
        <>
            <DienstleistungHeader currentPage={currentPage} onPageChange={onPageChange}/>
            <Container>
                <div className='ueber'>
                    <h3 id='Über'>Über PonteNova</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br></br><br></br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                </div>
            </Container>
            <Angebote currentPage={currentPage}/>
            <Video />
            <Newsletter />
            <Team />
            <Verwaltungsrat />
            <Partner />
            <Newsletter />
            <Footer />
        </>
    );
};

export default PonteNova;