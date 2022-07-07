import React from 'react'
import Grid from '@material-ui/core/Grid';
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
                style={{ minHeight: '100vh' }}            
            >
                {/* <Grid className='grid-div' item md={6}> */}
                    
                {/* </Grid> */}
                <Grid className='grid-div' item md={6}>
                    <img src={avatar} alt='avatar' width='180' height='250' className='about-avatar' />
                    <p className='name' style={{'fontSize':'3em'}}>Sujoy D'cunha</p>
                    <p style={{'fontSize':'1.2em', 'fontWeight':'100'}}>sujoydcunha@gmail.com</p>
                    <p style={{'fontSize':'1.4em', 'fontWeight':'400'}} >Aspiring Software Developer | Deep Learning Enthusiast </p>
                    <p className='about-desc'>
                        Hi, I'm Sujoy Dcunha a computer science engineer from St. Francis Institute of Technology.
                        I build web apps and bots for Fun.
                        I'm Interested in Deep Learning.                        
                        I like to watch Anime and read Manga/Manhwa in my spare time.
                    </p>                
                </Grid>                  
            </Grid>            
        </div>
    )
}

export default About
