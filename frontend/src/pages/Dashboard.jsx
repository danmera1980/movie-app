import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import SearchBoar from '../components/SearchBar';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

export default function Dashboard({setAuth}) {
    const [results, setResults] = useState([
        {
            id: 1,
            title: "Batman Begins",
            type: "tv series",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: true
        },
        {
            id: 2,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 3,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 4,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 5,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 6,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 7,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        },
        {
            id: 8,
            title: "Batman Begins",
            type: "movie",
            poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            like: false
        }
    ])

    const [name, setName] = useState("");

    const getName = async ()=>{
        const headers = {
            headers: {'token': localStorage.token}
        }
        try {
            const response = await axios.get("http://localhost:3001/dashboard/", headers);
            setName(response.data.email)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getName();
    },[]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logged out successfully")
    }

    const findMovies = (e)=>{
        console.log(e.target.value);
    }

    
  return (
    <Fragment>
        <ToastContainer />
        <div className="dashboard">
            <div className="main">
                <Header name={name} logout={logout}/>
                <SearchBar findMovies={findMovies}/>
                <Results results={results}/>
            </div>
        </div>
    </Fragment>
  )
}
