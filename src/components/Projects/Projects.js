import React from 'react'
import { Container, Row, Card, Col, Image } from 'react-bootstrap'
import './Projects.css'
import github from '../../Assets/github-dark.png'
import link from '../../Assets/link.png'
import star from '../../Assets/star.png'

function Projects() {
    return (
        <div className='project-container'>
            <Container>
                <p className='display-2 title text-light text-center'>
                    Projects
                </p>
                <Row className='mx-auto'>
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Enhancing Anime Faces with SRGAN</Card.Title>
                            <Card.Text className='text-start'>
                                GAN’s based deep learning model for increasing the resolution of images.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <Image className= 'icon' src={star} />
                                <a href='https://www.kaggle.com/gnitch/enhancing-anime-faces-with-srgan' target="_blank" rel='noreferrer'><Image className= 'icon' src={link} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>   
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Hitagi-chan (Discord Bot)
                            </Card.Title>
                            <Card.Text className='text-start'>
                                This bot can search and recommend anime/manga.
                                It gives a daily schedule of anime.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <Image className= 'icon' src={star} />
                                <a href='https://github.com/Gnitch/Hitagi-chan' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                                <a href='https://top.gg/bot/800964718155005952' target="_blank" rel='noreferrer'><Image className= 'icon' src={link} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col> 
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Anime Face Generation with DCGAN</Card.Title>
                            <Card.Text className='text-start'>
                                GAN’s based deep learning model for generating anime face images.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <Image className= 'icon' src={star} />
                                <a href='https://www.kaggle.com/gnitch/animefacegeneration-dcgan' target="_blank" rel='noreferrer'><Image className= 'icon' src={link} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col> 
                    <Col className='mx-auto' sm>
                        <Card  style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Covid-19 Tracker</Card.Title>
                            <Card.Text className='text-start'>
                                This web app displays covid-19 cases, deaths and recoveries of all the countries.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <Image className= 'icon' src={star} />
                                <a href='https://github.com/Gnitch/Covid-19-Tracker' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                                <a href='https://gnitch.github.io/Covid-19-Tracker/' target="_blank" rel='noreferrer'><Image className= 'icon' src={link} /></a>                                
                            </Card.Header>                        
                        </Card>                           
                    </Col>     
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Styling Anime Face</Card.Title>
                            <Card.Text className='text-start'>
                                Styling Anime Face Using Neural Style Transfer
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <Image className= 'icon' src={star} />
                                <a href='https://www.kaggle.com/gnitch/styling-anime-face' target="_blank" rel='noreferrer'><Image className= 'icon' src={link} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>                    
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Flight management system</Card.Title>
                            <Card.Text className='text-start'>
                                This is mini project of semester 5.This is done using PHP.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/Gnitch/Flight_Mangament_System' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>  
                    <Col className='mx-auto' sm>
                        <Card  style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Braniac</Card.Title>
                            <Card.Text className='text-start'>
                                A Django based Quizing and polling web app for schools and colleges
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/Gnitch/Brainiac' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>                     
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Blogs</Card.Title>
                            <Card.Text className='text-start'>
                                Django based web-app for posting Blogs.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/Gnitch/Blogs' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>  
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Anime-List</Card.Title>
                            <Card.Text className='text-start'>
                                A django based web-app to keep a list of anime.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/Gnitch/Anime-List' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>  
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-4'>Amazon-Scraper</Card.Title>
                            <Card.Text className='text-start'>
                            GUI to keep track of prices of products from Amazon.
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/Gnitch/Amazon-scrapper' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>                      
                    <Col className='mx-auto' sm>
                        <Card style={{ width: '18rem' }}>                        
                            <Card.Body>
                            <Card.Title className='mb-3'>Exam marks confirmation</Card.Title>
                            <Card.Text className='text-start'>
                                Semester 3 java mini project which allows students to fill their internal exam marks themselves
                            </Card.Text>
                            </Card.Body>
                            <Card.Header>
                                <a href='https://github.com/alandsilva26/Java-Project-Sem-3' target="_blank" rel='noreferrer'><Image className= 'icon' src={github} /></a>
                            </Card.Header>                        
                        </Card>                           
                    </Col>                                                                                                                                                    
                </Row>
            </Container>
        </div>
    )
}

export default Projects
