import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Home extends Component { 
  
    render(){ 
    return(
        <div>
<Carousel>
  <Carousel.Item>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[0].background_image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{this.props.testGames[0].name}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[1].background_image}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{this.props.testGames[1].name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[2].background_image}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{this.props.testGames[2].name}</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        
            </div>
    )
    }
}