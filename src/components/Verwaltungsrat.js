import React from "react";
import { Container } from "react-bootstrap";
import './Verwaltungsrat.css'

const Verwaltungsrat = () => {

    const data = {
        vr1: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr2: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr3: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr4: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr5: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr6: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr7: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr8: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        },
        vr9: {
            name: 'Vorname Nachname',
            titel: 'Präsidentin',
            jobtitle: 'Fachärztin für Psychiatrie und Psychotherapie',
            adress: 'Marktgasse 29, 3011 Bern',
            tel: 'Tel. 031 111 11 11',
            fax: 'Fax 031 222 11 11',
            mail: 'vorname.nachname@hin.ch'
        }
    }

    return(
        <Container>
            <div className="header-vr-team">
                <h3 id="Verwaltungsrat">Verwaltungsrat</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="vr-list">
                {Object.keys(data).map((vrKey) =>{
                    const vr = data[vrKey];
                    return(
                        <div key={vrKey} className="vr-members">
                            <h4>{vr.name}</h4>
                            <h5>{vr.titel}</h5>
                            <p>{vr.jobtitle}</p>
                            <p>{vr.adress}</p>
                            <p>{vr.tel}</p>
                            <p>{vr.fax}</p>
                            <p><a href='mailto:abc@example.ch'>{vr.mail}</a></p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Verwaltungsrat