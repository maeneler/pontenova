import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Angebote.css'
import './Agenda.css'

const Agenda = ({currentPage, onPageChange}) => {
    let accordionData;
    let headerInfo;

    if (currentPage === 'Veranstaltungen'){
        accordionData = [
            {
                id: '0',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '1',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '2',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
           },
            {
                id: '3',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '4',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '5',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '6',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '7',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            }
        ];

        headerInfo = {
            title: "Agenda",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        }
    } if (currentPage === 'Home'){
        accordionData = [
            {
                id: '0',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '1',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
            },
            {
                id: '2',
                date: '29. März 2024',
                title: 'Die Prüfwut der Versicherer',
                adress: 'Best Western Plus Hotel Bern, Zeughausgasse 9, 3011 Bern',
                text: 'Santésuisse verschickt auf Basis des Regressionsberichts 2021 wieder vermehrt Warnbriefe oder lädt zu Gesprächen. Auch die Krankenversicherer halten sich mit Prüfungen nicht zurück. Wir zeigen Ihnen, worauf Sie achten sollten und Sie sich schützen können.',
                link: 'Für den Event anmelden -->'
           }
        ];

        headerInfo = {
            title: "Veranstaltungen",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        }
    } 

    return (
        <div className='container-agenda'>            
            <Container className='veranstaltungen-responsive'>
            {['Home', 'Veranstaltungen'].includes(currentPage) && (
                <div>
                    <div className='header-veranstaltungen'>
                        <h3 className='header-angebote margin-bottom' >{headerInfo.title}</h3>
                        <p>{headerInfo.text}</p>
                    </div>

                    {currentPage === 'Home' && (
                        <div className='linkToVeranstaltungen'>
                            <a href='#Veranstaltungen' onClick={() => onPageChange('Veranstaltungen')}>Alle Veranstaltungen ansehen</a>
                        </div>
                    )}

                                                            
                <Accordion>
                    {accordionData.map((item) =>(
                        <Accordion.Item key={item.id} eventKey={item.id} >
                        <Accordion.Header className={`custom-accordion ${currentPage ==='PonteNova' ? 'custom-pontenova-header' : ''}`}>{item.date}</Accordion.Header>
                        <Accordion.Body>
                            <h6>{item.title}</h6>
                            <p>{item.adress}</p>
                            <br></br>
                            <p>{item.text}</p>
                            <p><a href='#top'>Für den Event anmelden</a></p>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                )}
            </Container>
        </div>
    );
};

export default Agenda;