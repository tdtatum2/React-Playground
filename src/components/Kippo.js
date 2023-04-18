import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { HeartFill, XLg } from 'react-bootstrap-icons';

function Kippo() {



  const colorPaletteCycle = [
    ['#243e36', '#7ca982', '#e0eec6', '#c2a83e'],
    ['#e0777d', '#8e3b46', '#4c86a8', '#477890'],
    ['#cfbff7', '#cfb1b7', '#6cd4ff', '#8b80f9'],
    ['#3cc29c', '#ea9c59', '#618b8c', '#4f3c53'],
    ['#fad466', '#5eb5ab', '#0e6973', '#294156'],
    ['#e8eb86', '#88aa6a', '#fe5a21', '#26212c'],
  ]

  const [colorPalette, setColorPalette] = useState(['#243e36', '#7ca982', '#e0eec6', '#c2a83e']);
  const [disliked, setDisliked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDislike = () => {
    setDisliked(true);
    const nextIndex = ((activeIndex + 1 <= colorPaletteCycle.length - 1) ? activeIndex + 1 : 0);
    setActiveIndex(nextIndex);
    setTimeout(() => {
      setDisliked(false);
    }, 1500);
  }

  const handleLike = () => {
    setLiked(true);
    const nextIndex = ((activeIndex + 1 <= colorPaletteCycle.length - 1) ? activeIndex + 1 : 0);
    setActiveIndex(nextIndex);
    setTimeout(() => {
      setLiked(false);
    }, 1500);
  }

  useEffect(() => {
    setColorPalette(colorPaletteCycle[activeIndex]);
  }, [activeIndex])
  


  return (
    <section className="cards" id="color-palette">
      <Row className='px-5'> 
        <Col size={12} md={6} className='d-flex align-items-center'>
          <div className="project-text">
            <h2 className="title">Color Palette Card Animation</h2>
            <h5 className="inspiration">
              Inspired by <em>ImNotGoodEnough.js</em> by Hyperplexed
            </h5>
            <p className="description">
              The goal of this project was to replicate a Kippo card animation in which the cards separate 
              (and smaller cards reveal themselves) on user hover. I decided to change the functionality to
              instead generate color palettes!
            </p>
          </div>
        </Col>
        <Col size={12} md={6} className="d-flex flex-column align-items-center">
          <div className={"card-holder " + (disliked || liked ? 'changing' : '')}>
            { colorPalette.map((color, index) => {
              return(
                <div key={index} className="big-card" style={{backgroundColor: color}}></div>
              )
            })}
            <div className={'reaction-icon ' + (disliked ? 'disliked' : '') + (liked ? 'liked' : '')} data-status="unknown">
              < XLg
                  color='#ff4554'
                  size='3em'
                  className='disliked'
                />
                < HeartFill
                  color='#57e3f2'
                  size='3em'
                  className='liked'
                />
            </div>
        </div>
        <div className="button-holder">
          <button className="dislike-button" onClick={handleDislike}>
            < XLg
              color='#ff4554'
              size='1.5em' />
            </button>
          <button className="like-button" onClick={handleLike}>
            < HeartFill
            color='#57e3f2'
            size='1.25em' />
          </button>
        </div>
        </Col>
    </Row>
    </section>    
  )
}

export default Kippo