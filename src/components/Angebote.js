import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Angebote.css'

const Angebote = ({currentPage}) => {
    let accordionData;

    if (currentPage === 'Trustcenter'){
        accordionData = [
            {
                id: '0',
                title: 'TrustCenter-Abo',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '1',
                title: 'WZW-Zusatz',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '2',
                title: 'PraxisCockpit',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '3',
                title: 'Dignitäts-Check',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '4',
                title: 'MAS-Fragebogen',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '5',
                title: 'RoKo-Rollende Kostenstudie',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '6',
                title: 'Auszug Analysenliste',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            }
        ];
    } if (currentPage === 'Treuhand'){
        accordionData = [
            {
                id: '0',
                title: 'Rechnungswesen / Buchführung',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '1',
                title: 'Lohnbuchhaltung / Sozialversicherungen',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '2',
                title: 'Steuern',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            }
        ];
    } if (currentPage === 'Consulting'){
        accordionData = [
            {
                id: '0',
                title: 'Beratung bei Wirtschaftlichkeitsverfahren',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '1',
                title: 'Unterstützung bei der Praxisgründung',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '2',
                title: 'Weitere Beratungsmöglichkeiten',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            }
        ];
    } if (currentPage === 'PonteNova'){
        accordionData = [
            {
                id: '0',
                title: 'Wie werde ich Mitglied?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '1',
                title: 'Wie werde ich Aktionär*in?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            },
            {
                id: '2',
                title: 'Geschäftsberichte herunterladen',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            }
        ];
    } ; 

    return (
        <div>
            <Container>
            {['Trustcenter', 'Treuhand', 'Consulting'].includes(currentPage) && (
                        <h3 className='header-angebote'>Angebote</h3>
                        )}
                <Accordion>
                    {accordionData.map((item) =>(
                        <Accordion.Item key={item.id} eventKey={item.id} >
                        <Accordion.Header className={`custom-accordion ${currentPage ==='PonteNova' ? 'custom-pontenova-header' : ''}`}>{item.title}</Accordion.Header>
                        <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};

export default Angebote;