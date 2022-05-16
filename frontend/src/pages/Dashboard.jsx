import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { searchMovies } from '../redux/actions';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

export default function Dashboard({setAuth}) {
    const results = useSelector(state => state.store.movies);
    const dispatch = useDispatch();

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

    const findMovies = async (e)=>{
        await dispatch(searchMovies(e.target.value, localStorage.token))

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
