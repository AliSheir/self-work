import React, {Component} from 'react';
import './Footer.css';
import {Icon} from 'antd';




export default class Footer extends Component{
    render(){
        return(
            <div className='footers-container'>
                <div className="foot1">
                   <div style={{marginLeft:'20px'}}>Terms of Service</div>
                    <div style={{marginLeft:'20px'}}> Privacy Policy</div>
                </div>
                <div className='foot2'>
                    <h1>Follow Us On</h1> 
                    <Icon className='margin' type="twitter" />
                    <Icon className='margin'   type="facebook" />
                    <Icon className='margin'  type="instagram" />
                </div>
            </div>
        )
    }
}