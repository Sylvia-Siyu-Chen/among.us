
import {useState} from 'react'
import { Button, Toast, Card, Container, Row, Col } from 'react-bootstrap';
import './FunFactCat.css'
import xiatian1 from '../img/xiatian1.jpeg'
import xiatian2 from '../img/xiatian2.JPG'
import xiatian3 from '../img/xiatian3.JPG'
import xiatian4 from '../img/xiatian4.jpeg'
import xiatianr1 from '../img/xiatian_racy1.JPG'
import xiatian5 from '../img/xiatian5.JPG'
import xiatian6 from '../img/xiatian6.jpg'
import xiatiang1 from '../img/xiatiang1.GIF'



function FunFactCat(){
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <div className='funfacts'>
            <div className='fun_cat'>
                <div className='fun_description'>
                her name is <span>夏天</span>(summer) <br/>
                I met her beside a trash bin in the middle of the hot summer of 2020 <br/>
                She was an eight-month-old stray cat with beautiful amber eyes and snow-white fur <br/>
                A vet said that she is a British shorthair yet my friend said she is not <br/>
                but I love her whatsoever
                    </div>
                    <div className='fun_card'>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{width : '18rem'}} bg="transparent">
                                        <Card.Img variant='top' src={xiatian1}/>
                                        <Card.Title className='title'>
                                           <b>June 18 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>Her first day in my place </div>
                                            <div> </div>

                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{width : '18rem'}} bg="transparent">
                                        <Card.Img variant='top' src={xiatian2}/>
                                        <Card.Title className='title'>
                                           <b>Dec 3 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>She was learning hashtable with me </div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{
                                        width : '18rem'
                                        }} bg="transparent">
                                        <Card.Img variant='top' src={xiatian3}/>
                                        <Card.Title className='title'>
                                           <b>July 18 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>A perfect couch catato!</div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                        <Card style={{width : '18rem'}} bg="transparent">
                                            <Card.Img variant='top' src={xiatian4}/>
                                            <Card.Title className='title'>
                                            <b>July 7 2021</b>
                                            </Card.Title>
                                            <Card.Text className='text'>
                                                <div>she was trying to take the pillow</div>
                                                <div className='del'>so she became my pillow lol</div>
                                            </Card.Text>
                                        </Card>
                                </Col>
                            </Row>

                            <Row>

                            <Col>
                                    <Card style={{width : '18rem'}} bg="transparent">
                                        <Card.Img variant='top' src={xiatianr1}/>
                                        <Card.Title className='title'>
                                           <b>Dec 18 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>looking at her snacks </div>
                                            <div> </div>

                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{width : '18rem'}} bg="transparent">
                                        <Card.Img variant='top' src={xiatiang1}/>
                                        <Card.Title className='title'>
                                           <b>Nov 24 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>KISS!! </div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{
                                        width : '18rem'
                                        }} bg="transparent">
                                        <Card.Img variant='top' src={xiatian5}/>
                                        <Card.Title className='title'>
                                           <b>August 18 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>gorgeous</div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                        <Card style={{width : '18rem'}} bg="transparent">
                                            <Card.Img variant='top' src={xiatian6}/>
                                            <Card.Title className='title'>
                                            <b>Dec 24 2020</b>
                                            </Card.Title>
                                            <Card.Text className='text'>
                                                <div>my christmas cutie</div>
                                                {/* <div><del>so she became my pillow lol</del></div> */}
                                            </Card.Text>
                                        </Card>
                                </Col>

                  


                            </Row>

                        </Container>

{/*                                                         
                        <Button variant='outline-light' onClick={toggleShow} className="show">click to see her <del><b>racy</b></del> photo</Button>

                            <Toast show={show} onClose={toggleShow}>
                                <Toast.Header className='me-auto'>
                                    <strong>Shhhhhh...   Don't tell her </strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <img src={xiatianr1} width={200}/>
                                </Toast.Body>
                            </Toast> */}

                    </div>


            </div>
        </div>
    )
}

export default FunFactCat