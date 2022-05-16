import React from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import notFoundImage from '../assets/images/flame-vr-movie 1.png'
import { toggleFavorite } from '../redux/actions';

export default function Results({results}) {
const dispatch = useDispatch();

    if(typeof results===undefined){
        results = []
    }
    
    const onLike = (imdbID) => {
        dispatch(toggleFavorite(imdbID, localStorage.token))
    }
  return (
    <div className='results'>
        {
            results.length?results.map((result, index) => (
                <div className="result"  key={index}>
                    <div className="result-top">
                        <span className='result-type'>{result.type}</span>
                        <div className="result-like" onClick={()=> onLike(result.imdbID)}>
                            {result.favorite?<AiFillHeart/>:<AiOutlineHeart/>}
                        </div>
                    </div>

                    <Link to={`/details/${result.imdbID}`}>
                        <img className='result-image' src={result.poster} alt='result'/>
                    </Link>
                </div>
            )):
            <div className="no-results">
                <img src={notFoundImage} alt="not found"/>
                 <h3>Don't know what to search?</h3>
                 <span>Here's an offer you can't refuse</span>
            </div>
        }
    </div>
  )
}
