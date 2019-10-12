import React , {Component} from 'react';
import './MapBox.css';
import image00 from './map.jpg';


export default class MapBox extends Component{
    render(){
        return(
<div className='map-container'>
   <h1>Address : <br/></h1>
    <img className='map-img' src={image00} alt=""/>
</div>

        )
    }
}