import { Card } from 'antd';
import React,{Component} from 'react';
import './GentsBrand.css';
import pic1  from './picss/jean1.jpg';
import pic2 from './picss/jean2.jpg';
import pic3  from './picss/jean3.jpg';
import pic4  from './picss/gla1.jpg';
import pic5  from './picss/gla2.jpg';
import pic6  from './picss/gla3.jpg';
import pic7 from './picss/wa1.jpg';
import pic8  from './picss/wa2.jpg';
import pic9  from './picss/wa3.jpg';
import pic10 from './picss/sho1.jpg';
import pic11  from './picss/sho2.jpg';
import pic12  from './picss/sho3.jpg';


const { Meta } = Card;


export default class GentsBrand extends Component{
    render(){
        return( 
            <div className='card-container'>
                <div className='card-container-div'>
                    <div className='card-div1'>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic1} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic2} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
            
            
          </Card >

          <Card 
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic3} />}
            className='card3'
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          </div>
          <div  className='for-more-btn-div'>
              <button className='for-more-btn'>
                  <h3>For More</h3>
                  </button>
          </div>
          </div>



          <div className='card-container-div'>
          <div className='card-div1'>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic4} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic5} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic6} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here " />
          </Card>
          </div>
          <div  className='for-more-btn-div'>
              <button className='for-more-btn'><h3>For More</h3></button>
          </div>
          </div>


          <div className='card-container-div'>
          <div className='card-div1'>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic7} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic8} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic9} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          </div>
          <div  className='for-more-btn-div'>
              <button className='for-more-btn'><h3>For More</h3></button>
          </div>
          </div>


          <div className='card-container-div'>
          <div className='card-div1'>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic10} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic11} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='img' alt="example" src={pic12} />}
          >
            <Meta title="On Sale Price RS-999/." description="Every Size,Brand Available Here" />
          </Card>
          </div>
          <div  className='for-more-btn-div'>
              <button className='for-more-btn'><h3>For More</h3></button>
          </div>
          </div>

          </div>
        )
    }
}

