import React from 'react';
import { Link } from 'react-router-dom'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import notFoundImage from '../assets/images/flame-vr-movie 1.png'

export default function Results({results}) {
    if(typeof results===undefined){
        results = []
    }
    
    const onLike = () => {
        console.log(results);
    }
  return (
    <div className='results'>
        {
            results.length?results.map((result, index) => (
                <div className="result">
                    <div className="result-top">
                        <span className='result-type'>{result.Type}</span>
                        <div className="result-like" onClick={()=> onLike()}>
                            {result.like?<AiFillHeart/>:<AiOutlineHeart/>}
                        </div>
                    </div>

                    <Link to={`/details/${result.imdbID}`}  key={index}>
                        <img className='result-image' key={index} src={result.Poster} alt='result'/>
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
