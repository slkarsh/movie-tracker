import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';
import { Link } from 'react-router-dom';

const MovieContainer = ({ handleFavorite, favorites, user }) => {
  console.log(user)
  const displayMovies = favorites.map(movie => {
    return (
      <MovieCard
        {...movie}
        key={movie.id}
        id={movie.id}
        movie={movie}
        handleFavorite={handleFavorite}
      />
    )
  })

  return (
    <section className='favorites-container'>
      <div className='nav-buttons'>
      {user.isSignedIn && <Link to='/login'>
        <button className='sign-in-movie' type='button'>Sign Out</button>
      </Link>}
      {!user.isSignedIn && <Link to='/login'>
        <button className='sign-in-movie' type='button'>Sign In</button>
      </Link>}
      <Link to='/'>
        <button className='go-home' type='button'>Home</button>
      </Link>
      </div>
      <div className='favorites'>
        {user.isSignedIn && displayMovies}
        {!user.isSignedIn && <div className='fav-prompt'>Please Sign In</div>}
      </div>
    </section>
  )
}

const mapStateToProps = ({ favorites, user }) => ({
  favorites,
  user 
})

export default connect(mapStateToProps)(MovieContainer)