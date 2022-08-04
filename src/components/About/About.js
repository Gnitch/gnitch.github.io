import React from 'react'
import Grid from '@material-ui/core/Grid';
import {SiPython,SiJava,SiJavascript,SiReact,SiDjango, SiPytorch, SiDocker} from 'react-icons/si';
import './About.css'
import avatar from '../../Assets/uchiha.png'

function About() {
    return (
        <div className='about-container' id='about'>
            <Grid
                className='about-grid'
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
                <Grid className='grid-div' item md={6}>
                    <img src={avatar} alt='avatar' width='180' height='250' className='about-avatar' />
                    <p className='name' style={{'fontSize':'3em'}}>Sujoy D'cunha</p>
                    <p style={{'fontSize':'1.2em', 'fontWeight':'100'}}>sujoydcunha@gmail.com</p>
                    <p style={{'fontSize':'1.4em', 'fontWeight':'400'}} >Graduate Engineer Trainee at LTI - Larsen & Toubro Infotech</p>
                    <p className='about-desc'>
                        Hi, I'm Sujoy Dcunha a computer science engineer from St. Francis Institute of Technology.
                        I build web apps and bots for Fun.
                        I'm Interested in Software Development and Deep Learning.                        
                        I like to watch Anime and read Manga/Manhwa in my spare time.
                    </p>                
                </Grid>   
                <Grid
                container 
                spacing={0}
                alignItems="center"
                justifyContent="center">

            <Grid item md={1} xs={6}>                    
                    <SiPython  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>Python</p>
                </Grid>      
                <Grid item md={1} xs={6}>                    
                    <SiJava  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>Java</p>
                </Grid>  
                <Grid item md={1} xs={6}>                    
                    <SiJavascript  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>Javascript</p>
                </Grid>  
                <Grid item md={1} xs={6}>                    
                    <SiReact  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>React</p>
                </Grid>  
                <Grid item md={1} xs={6}>                    
                    <SiDjango  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>Django</p>
                </Grid>  
                <Grid item md={1} xs={6}>                    
                    <SiPytorch  color={'#F5F5F5'} fontSize={'4em'} />
                    <p className='icon-name'>Pytorch</p>
                </Grid>   
                <Grid item md={1} xs={6} >                    
                        <SiDocker color={'#F5F5F5'} fontSize={'4em'} />
                        <p className='icon-name'>Docker</p>                 
                </Grid>                                
                </Grid>                                                                                                                            
            </Grid>            

        </div>
    )
}

export default About
