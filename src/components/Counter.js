import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    return (
        <section className="counter" id="counter">
            <Row>
                <Col size={12} md={6} className='d-flex align-items-center'>
                    <div className="project-text">
                        <h2 className="title">React Counter</h2>
                        <h5 className="inspiration">
                        Inspired by <em>Mock React Interview</em> by Ben Awad
                        </h5>
                        <p className="description">
                            A simple project to better understand useState and onClick events. Lorem ipsum 
                            dolor sit amet consectetur, adipisicing elit. Praesentium sunt rerum nam deleniti 
                            sint voluptas expedita repellendus illo incidunt soluta!
                        </p>
                    </div>
                </Col>
                <Col size={12} md={6}>
                    <div className="counter-display d-flex flex-column align-items-center">
                        <div className="counter-number">
                            <h1>{counter}</h1>
                        </div>
                        <div className="counter-buttons">
                            <button className="add" onClick={handleAdd}>+</button>
                            <button className="subtract" onClick={handleSubtract}>-</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>    
  )
}

export default Counter