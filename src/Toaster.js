import React from 'react'
import {Row,Toast} from "react-bootstrap"

function Toaster({close,show,styled,text}) {
    return (
        <Row>
    

        <Toast onClose={close} show={show} delay={2000} autohide animation>
    <center>
         <h6  style={styled}>{text}</h6>
         </center>
        </Toast>
    </Row>
    )
}

export default Toaster
