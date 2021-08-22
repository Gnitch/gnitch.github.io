import React from 'react'
import Grid from '@material-ui/core/Grid';
import './About.css'
import avatar from '../../Assets/avatar.jpg'

function About() {
    return (
        <div className='about-container' id='about'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}            
            >
                <Grid item md={6}>
                    <img src={avatar} alt='avatar' width='150' height='250' className='about-avatar' />
                </Grid>
                <Grid item md={6}>
                    <p style={{'fontSize':'3em'}}>Sujoy D'cunha</p>
                    <p style={{'fontSize':'1.2em'}} >Deep Learning Enthusiast | Full Stack Developer</p>
                    <p className='about-desc'>
                        Konnichiwa,I'm Sujoy Dcunha pursuing bachelor's in computer science engineering.
                        I build web apps and bots for Fun.
                        I'm Interested in Deep Learning.                        
                        I like to watch Anime and read Manga/Manhwa.
                    </p>                
                </Grid>                  
            </Grid>            
        </div>
    )
}

export default About
