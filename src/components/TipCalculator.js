import { useState } from 'react'
import { Row, Col } from 'react-bootstrap';

function Name() {
    const [total, setTotal] = useState(0.00);
    const [taxDecimal, setTaxDecimal] = useState(0.00);
    const [tip, setTip] = useState(0.00);
    const [hidden, setHidden] = useState(true);
    const [customTip, setCustomTip] = useState(0.00);


    const handleTotalChange = (e) => {
        setTotal(e.target.value);
    }

    const handleTaxChange = (e) => {
        setTaxDecimal(e.target.value);
    }

    const handleTipAmount = (tipAmt) => {
        const tipPct = (total > 0.00 ? (tipAmt / total).toFixed(3) : 0);
        setTip(tipPct);
    }

    const handleCustomTip = (e) => {
        setCustomTip(e.target.value);
        const tipPct = (total > 0.00 ? (e.target.value / total).toFixed(3) : 0);
        setTip(tipPct);        
    }

    
    

  return (
    <section id="tip-calculator">
      <Row className='px-5'>
        <Col size={12} md={6} className='d-flex align-items-center'>
          <div className="project-text">
            <h2 className="title">Tip Calculator</h2>
            <h5 className="inspiration">
              Inspired by <em>Tip Calculator App</em> by FrontEndMentor.io
            </h5>
            <p className="description">
                I initially saw this challenge in the thumbnail of a video created by Web Dev Cody. I decided to give it a shot and apply my own styles and solutions to the problem at hand.
            </p>
          </div>
        </Col>
        <Col size={12} md={6} className='d-flex justify-content-center'>
            <div className="calculator">
                <Row className="calculator-display">
                    <Col size={12} md={4} className="bill-entry">
                        <h1>Enter your bill:</h1>
                        <input type="text" className="calculator-input text-center" onChange={handleTotalChange} />
                    </Col>
                    <Col size={12} md={8} className="bill-statistics">
                        <h4>Subtotal: ${Number(total).toFixed(2)}</h4>
                        <h4>Tax ({Number(taxDecimal).toFixed(2)}%): ${((taxDecimal / 100) * total).toFixed(2)}</h4>
                        <h4>Tip ({(tip * 100).toFixed(1)}%): ${(tip * total).toFixed(2)}</h4>
                        <hr></hr>
                        <h3>Grand Total:</h3>
                        <h3>${(Number(total) + Number((taxDecimal / 100 * total)) + Number((tip * total))).toFixed(2)}</h3>
                    </Col>
                </Row>
                <div className="calculator-options">
                    <input type="text" className='calculator-input text-center' placeholder="Enter sales tax percentage" onChange={handleTaxChange} />
                    <div className="tip-options flex-column flex-md-row align-items-center">
                        <button onClick={() => {handleTipAmount(total * 0.1); setHidden(true);}} className={ Number(tip) === 0.10 ? 'active-tip my-2' : ' my-2'}>
                            <h5>10%</h5>
                            <h6>${(total * 0.1).toFixed(2)}</h6>
                        </button>
                        <button onClick={() => {handleTipAmount(total * 0.15); setHidden(true);}} className={ Number(tip) === 0.15 ? 'active-tip my-2' : ' my-2'}>
                            <h5>15%</h5>
                            <h6>${(total * 0.15).toFixed(2)}</h6>
                        </button>
                        <button onClick={() => {handleTipAmount(total * 0.2); setHidden(true);}} className={ Number(tip) === 0.20 ? 'active-tip my-2' : ' my-2'}>
                            <h5>20%</h5>
                            <h6>${(total * 0.2).toFixed(2)}</h6>
                        </button>
                        <button onClick={() => {handleTipAmount(total * 0.25); setHidden(true);}} className={ Number(tip) === 0.25 ? 'active-tip my-2' : ' my-2'}>
                            <h5>25%</h5>
                            <h6>${(total * 0.25).toFixed(2)}</h6>
                        </button>
                        <button onClick={() => {handleTipAmount(customTip); setHidden(false);}} className={ !hidden ? 'active-tip my-2' : 'my-2'}>
                            <h5>Custom</h5>
                            <input type="text" className={"custom-tip text-center calculator-input " + (hidden ? 'hidden' : '')} onChange={handleCustomTip}/>
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    </section>    
  )
}

export default Name