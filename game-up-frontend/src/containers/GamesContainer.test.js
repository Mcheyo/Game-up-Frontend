import React from 'react';
import { shallow } from 'enzyme';
import GamesContainer from './GamesContainer'
import Games from '../components/Games'


describe('Games Container', () => {
   it('passes props of an array of games to be render to Game component', () => {
       let mockProps = { gamesArray: [
           {id: 1, name: "GTA 5", rating: 5},
           {id: 2, name: "Just Cause", rating: 3},
           {id: 3, name: "South Park", rating: 4},
       ]}
       let wrapper = shallow(<GamesContainer {...mockProps} />)
       expect(wrapper.find(Games).length).toBe(mockProps.gamesArray.length)
    });
});