import React, { useState } from "react";
import validation from './Validation';
import Styles from './Form.module.css';

let {myError} = Styles;

const Form = ({ login })=>{

    let [userData, setUserData] = useState({
        username: '',
        password: '' 
    });
    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    });

    let handleImputChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name] : e.target.value
            })
        );
    }
    let handleSubmit=()=>{
        login(userData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <img src="https://www.peakpx.com/en/hd-wallpaper-desktop-nyvhl"></img>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    placeholder="Tu Gmail" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleImputChange}
                    className={errors.username && myError }
                />
        
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    placeholder="Contraseña Secreta" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleImputChange}
                    className={errors.password && myError }
                />
        
                <button>Submit</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    alert('Enhorabuena iniciaste sesion')
                }} >Register</button>
            </form>
        </div>
    );
}

export default Form;