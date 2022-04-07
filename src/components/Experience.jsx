import './Experience.css'

import {Timeline, Progress} from 'antd'
import {Card} from 'react-bootstrap'
import {CaretRightFilled} from '@ant-design/icons'
import bosSci from '../img/Boston_Scientific_Logo.png'
import Loreal from '../img/loreal.png'
import cachet from '../img/cachet.png'
import dsc from '../img/dsc.png'
import xmg from '../img/xmg.png'

function Experience(){
    return(
        
        <div className='experience'>
            <div className='exp_timeline'>
                {/* <Card> */}


                    <Timeline mode='alternate'>
                        <Timeline.Item>
                            <img className='smaller' src={dsc}/>
                            <div className='exp_title'><b>2021 Oct - 2022 March: Peer Mentor of Data Science Club @NYU</b></div>
                            <div className='exp_detail'>
                                <div><CaretRightFilled/> Mentoring two mentees about data analysis toolkits with Python </div>
                                <div><CaretRightFilled/> Technical support for datathons</div>

                            </div>
                        </Timeline.Item>


                        <Timeline.Item color='blue'>
                            <img src={Loreal}/>
                            <div className='exp_title'><b>2021 June - August: Enterprise Architect Intern</b></div>
                            <div className='exp_detail'>
                                <div><CaretRightFilled/> Engaged in <b>application portfolio management(APM)</b>, managed and visualized application inventory</div>
                                <div><CaretRightFilled/> Worked in a team of three to conduct <b>application scoring and analysis</b> of 106 apps and prepared rationalization roadmap planning for 56 apps</div>
                                <div><CaretRightFilled/> Co-worked with representatives from 12 domains to optimize APM inventory update process and improved data quality by 15%; established <b>APM inventory-update best practices</b> used by the whole department</div>
                                <div className='exp_progress'>
                                    <Progress type='circle' className="white-text" strokeColor={{'0%': '#108ee9', '100%':'#87d068'}} percent={56} width = {80} format={percent => `${percent} apps`}/>
                                    <Progress type='circle' className="white-text" strokeColor={{'0%': '#108ee9', '100%':'#87d068'}} percent={15} width={80} style={{color:'white'}}/>
                                    <Progress type='circle' className="white-text" strokeColor={{'0%': '#108ee9', '100%':'#87d068'}} percent={12} width = {80} format={percent => `${percent} domains`}/>

                                </div>
                            </div>

                        </Timeline.Item>


                        <Timeline.Item>
                            <img src={bosSci}/>
                            <div className='exp_title'><b>2021 April - May: Digital Solution Intern</b></div>
                            <div className='exp_detail'>
                                <div><CaretRightFilled/> Participated in the <b>omni-channel</b> project to digitalized sale platform, assisted in communication with third party vendors from Deloitte about the design and use of machine learning models</div>
                                <div><CaretRightFilled/> Operated an official WeChat account and a WeChat mini-program targeting medical professionals, help ing manage 23k existing users data </div>

                            </div>
                        </Timeline.Item>


                        <Timeline.Item>
                            <img src={cachet}/>
                            <div className='exp_title'><b>2021 Feb - April: Product Manager Intern</b></div>
                            <div className='exp_detail'>
                                <div><CaretRightFilled/> Identified product gaps, assessed and analyzed market and customer demands, prioritized user cases for a live streaming platform</div>
                            </div>
                        </Timeline.Item>

                        <Timeline.Item>
                            <img src={xmg}/>
                            <div className='exp_title'><b>2019 July - August: New Media Intern</b></div>
                            <div className='exp_detail'>
                                <div><CaretRightFilled/> Helped with editing of weather forecasting channel with <b>Adobe Premiere</b> and <b>Adobe After Effect</b> </div>

                                <div><CaretRightFilled/> Participated in filming of Xiamen-Taiwan water suuply documentary; shot 13G footage with Canon XA50 and DJI mavic pro </div>
                            </div>
                        </Timeline.Item>


                    </Timeline>

                {/* </Card> */}
            </div>
        </div>
    )
}

export default Experience