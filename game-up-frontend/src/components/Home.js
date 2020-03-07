import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
export default class Home extends Component { 
//  componentDidMount(){
    
//     for(let i = 0; i < 4; i++) { 
//       let randomArray = []
//       let games = this.props.testGames
  
//     let randomNum = Math.floor(Math.random() * games.length)
//     let randomgame = games[randomNum]
//     randomArray << randomgame
//     console.log(randomArray)
//     }
//   }
    render(){ 
      let games = this.props.testGames
      let num1 = Math.floor(Math.random() * games.length)
      let num2 = Math.floor(Math.random() * games.length)
      let num3 = Math.floor(Math.random() * games.length)
      let link1 = `/games/${this.props.testGames[num1].id}`
      let link2 = `/games/${this.props.testGames[num2].id}`
      let link3 = `/games/${this.props.testGames[num3].id}`
debugger
    return(
        <div>
<Carousel>
  <Carousel.Item>
  <Link to={link1}>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[num1].background_image}
      alt="First slide"
      />
      </Link>
    <Carousel.Caption>
      <h3>{this.props.testGames[num1].name}</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Link to={link2}>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[num2].background_image}
      alt="Third slide"
    />
     </Link>
    <Carousel.Caption>
      <h3>{this.props.testGames[num2].name}</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Link to={link3}>
    <img
      className="fit-image-carousel"
      src={this.props.testGames[num3].background_image}
      alt="Third slide"
    />
</Link>
    <Carousel.Caption>
      <h3>{this.props.testGames[num3].name}</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        
            </div>
    )
    }
}