import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Home extends Component { 
  
    render(){ 
      debugger
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
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        
            </div>
    )
    }
}