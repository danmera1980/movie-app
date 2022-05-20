import React from 'react';
import {GoSignOut} from 'react-icons/go';
import logoImg from '../assets/images/tv.png'

export default function Header({name, logout}) {
  return (
    <div className='header'>
        <div className='logo'><img src={logoImg} alt="logoImage" /> MovieBox</div>
        <div className="logged">
            <div className="user">{name}</div>
            <button className='btn btn-primary' onClick={e => logout(e)}>
                <GoSignOut/>
            </button>
        </div>
    </div>
  )
}
