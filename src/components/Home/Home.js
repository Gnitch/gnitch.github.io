import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {SiGmail,SiLinkedin,SiGithub,SiKaggle,SiHackerrank} from 'react-icons/si';
import './home.css'
import './home.scss'

function Home() {  
    return (
        <div className='home-container' id='home'>
            <p class="home-name">
                <span>S</span>
                <span>U</span>
                <span>J</span>
                <span>O</span>
                <span>Y</span><br/>
                <span>D</span>
                <span>C</span>
                <span>U</span>
                <span>N</span>
                <span>H</span>
                <span>A</span>	
            </p>             
            <Grid container >                
                <Grid item md={1} xs={6}>   
                    <Box mb={5} >
                        <a className='home-link' href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sujoydcunha@gmail.com' target="_blank" rel='noreferrer'>
                            <SiGmail color={'#9E9E9E'} fontSize={'2.5em'} /></a>
                    </Box>                                                     
                </Grid>    
                <Grid item md={1} xs={6}>
                    <a className='home-link' href='https://www.linkedin.com/in/sujoy-dcunha/' target="_blank" rel='noreferrer'>
                        <SiLinkedin color={'#9E9E9E'} fontSize={'2.5em'} /></a>                                       
                </Grid>                                                                         
                <Grid item md={1} xs={6}>
                    <Box mb={5} >
                        <a className='home-link' href='https://github.com/Gnitch' target="_blank" rel='noreferrer'>
                            <SiGithub color={'#9E9E9E'} fontSize={'2.5em'} /> </a>
                    </Box>                  
                </Grid>                                                         
                <Grid item md={1} xs={6}>
                    <a className='home-link' href='https://www.kaggle.com/gnitch' target="_blank" rel='noreferrer'>
                        <SiKaggle color={'#9E9E9E'} fontSize={'2.5em'} />  </a>
                </Grid>                                                         
                <Grid item md={1} xs={12}>
                    <a className='home-link' href='https://www.hackerrank.com/sujoydcunha' target="_blank" rel='noreferrer'>
                        <SiHackerrank color={'#9E9E9E'} fontSize={'2.5em'} />  </a>
                </Grid>                                                                                                         
            </Grid>                       
        </div>
    )
}

export default Home
