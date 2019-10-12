import React, {Component} from 'react';
import './SignIn.css';



export default class SignIn extends Component{
    
    render(){
        return(
            <div className="sign-container">
                <div className='field-container'>
                <input className='signin' type="text"  placeholder='type your name ' /> <br/>

                <input className='signin' type="password" placeholder='type your password'/> <br/>
               <button className='signin forgoten-btn'> <i> Forgotten Password </i></button> 
               <button className='signin-btn'>  Sign in</button>
                </div>
            </div>
        )
    }
}