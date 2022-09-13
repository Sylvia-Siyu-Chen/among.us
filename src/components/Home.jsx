import './Home.css'
// import Sylvia from '../img/Sylvia.JPG'
// import CarouselControll from './Carousel'
// import signiture from '../img/signiture1.png'
import { Container, Row, Col } from 'react-bootstrap'
import  React ,{useEffect, useContext} from 'react'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import insta from '../img/insta.png'
// import Background from './Background'
// import { BackgroundImage } from '@mantine/core'
// import Particles from "react-tsparticles";




// import StarfieldAnimation from 'react-starfield-animation'


const Home = () => {


    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };



    return(

 

        <div className="intro">
            <Container>
                <Row>
                    <Col>
                        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js">     </script>

                            <div className="noselect" > 
                                <div className='intro_text' >
                                    <script src="./HomeScript.js"></script> 
                                    <script src="https://cdn.blobity.dev/by.js?licenseKey=..."></script>
                                    <script
                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                                    crossorigin="anonymous"
                                    ></script>
                                    <script src="/_next/static/chunks/pages/about-a088af18cf8dc5a5.js"></script>


                                <div class="text-container">
                                    <div className='bold'>
                                        <h1 class="bold">Hey, it's Sylvia</h1>
                                        <h1 class="content">an atypical sde @Amazon AWS</h1>
                                        <h1 class="content">former student @ NYU</h1>
                                        <h1 class="content">
                                        who writes code,</h1>
                                        <h1 class="content"> takes photos,</h1>
                                        <h1 class="content">and reads Albert Camus</h1>
                                        <h1 className="content-small">
                                        and welcomes bribes in the form of a Kodak 35mm roll films 
                                        </h1>
                                        <div className='logo'>
                                            <a href='https://github.com/Sylvia-Siyu-Chen'>
                                                <img src={github} className="github" sizes={50}/>
                                            </a>

                                            <a href="https://www.linkedin.com/in/sylvia-siyu-chen-9438361b4/">
                                            <img src={linkedin} className="linkedin" />
                                            </a>

                                            <a href='https://www.instagram.com/thesylv9/'>
                                            <img src={insta} className="insta" />
                                            </a>
                                        </div>

                                        <br />
                                        <a
                                        href="https://github.com/sylvia-siyu-chen"
                                        target="_blank"
                                        data-blobity-offset-y="12"
                                        data-blobity-radius="10"
                                        ><i class="bi bi-github my-icon"></i
                                        ></a>
                                        </div>
 
                                        
                                        </div>
                                            

                                    <a></a>
                                </div>


                                        
                            </div>  
                    </Col>
{/* 
                    <Col className='nav'>
                        <a href="/"><div>Home</div></a><br/>
                        <a href="/education"><div>Education</div></a>
                        <a href="/project"><div>Project</div></a>
                        <a href="/experience"><div>Experience</div></a>
                        <a href="/foto"><div>Foto Portfolio</div></a>
                        <a href="/fun"><div>Fun Facts</div></a>
                    </Col> */}
                </Row>
            </Container>

             

            <div className='intro-project'>
                 {/* <CarouselControll/> */}
            </div>


         

        </div>

    )
}


export default Home