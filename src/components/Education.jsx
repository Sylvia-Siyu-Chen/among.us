import './Education.css'
// import {card} from 'react-bootstrap'
import nyuimg from '../img/nyu2.png'
import nyuname from '../img/nyu.png'
// import Paper from '@mui/material/Paper'
// import Stack from '@mui/material/Stack'
// import {styled} from '@mui/material/styles'
import { Collapse } from 'antd'
import {Container,Col, Row} from 'react-bootstrap'
// import { blue } from '@mui/material/colors'

function Education(){

    const {Panel} = Collapse;

    return (
        <div className="education">
            <Container>
                <Row>
                    <Col>
                        <div className='edu_img'>
                            <p><a href='https://www.nyu.edu/'><img src={nyuimg} width={400}/></a></p>
                        </div>
                    </Col>
                    <Col id='edu_right'>
                    <div className="edu_text"><a href='https://www.nyu.edu/'><img src = {nyuname} width = {800}/></a>
                        
                        <h3><b>B.A. in <b>Computer Science</b>
                         Minor in Mathmatics and Business Studies</b></h3>
                        <div className='courses'>
                    <Collapse defaultActiveKey={[0,1]} ghost>
                        <Panel header='Computer Science relevant coursework'id='header' >
                        <div><b>Software Engineering</b>   (MERN stack development)</div>
                        <div><b>Applied Internet Technologies</b>  (full-stack web development)</div>
                        <div><b>Object-Oriented Programming</b>  (Java and C++)</div>
                        <div><b>Artificial Intelligence</b>  (with focus on representation and reasoning, ML, and NLP)</div>
                        <div><b>Natural Lnaguage Processing</b>  (computational linguisitcs)</div>
                        <div><b>Operating Systems</b>   (virtualization, concurrency, and persistence)</div>
                        <div><b>Algorithms</b> (sorting, recurrence equations, binary search, partition, graphs, trees, connectivity, DFS and BFS, dynamic programming )</div>
                        <div><b>Data Management and Analysis</b>   (extracting, transforming and analyzing data)</div>
                        <div><b>Computer System Organization</b>   (architecture of modern computer system)</div>
                        <div><b>Calculus, Linear algebra, and Discrete Math</b></div>
                        </Panel>

                                <Panel header='Business Studies relevant coursework'>
                                <div className='courses'>
                                    <div><b>Statistics for Business Control and Regression Model</b>  (Descriptive statstics, inferential statistics, linear regression</div>
                                        <div><b>Principles of Financial Accounting</b>  (Analysis of Financial Statements))</div>
                                        <div><b>Information Technology in Business and Society</b>  (CRM, ERP, SCM, and e-Business)</div>
                                        <div><b>Macroeconomics and Microeconomics with Calculus</b></div>
                                    </div>
                                </Panel>
                            </Collapse>

                        </div>

                    </div>

                    </Col>
                </Row>
            </Container>
           
          
        </div>
    )
}

export default Education