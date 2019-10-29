import './MovieCard.scss';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchAndPostFavorite, fetchAndDeleteFavorite } from '../../actions'

export const MovieCard = ({ id, title, release_date, poster_path, overview, vote_average, handleFavorite }) => {
  const d = new Date(`${release_date}`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <div className='MovieCard'>
      <Link to={`/movie/${id}`} className='MovieCardLink'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
        <div className='movie'>
          <div className='movie-info'>
            <h2 className='movie-title'>{title}</h2>
            <h3 className='movie-vote'>{vote_average}</h3>
            <h4 className='movie-release'>{date}</h4>
            <h4 className='movie-overview'>{overview}</h4>
          </div>
        </div>
      </Link>
      <button
        id={id}
        type='button'
        className='favorite-btn'
        onClick={() => {
          handleFavorite({
            movie_id: id,
            title: title,
            poster_path: poster_path,
            release_date: release_date,
            vote_average: vote_average,
            overview: overview
          })
        }}
      ><IoIosHeartEmpty className='favorite-heart' /></button>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
})

export default connect(mapStateToProps)(MovieCard);