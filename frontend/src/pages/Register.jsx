import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backend_url = process.env.REACT_APP_BACKEND_URL

export default function Register({setAuth}) {

    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const {name, username, email, password} = inputs;

    const onChange = (e)=>{
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
    }

    const onSubmitForm = async (e)=>{
        e.preventDefault();
        try {
            const body = {name, username, email, password}
            const response = await axios.post(`${backend_url}/auth/register`, body)
            // console.log(response.data);

            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                toast.success("Successfully Registered")
                setAuth(true);
                
            }
        } catch (error) {
            toast.error(error.response.data)
            console.log(error.message);
        }
    }

  return (
    <Fragment>
        <div className="login-screen">
            <div className="login">
                <ToastContainer />
                <h1 className='text-center my-5'>Register</h1>
                <span>Create a new account to use our platform</span>
                <div className="login-form">
                    <form onSubmit={onSubmitForm}>
                        <input className='form-control my-3' type="name" name='name' placeholder='Name' value={name} onChange={e => onChange(e)}/>
                        <input className='form-control my-3' type="email" name='email' placeholder='E-mail' value={email} onChange={e => onChange(e)}/>
                        <input className='form-control my-3' type="password" name='password' value={password} onChange={e => onChange(e)}/>
                        <button className='btn btn-success btn-block'>Submit</button>
                    </form>
                </div>
                <span>Already have an account? <Link to={"/login"}>Sign in here</Link></span>
            </div>
        </div>
    </Fragment>
  )
}
