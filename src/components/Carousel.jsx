import Carousel from 'react-bootstrap/Carousel'
import {useState} from "react"
import spotify from '../img/spotify.png'
import './Carousel.css'
import covid from '../img/data.png'


function CarouselControll() {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
        <div className='project_overview'>
            <Carousel>
                <Carousel.Item>
                <img
                    className="spotify"
                    src = {spotify}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3><b>Full-Stack Enginnering: Spotify Sharing Platform</b></h3>
                    <p>Built with React, Express, NodeJs, and MongoDB</p>
                </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                    className="covid"
                    src={covid}
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3><b>Data Analysis: Covid-19 Daily Cases Comparison and Analysis</b></h3>
                    <p>Conducted with Python standard data lib: NumPy, Pandas, matplotlib, and etc.</p>
                </Carousel.Caption>
                </Carousel.Item>


                {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item> */}

                
            </Carousel>
        </div>
   
)
}
  
export default CarouselControll