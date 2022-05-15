import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from '../components/Welcome';
const backend_url = process.env.REACT_APP_BACKEND_URL

export default function Login({setAuth}) {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const {email, password} = inputs;

    const onChange = (e)=>{
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
    }

    const onSubmitForm = async (e)=>{
        e.preventDefault();
        try {
            const body = {email, password}
            const response = await axios.post(`${backend_url}/auth/login`, body)
            // console.log(response.data);
            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                toast.success("Login Successfully!");
                setAuth(true);
            } else {
                setAuth(false)
            }
        } catch (error) {
            toast.error(error.response.data)
            console.log(error);
        }
    }

  return (
    <Fragment>
        <div className="login-screen">
            <div className="login">
                <ToastContainer />
                <h1 className='text-center my-5'>Sign In</h1>
                <span>Sign in to your account</span>
                <div className="login-form">
                    <form onSubmit={onSubmitForm}>
                        <input className='form-control my-3' type="email" name='email' placeholder='E-mail' value={email} onChange={e => onChange(e)}/>
                        <input className='form-control my-3' type="password" name='password' value={password} onChange={e => onChange(e)}/>
                        <button className='btn btn-success btn-block'>Submit</button>
                    </form>
                </div>
                <span>Don't have an account? <Link to={"/register"}>Register here</Link></span>
            </div>
        </div>
    </Fragment>
  )
}
