import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DienstleistungHeader.css';
import DienstleistungTabs from './DienstleistungTabs';

const DienstleistungHeader = ({currentPage, onPageChange}) => {
    const [activeTab, setActiveTab] = useState(currentPage);

    const handleTabChange = (key) => {
          setActiveTab(key);
          onPageChange(key);
      };

    const tabs = [
        {key:'Trustcenter', title: 'TrustCenter'},
        {key:'Treuhand', title: 'Treuhand'},
        {key:'Consulting', title: 'Consulting'}
    ];

    const selectedTabContent = {
        Trustcenter: {
            title: 'TrustCenter',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
        },
        Treuhand: {
            title: 'Treuhand',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
        },
        Consulting: {
            title: 'Consulting',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
        },
        PonteNova: {
            title: 'Wer wir sind und was wir tun',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
        },
        Veranstaltungen: {
            title: 'Unsere Veranstaltungen',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
        },
        Home: {
            title: 'PonteNova ist das Kompetenzzentrum und die Vertrauenspartnerin der Solothurner und Berner Ärzteschaft',
            description: 'Mitglied werden -->'
        }
    };

    const { title, description } = selectedTabContent[activeTab];

    const headerImg = {
        Trustcenter: 'https://media.istockphoto.com/id/1387028913/de/foto/aufnahme-von-zwei-reifen-%C3%A4rzten-mit-einem-tablet-in-einem-b%C3%BCro.jpg?s=2048x2048&w=is&k=20&c=szhmqfTGYI_rMah6sBI654weL9C9JGFgr8K3Q-L3iq8=',
        Treuhand: 'https://media.istockphoto.com/id/1413206766/de/foto/krankenhausarzt-verwendet-eine-tabelle-f%C3%BCr-abrechnungscodes.jpg?s=2048x2048&w=is&k=20&c=JK5Aio48LYAO20aISz_W1wqMQ8sEeUSxMIjq1vguO6g=',
        Consulting: 'https://media.istockphoto.com/id/1385287878/de/foto/senior-alter-arzt-tr%C3%A4gt-headset-fern-online-medizinische-chat-konsultation-telemedizin.jpg?s=2048x2048&w=is&k=20&c=cYrfbtT0BZBnH0T9fHJQb-DyZRHFxvUuvsD7xlqc_Yc=',
        PonteNova: 'https://images.unsplash.com/photo-1594093880970-7b4295e8b6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        Veranstaltungen: 'https://media.istockphoto.com/id/523858586/de/foto/exekutive-gesch%C3%A4ftsmann-im-meetingraum.jpg?s=2048x2048&w=is&k=20&c=U3FUZcpjyLJ2ocyI6yBEb0Pu7Iy6wyQiYJymhDS5Uq0=',
        Home: 'https://s3-alpha-sig.figma.com/img/81fa/fd2a/139b9fb1525d52f2e5a826d2a3803f3a?Expires=1697414400&Signature=m3ZMW6KQOPifyul~YaTqnm0d8iFIIX2mJ4PDMbUj~7dguuLBUcWwU77Xpg8EQylsOyGCoQXMSU2OOCksv67-TLzdYP14zeetM1qH3kQAiHzq7KiAgWr01qxX3WfPx9QQxrwClyWgm5pqvDg6R613002wtOgIq~9UPbBhOAnDcDKiWvYkGlueht1K7RnPWtQK7dzqDy3EhtgxSfAfuqJ6LbLg-dNi1AVGEAF-Da9wTHbMnUnECfxNpU1JokoCJSM0PNL~TMOJH0ZixKde5As2QuQwdKQfY7MpcIAa8VhHeIS4lUvB-AgPY426gt0YTlH4YSKF~wKX4CS1tuATjGuaiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }

    const imgSrc = headerImg[currentPage]

    return (
        <div>
            <Container fluid className='dienstleistungheader'>
                <Row>
                    <Col className='text'>
                    {['Trustcenter', 'Treuhand', 'Consulting'].includes(currentPage) && (
                        <DienstleistungTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            handleTabChange={handleTabChange}
                        />
                        )}
                        <h2>{title}</h2>
                        {currentPage !== 'Home' &&(
                         <p>{description}</p>
                        )}

                        {currentPage === 'Home' &&(
                         <p className='homeHeaderLink'><a href='#Kontakt' onClick={() => onPageChange('Kontakt')}>{description}</a></p>
                        )}
                    </Col>
                    <Col  className='picture'>
                        <img src={imgSrc} alt=''  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DienstleistungHeader;