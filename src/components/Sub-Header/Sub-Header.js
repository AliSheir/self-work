import React , {Component} from 'react';
import './Sub-Header.css';
import {Link} from 'react-router-dom';



export default class SubHeader extends Component{
    render(){
        return(
            <div className="SubHeader-container">
                <Link className='header-links' to='App'> Home</Link>
                <Link className='header-links' to='GentsBrand'> Gents Brand</Link>
                <Link className='header-links' to='LadiesBrand'> Ladies Brand</Link>
                <Link className='header-links' to='ChildsBrand'> Childs Brand</Link>
            </div>
        
        )
    }
}