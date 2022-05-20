import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {FaRegStar, FaStar} from 'react-icons/fa';
import Header from '../components/Header';
import { getCommentsByMovieID, getMovieDetailsByID, newCommentByUser } from '../redux/actions';
import imdbLogo from '../assets/images/IMDB_Logo.svg';
import { ToastContainer, toast } from 'react-toastify';

export default function Details({setAuth}) {
  const movie = useSelector(state => state.store.details);
  const comments = useSelector(state => state.store.comments)
  const dispatch = useDispatch();
  const [stars,setStars] = useState(0)
  const [inputs, setInputs] = useState({
    rating:0,
    comment:""
  })
  const {id} = useParams();  
  
  const [payload, setPayload] = useState({
    token: localStorage.token,
    movieID: id,
    body: inputs
  })

  useEffect(()=>{
    dispatch(getMovieDetailsByID(id))
    dispatch(getCommentsByMovieID(id))
  },[])

  console.log(movie.title, movie.title===undefined?"empty":"full");


const onChangeInput = (e) => {
  e.preventDefault();
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  })
  setPayload({
    ...payload,
    body: inputs
  })
  if(e.target.name==="rating"){
    setStars(e.target.value)
  }
}


const onSubmit = (e) => {
  e.preventDefault();
  
  toast.promise(dispatch(newCommentByUser(payload)),
  {
    pending: 'Positng ...',
    success: "Comment Posted",
    error: "Error posting"
  })
  window.location.reload()
}


console.log(inputs, stars);

  return (
    <div className='details-page'>
      <div className="main">
        <ToastContainer/>
        <Header/>
        <Link to="/" className='return'>
          <span>&#129044;</span>
        </Link>
        {
          movie.title!==undefined?
          <div>
            <div className="details">
              <img src={movie.poster} alt="poster" className="details-image" />
              <div className="info">
                <div className='title'>{movie.title}</div>
                <span>Original title: {movie.title}</span>
                <span>{`${movie.runtime} - ${movie.year} - ${movie.rated}`}</span>
                <div className="imdb-rating">
                  <img src={imdbLogo} alt="imdblogo" />
                  <h4>{movie.imdbRating}<span>/10</span></h4>
                </div>
                <h5>Overview</h5>
                <p>{movie.plot}</p>
                <div className="specs">
                  <div>
                    <h5>Cast</h5>
                    <div className="cast">
                    {
                      movie.actors.map((actor,index) => (
                        <span key={index}>{actor}</span>
                      ))
                    }
                    </div>
                  </div>
                  <div>
                    <h5>Genre</h5>
                    <div className="cast">
                    {
                      movie.genre.map((gen, index) => (
                        <span key={index}>{gen}</span>
                      ))
                    }
                    </div>
                  </div>
                  <div>
                    <h5>Director</h5>
                    <div className="cast">
                    {
                      movie.director.map((dir, index) => (
                        <span key={index}>{dir}</span>
                      ))
                    }
                    </div>
                  </div>
                  <div>
                    <h5>Writers</h5>
                    <div className="cast">
                    {
                      movie.writer.map((write, index) => (
                        <span key={index}>{write}</span>
                      ))
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-form">
              <h3>Commentary</h3>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="personal-rating">
                  <span>Rate: </span>
                  <div className="rating">
                    <input type="radio" id="1-stars" name='rating' value='1' onChange={e => onChangeInput(e)}/>
                    <label htmlFor="1-stars">{stars>0?<FaStar className='star' size={24} color="#FF9F1C"/>:<FaRegStar className='star' size={24}/>}</label>
                    <input type="radio" id="2-stars" name='rating' value='2' onChange={e => onChangeInput(e)}/>
                    <label htmlFor="2-stars">{stars>1?<FaStar className='star' size={24} color="#FF9F1C"/>:<FaRegStar className='star' size={24}/>}</label>
                    <input type="radio" id="3-stars" name='rating' value='3' onChange={e => onChangeInput(e)}/>
                    <label htmlFor="3-stars">{stars>2?<FaStar className='star' size={24} color="#FF9F1C"/>:<FaRegStar className='star' size={24}/>}</label>
                    <input type="radio" id="4-stars" name='rating' value='4' onChange={e => onChangeInput(e)}/>
                    <label htmlFor="4-stars">{stars>3?<FaStar className='star' size={24} color="#FF9F1C"/>:<FaRegStar className='star' size={24}/>}</label>
                    <input type="radio" id="5-stars" name='rating' value='5' onChange={e => onChangeInput(e)}/>
                    <label htmlFor="5-stars">{stars>4?<FaStar className='star' size={24} color="#FF9F1C"/>:<FaRegStar className='star' size={24}/>}</label>
                  </div>
                </div>
                <textarea name="comment" id="review" placeholder='Add your comments here' value={inputs.comment} onChange={e => onChangeInput(e)}></textarea>
                <div className="submit-btn">
                  <button className="submit">Post</button>
                </div>
              </form>
            </div>
            <div className="comments">
              {comments && comments?.map((comment, index) => (
                <div className="comment" key={index}>
                  {console.log(comment.date)}
                  <div className="comment-title">
                    <span>{comment.users[0].name} - {new Date(comment.date).toString().slice(0,16)}</span>
                    <div>{Array.from({length: comment.rating}, (_, i) => <FaStar className='star' size={24} color="#FF9F1C"/>)}</div>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
          :
          <div>Empty</div>
        }
      </div>
    </div>
  )
}
