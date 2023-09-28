import React from 'react';
import DienstleistungHeader from './DienstleistungHeader';
import Agenda from './Agenda';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Veranstaltungen = ({currentPage, onPageChange}) => {
    return (
        <div>
            <DienstleistungHeader currentPage={currentPage} onPageChange={onPageChange}/>
            <Agenda currentPage={currentPage} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Veranstaltungen;