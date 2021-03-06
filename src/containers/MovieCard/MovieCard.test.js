import { MovieCard, mapStateToProps } from './MovieCard';
import { shallow } from 'enzyme';
import React from 'react';


describe('MovieInfo', () => {
  describe('MovieInfo component', () => {
    let wrapper;
    const mockHandleFavorite = jest.fn();
    const mockCheckFavorites = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<MovieCard
        id={5}
        title='Wicked'
        release_date='2017'
        poster_path='http://pic.pic'
        vote_average={6.5}
        overview='Blah'
        handleFavorite={mockHandleFavorite}
        checkFavorites={mockCheckFavorites}
        user={({
          name: 'Pol',
          id: 2,
          isSignedIn: true
        })}
      />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handle favorite on click of the button', () => {
      //Setup
      const favorite = {
        movie_id: 5,
        title: 'Wicked',
        release_date: '2017',
        poster_path: 'http://pic.pic',
        vote_average: 6.5,
        overview: 'Blah'
      }
      //Execution
      wrapper.find('button').simulate('click');

      //Expectation
      expect(mockHandleFavorite).toHaveBeenCalledWith(favorite);
    })
  });

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // Setup
      const mockState = {
        favorites: [{
          title: 'Wicked',
          release_date: '2017',
          average_rating: 6.5,
          popularity: 55.55,
          movie_id: 5
        },
        {
          title: 'Joker',
          release_date: '2019',
          average_rating: 7.5,
          popularity: 68.55,
          movie_id: 6
        }],
        user: {
          name: 'Pol',
          id: 2,
          isSignedIn: true
        }
      };
      const expected = {
        favorites: [{
          title: 'Wicked',
          release_date: '2017',
          average_rating: 6.5,
          popularity: 55.55,
          movie_id: 5
        },
        {
          title: 'Joker',
          release_date: '2019',
          average_rating: 7.5,
          popularity: 68.55,
          movie_id: 6
        }],
        user: {
          name: 'Pol',
          id: 2,
          isSignedIn: true
        }
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });

})