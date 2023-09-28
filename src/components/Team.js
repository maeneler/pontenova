import React from "react";
import { Container } from "react-bootstrap";
import './Team.css'

const Team = () => {

    const data = {
        employee1: {
            name: 'Peter Frutig',
            jobtitle: 'CEO Ponte Nova',
            mail: 'peter.frutig@hin.ch',
            imgsrc: 'https://www.pontenova.ch/1/Team/--Frutig.jpg'
        },
        employee2: {
            name: 'Ralf Grubwinkler',
            jobtitle: 'Mandatsleiter Treuhand / Experte Tarifanwendung',
            mail: 'ralf.grubwinkler@hin.ch',
            imgsrc: 'https://www.pontenova.ch/1/Team/Grubwinkler.jpg'
        },
        employee3: {
            name: 'Priska Stegmann',
            jobtitle: 'Organisation/Administration',
            mail: 'priska.stegmann@hin.ch',
            imgsrc: 'https://www.pontenova.ch/1/Team/-Stegmann.jpg'
        },
        employee4: {
            name: 'Silvia Wiedmer',
            jobtitle: 'Buchhaltung / Sekratariat',
            mail: 'silvia.wiedmer@hin.ch',
            imgsrc: 'https://www.pontenova.ch/1/Team/Wiedmer.jpg'
        }

    }

    return(
        <Container>
            <div className="header-team">
                <h3 id="Team">Unser Team</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="employee-list">
                {Object.keys(data).map((employeeKey) =>{
                    const employee = data[employeeKey];
                    return(
                        <div key={employeeKey} className="employee">
                            <img src={employee.imgsrc} alt={employee.name}/>
                            <h4>{employee.name}</h4>
                            <h6>{employee.jobtitle}</h6>
                            <p><a href='mailto:abc@example.ch'>{employee.mail}</a></p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
    
}

export default Team