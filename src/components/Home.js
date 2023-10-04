import React from 'react';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Agenda from './Agenda';
import DienstleistungHeader from './DienstleistungHeader';
import Video from './Video';
import { Container } from 'react-bootstrap';
import Dienstleistungen from './Dienstleistungen'
import './Home.css'


const Home = ({currentPage, onPageChange}) => {
    return (
        <>
        <DienstleistungHeader currentPage={currentPage} onPageChange={onPageChange} />
        <Video currentPage={currentPage}/>
        <Container>
            <div className='textpartHomepage'>
                <h3>Die Zahl ist das Wesen aller Dinge (Pythagoras) - <br></br> darum sind ihre Daten so wertvoll</h3>
                <p>Kurz vor der Einführung des Tarmed wurden in der Schweiz insgesamt 11 regionale TrustCenter aufgebaut. Von Anfang an entschieden sich 4‘983 Ärzte ihre Abrechnungsdaten an eines der 11 TrustCenter zu liefern und sie damit auch in den nationalen, ärzteeigenen Datenpool einfliessen zu lassen. Heute steuern schweizweit 8‘396 Praxen ihre Daten bei, davon alleine 1‘416 Praxen aus dem Kanton Bern. Doch wozu das Ganze, mögen sich viele fragen? Was habe ich ausser zusätzlichem Aufwand und zusätzlichen Kosten davon?<br></br><br></br>
                    Als CEO von PonteNova arbeite ich fast täglich mit dem Datenpool der freien Ärzteschaft. Einerseits um unzählige Ärzte zu unterstützen, die mit Überarztungsvorwürfen konfrontiert sind, andererseits um die kantonale Kostenentwicklung analysieren zu können. Überartztungsvorwürfe seitens der Krankenversicherer können auf den einzelnen Arzt massive Auswirkungen haben, bis hin zu Rückforderungen im Bereich von 10‘000 bis teilweise über 900‘000 Franken. Hunderte Ihrer Kollegen haben das Ende der Wehrlosigkeit wegen fehlender Datengrundlagen schätzen gelernt. Ohne den ärzteeigenen Datenpool ist es praktisch unmöglich, die Zahlen von santésuisse zu plausibilisieren und Argumente zur Verteidigung zu finden. Auf der anderen Seite gibt es den Taxpunktwert, welcher permanent unter massivem Druck steht. Immerhin bringt eine Absenkung um 1 Rappen im ambulanten Bereich den Kassen alleine im Kanton Bern rund 8.2 Millionen Franken Ersparnisse pro Jahr, eine Einsparung die zu 100 % zu Lasten der Ärzte geht. Bisher ist es gelungen, den Taxpunktwert von 86 Rappen zu halten - sicher nicht zuletzt auch dank des ärzteeigenen Datenpools.<br></br><br></br>
                    Nach über 10 Jahren Arbeit mit dem Datenpool der freipraktizierenden Ärzteschaft bin ich der tiefsten Überzeugung, dass Ihre Datensammlung ein unabdingbares Werkzeug ist und in Zukunft immer grössere Bedeutung erhalten wird. Ich empfehle deshalb allen Ärzten, welche Ihre Daten heute noch nicht beisteuern, dies künftig zu tun! Sie helfen damit sich selbst und der ganzen freien Ärzteschaft. PonteNova steht Ihnen für Auskünfte und Fragen jederzeit gerne zur Verfügung. <br></br><br></br>
                    <strong>Peter Frutig</strong>, CEO PonteNova</p>
                <a href='#PonteNova' onClick={() => onPageChange('PonteNova')}>Mehr zu PonteNova</a>
            </div>
        </Container>
        <Newsletter />
        <Dienstleistungen onPageChange={onPageChange} />
        <Agenda currentPage={currentPage} onPageChange={onPageChange} />
        <Newsletter />
        <Footer />
        </>
    );
};

export default Home;