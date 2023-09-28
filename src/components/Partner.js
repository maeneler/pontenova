import React from "react";
import { Container } from "react-bootstrap";
import './Partner.css'

const Partner = () => {

    const data = {
        partner1: {
            logoUrl: '../../images/logoipsum-289.svg',
            name: 'random',
            homepage: 'https://logoipsum.com/' 
        },
        partner2: {
            logoUrl: '../../images/logoipsum-264.svg' ,
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner3: {
            logoUrl: '../../images/logoipsum-289.svg',
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner4: {
            logoUrl: '../../images/logoipsum-264.svg',
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner5: {
            logoUrl: '../../images/logoipsum-289.svg' ,
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner6: {
            logoUrl: '../../images/logoipsum-264.svg',
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner7: {
            logoUrl: '../../images/logoipsum-289.svg',
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        },
        partner8: {
            logoUrl: '../../images/logoipsum-264.svg',
            name: 'random' ,
            homepage: 'https://logoipsum.com/' 
        }

    }

    return(
        <Container>
            <div className="header-team">
                <h3 id="Partner">Unsere Partner</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="logo-list">
                {Object.keys(data).map((partnerKey) =>{
                    const partner = data[partnerKey];
                    return(
                        <div key={partnerKey} className="logo">
                           <a href={partner.homepage}> <img src={partner.logoUrl} alt={partner.name}/></a>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
    
}

export default Partner
