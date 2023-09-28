import React from 'react';
import Angebote from './Angebote';
import DienstleistungHeader from './DienstleistungHeader';
import Newsletter from './Newsletter';
import Footer from './Footer';
import FragenCard from './FragenCard';
import { Container } from 'react-bootstrap';
import './Consulting.css'

const Consulting = ({ currentPage, onPageChange }) => {
    return (
        <div>
            <DienstleistungHeader currentPage={currentPage} onPageChange={onPageChange} />
            <Container>
                <div className='dienstleistung-info'>
                    <h3>Individuelle Beratung auf Basis unserer Datenkompetenz</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br></br><br></br>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                </div>
            </Container>
            <Angebote currentPage={currentPage}/>
            <FragenCard currentPage={currentPage} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Consulting;