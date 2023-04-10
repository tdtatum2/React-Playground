import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';

function Name() {

  return (
    <section className="cards" id="color-palette">
      <Row>
        <Col size={12} md={6} className='d-flex align-items-center'>
          <div className="project-text">
            <h2 className="title"></h2>
            <h5 className="inspiration">
              Inspired by <em></em> by
            </h5>
            <p className="description">
            </p>
          </div>
        </Col>
        <Col size={12} md={6} className="d-flex flex-column align-items-center">
          <div className="">
            
        </div>
        </Col>
    </Row>
    </section>    
  )
}

export default Name