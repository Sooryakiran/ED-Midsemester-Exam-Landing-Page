import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
    return (
        <Container fluid className='ex-header'>
            <Container>
                <Row>
                    <Col>
                    <h5 className='my-3'>ME1480: Engineering Drawing</h5>
                    </Col>
                </Row>
                    
            </Container>
        </Container>
    )
}
