import React, {Component} from 'react';
import './ThanksBox.css';



export default class ThanksBox extends Component{
    render(){
        return(
            <div>
            <div className="thanks-container">
                <h1 className='thankz'>Thankz for Shopping Here</h1>
            </div>
             <div className="visit-container">
             <h1 className='visit'>Please visit Again And Again</h1>
         </div>
         </div>
        )
    }
}