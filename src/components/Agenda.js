import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Angebote.css'

const Agenda = ({currentPage}) => {
    let accordionData;

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
    } 

    return (
        <div>
            <Container>
            {['Home', 'Veranstaltungen'].includes(currentPage) && (
                        <h3 className='header-angebote'>Agenda</h3>,
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
    
                        )}
                <Accordion>
                    {accordionData.map((item) =>(
                        <Accordion.Item key={item.id} eventKey={item.id} >
                        <Accordion.Header className={`custom-accordion ${currentPage ==='PonteNova' ? 'custom-pontenova-header' : ''}`}>{item.title}</Accordion.Header>
                        <Accordion.Body>{item.text}</Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};

export default Agenda;