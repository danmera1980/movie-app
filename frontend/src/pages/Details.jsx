import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
import {FaImdb, FaRegStar, FaStar} from 'react-icons/fa'
import Header from '../components/Header';

export default function Details({setAuth}) {
  const [stars,setStars] = useState(0)
  const [inputs, setInputs] = useState({
    rating:0,
    comment:""
  })
  const {id} = useParams();
  let movie = {
    id: 1,
    title: "Dune",
    year: "2021",
    rated: "PG-13",
    released: "22 Oct 2021",
    runtime: "155 min",
    genre: ["Action", "Adventure", "Drama"],
    director: ["Denis Villeneuve"],
    writer: ["Jon Spaihts", "Denis Villeneuve", "Eric Roth"],
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya", "Oscar Isaac", "Josh Brolin", "Jason Momoa", "Stellan Skarsgård", "Javier Bardem", "Dave Bautista"],
    plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 8.1
  }        

let comments = [
  {
    name: 'Kim',
    date: '10/22/2021',
    comment: `Having read the book a hundred years ago, it took some time to begin to understand what was going on. If there is a criticism that many share, it is the pacing of the first part of the film. It needed something to set the scene for us, to show us who the strong and the weak were. I'm not much for narration (show me, don't tell me), but it may not have been a bad idea. The scenes are magnificent with special effects off the chart. Many desert travel scenes are quite endless. How do you spruce up a desert. I thought the sand worms were a little one dimensional. I know there is another film down the road.`
  },
  {
    name: 'Steve',
    date: '10/20/2021',
    comment: `I've never read Frank Herbert's novel or seen any other adaptation of "Dune", so I have to take Denis Villeneuve's adaptation as the guide. It's an impressive movie. Not just the visuals, but in the story's complexity. Timothée Chalamet continues to reaffirm himself as one of the greatest actors of his generation. 
              I'm eager to see part 2, as well as David Lynch's adaptation.`
  },{
    name: 'Adam',
    date: '10/18/2021',
    comment: `The visuals are pretty impressive. Even though the colour palette is monotonous, the visuals are beautiful and captivating. The story is ending, albeit slow at times. I really like Timothee Chamalet's character. Overall, I liked it.`
  }
]

const onChangeInput = (e) => {
  e.preventDefault();
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  })
  if(e.target.name==="rating"){
    setStars(e.target.value)
  }
}

console.log(inputs, stars);
  return (
    <div className='details-page'>
      <div className="main">
        <Header/>
        <span className='return'>&#129044;</span>
        <div className="details">
          <img src={movie.poster} alt="poster" className="details-image" />
          <div className="info">
            <div className='title'>{movie.title}</div>
            <span>Original title: {movie.title}</span>
            <span>{`${movie.runtime} - ${movie.year} - ${movie.rated}`}</span>
            <div className="imdb-rating">
              <FaImdb size={32} color={'#F5C518'}/>
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
          <form>
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
              <div className="comment-title">
                <span>{comment.name} - {comment.date}</span>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
