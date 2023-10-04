import React from "react";
import { Container, Ratio } from "react-bootstrap";
import './Video.css'

const Video = ({currentPage}) => {
    return (
        <Container className={`${currentPage === 'Home' ? 'homepageVideo': ''}`}>
            <div className="video-content">
                <Ratio aspectRatio="16x9">
                    <div>
                        <video controls width="100%" height="100%" poster="https://media.istockphoto.com/id/1387028913/de/foto/aufnahme-von-zwei-reifen-%C3%A4rzten-mit-einem-tablet-in-einem-b%C3%BCro.jpg?s=2048x2048&w=is&k=20&c=szhmqfTGYI_rMah6sBI654weL9C9JGFgr8K3Q-L3iq8=">
                            <source src="https://media.istockphoto.com/id/960564622/sv/video/matematiska-formler-nummer-animation-bakgrund-rendering-loop-med-alfakanal.mp4?s=mp4-640x640-is&k=20&c=JG6qHIsc2Y4p83d0eb_F3MK1y0E6Ej80T-ALLqCoYE0=" type="video/mp4"></source>
                            Your browser does not support the video tag
                        </video>
                    </div>
                </Ratio>
            </div>
        </Container>
    )
}

export default Video