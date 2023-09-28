import React from 'react';
import Newsletter from './Newsletter';
import Footer from './Footer';
// import Agenda from './Agenda';


const Home = ({currentPage}) => {
    return (
        <>
        <Newsletter />
        {/* <Agenda currentPage={currentPage} /> */}
        <Newsletter />
        <Footer />
        </>
    );
};

export default Home;