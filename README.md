# Game-up-Frontend

Welcome to Game-Up, where you can explore a selection of video games, save the ones you like to your profile page, and log in at a later time to check out what you already liked. Using the [RAWG API](https://rawg.io/apidocs) to render the game selection and information, you can also check out a suggested game based on the current game you are viewing.

Available features:

- **Users can create an unique account**
- **Users can login/logout and their information will presist (JWT and bcrypt)**
- **Users can navigate around the website by clicking on various links in the NavBar**
- **Users can view a gallery of video games**
- **Users can search through the gallery of games for a specific title**
- **Users can click on a video game to see more information about that game**
  - **Information displayed includes: Title, Game Poster, Rating, Video Clip, & Suggested Game**
- **Users can like and dislike a specific game by clicking on a Like/Dislike button on the game detail page**
- **Users can view their liked games by viewing their user profile page**

## Installation

- Fork and clone this repo and [the backend repo](https://github.com/Mcheyo/Game-Up-Backend)

- First cd into the game-up-backend directory in the backend repo
  - Run `$ rails db:create`
  - Run `$ rails db:migrate`
  - Run `$ rails server`
  
- After the backend is up, cd into the game-up-frontend directory
  - Run `$ npm install`
  - Run `$ npm start`

## Game-Up Demo 
[![Game-Up Demo Video](https://img.youtube.com/vi/8bjiVgU51D4/0.jpg)](https://www.youtube.com/watch?v=8bjiVgU51D4&feature=youtu.be)


## Frameworks and Libraries Used

- Front-end: Javascript and [ReactJS](https://reactjs.org/) with [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start), [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroll-component)
- Back-end: [Ruby on Rails](https://github.com/rails/rails)
- Testing: [Jest](https://jestjs.io/docs/en/tutorial-react) and [Enzyme](https://enzymejs.github.io/enzyme/)
- [Bootstrap](https://getbootstrap.com/) & [Bootstrap ReactJS](https://react-bootstrap.github.io/)
- Auth: [JWT](https://jwt.io/) & [bcrypt](https://github.com/codahale/bcrypt-ruby)

## Authors

- Anna Dybas (https://github.com/adybas)
- Mansour Cheyo (https://github.com/Mcheyo)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Mcheyo/Game-up-Frontend/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
