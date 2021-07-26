import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './About.css'
import gmail from '../../Assets/gmail.png'
import github from '../../Assets/github.png'
import hackerrank from '../../Assets/hackerrank.png'
import kaggle from '../../Assets/kaggle.png'
import linkedin from '../../Assets/linkedin.png'
import me from '../../Assets/Me.jpg'

function About() {
    return (
        <div className='about-container'>
            <Container fluid>
                <div className='contact-box'>
                    <Row className='me-box'>
                        <Col>
                            <div>
                                <Image id='me' src={me} thumbnail />
                            </div>                            
                        </Col>
                        <Col className='name text-center'>                         
                            Sujoy Patrick Dcunha
                            <br/>
                            <span>
                                <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sujoydcunha@gmail.com' target="_blank" rel='noreferrer'><Image className= 'icon pad' src={gmail} /></a>
                                <a href='https://github.com/Gnitch' target="_blank" rel='noreferrer'><Image className= 'icon pad' src={github} /></a>
                                <a href='https://www.linkedin.com/in/sujoy-dcunha/' target="_blank" rel='noreferrer'><Image className= 'icon pad' src={linkedin} /></a>
                                <a href='https://www.hackerrank.com/sujoydcunha' target="_blank" rel='noreferrer'><Image className= 'icon' src={hackerrank} /></a>                                                                                                     
                                <a href='https://www.kaggle.com/gnitch' target="_blank" rel='noreferrer'><Image className= 'icon' src={kaggle} /></a>         
                            </span>                                                            
                        </Col>
                    </Row>
                    <Row>
                        <p className='text-center desc h6 text-light'>
                            👋 Konnichiwa,Im Sujoy Dcunha pursuing bachelor's in computer science engineering.<br/>
                            ⚡ I build web apps and bots for Fun. <br/>
                            🖥️ Interested in Deep Learning. <br/>
                            🖥️ Currently Learning GANS <br/>
                            🌸 I like to watch Anime and read Manga/Manhwa <br/>
                        </p>
                    </Row>
                    <Row>
                        <p className='h3 text-light mt-5'>
                            Programming Languages
                        </p>
                        <div className='text-center'>
                            <Image className= 'bdg' src='https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/php-%23777BB4.svg?&style=for-the-badge&logo=php&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' />                    
                        </div> 
                    </Row>         
                    <Row>
                        <p className='h3 text-light mt-5'>
                            Frameworks
                        </p>
                        <div className='text-center'>
                            <Image className= 'bdg' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' />                                                 
                            <Image className= 'bdg' src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white' />
                        </div> 
                    </Row>   
                    <Row>
                        <p className='h3 text-light mt-5'>
                            Libraries
                        </p>
                        <div className='text-center'>
                            <Image className= 'bdg' src='https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white' />                     
                        </div> 
                    </Row>     
                    <Row>
                        <p className='h3 text-light mt-5'>
                            Technologies
                        </p>
                        <div className='text-center'>
                            <Image className= 'bdg' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/replit-667881?style=for-the-badge&logo=replit&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' />                                                                                                         
                            <Image className= 'bdg' src='https://img.shields.io/badge/conda-342B029.svg?&style=for-the-badge&logo=anaconda&logoColor=white' />                                                                             
                            <Image className= 'bdg' src='https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white' />                                                                             
                            <Image className= 'bdg' src='https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' />  
                            <Image className= 'bdg' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' />  
                            <Image className= 'bdg' src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white' />                              
                            <Image className= 'bdg' src='https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white' />  
                            <Image className= 'bdg' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' />  
                            <Image className= 'bdg' src='https://img.shields.io/badge/OpenGL-FFFFFF?style=for-the-badge&logo=opengl' />  
                        </div> 
                    </Row>                     
                    <Row>
                        <p className='h3 text-light mt-5'>
                        Tools
                        </p>
                        <div className='text-center'>
                            <Image className= 'bdg' src='https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' />
                            <Image className= 'bdg' src='https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white' />                     
                            <Image className= 'bdg' src='https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252' />                    
                        </div> 
                    </Row>  
                </div>
            </Container>
        </div>
    )
}

export default About
