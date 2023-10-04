import React from "react";
import { Container } from "react-bootstrap";
import './Dienstleistungen.css'

const Dienstleistungen = ({currentPage, onPageChange}) => {

    const data = {
        dienstleistung1: {
            name: 'Trustcenter',
            imgsrc: 'https://media.istockphoto.com/id/1387028913/de/foto/aufnahme-von-zwei-reifen-%C3%A4rzten-mit-einem-tablet-in-einem-b%C3%BCro.jpg?s=2048x2048&w=is&k=20&c=szhmqfTGYI_rMah6sBI654weL9C9JGFgr8K3Q-L3iq8=',
        },
        dienstleistung2: {
            name: 'Treuhand',
            imgsrc: 'https://media.istockphoto.com/id/1413206766/de/foto/krankenhausarzt-verwendet-eine-tabelle-f%C3%BCr-abrechnungscodes.jpg?s=2048x2048&w=is&k=20&c=JK5Aio48LYAO20aISz_W1wqMQ8sEeUSxMIjq1vguO6g=',
        },
        dienstleistung3: {
            name: 'Consulting',
            imgsrc: 'https://media.istockphoto.com/id/1385287878/de/foto/senior-alter-arzt-tr%C3%A4gt-headset-fern-online-medizinische-chat-konsultation-telemedizin.jpg?s=2048x2048&w=is&k=20&c=cYrfbtT0BZBnH0T9fHJQb-DyZRHFxvUuvsD7xlqc_Yc=',
        }

    }

    return(
        <Container>
            <div className="header-dienstleistungen">
                <h3 id="dienstleistungen">Dienstleistungen</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="dienstleistung-list">
                {Object.keys(data).map((dienstleistungKey) =>{
                    const dienstleistung = data[dienstleistungKey];
                    return(
                        <div key={dienstleistungKey} className="dienstleistung" onClick={() => onPageChange(dienstleistung.name)}>
                            <img src={dienstleistung.imgsrc} alt={dienstleistung.name}/>
                            <h4>{dienstleistung.name}</h4>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
    
}

export default Dienstleistungen