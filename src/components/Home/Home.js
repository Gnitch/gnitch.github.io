import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {SiGmail,SiLinkedin,SiGithub,SiKaggle,SiHackerrank} from 'react-icons/si';
import medium from '../../Assets/medium.png'
import './home.css'
import './home.scss'

function Home() {  
    return (
        <div className='home-container' id='home'>
            <p className='home-name'>
                Sujoy <br></br> Dcunha
            </p>
            <Grid container 
                  spacing={0}
                    // direction="column"
                    alignItems="center"
                    justifyContent="center"
                >                
                <Grid className='home-grid'  item md={1} xs={6}>   
                        <a className='home-link' href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sujoydcunha@gmail.com' target="_blank" rel='noreferrer'>
                            <SiGmail color={'F5F5F5'} fontSize={'2.5em'} /></a>
                </Grid>    
                <Grid className='home-grid'  item md={1} xs={6}>
                    <a className='home-link' href='https://www.linkedin.com/in/sujoy-dcunha/' target="_blank" rel='noreferrer'>
                        <SiLinkedin color={'#F5F5F5'} fontSize={'2.5em'} /></a>                                       
                </Grid>                                                                         
                <Grid className='home-grid'  item md={1} xs={6}>
                        <a className='home-link' href='https://github.com/Gnitch' target="_blank" rel='noreferrer'>
                            <SiGithub color={'#F5F5F5'} fontSize={'2.5em'} /> </a>
                </Grid>                                                         
                <Grid className='home-grid'  item md={1} xs={6}>
                    <a className='home-link' href='https://www.kaggle.com/gnitch' target="_blank" rel='noreferrer'>
                        <SiKaggle color={'#F5F5F5'} fontSize={'2.5em'} />  </a>
                </Grid>                                                         
                <Grid item md={1} xs={6}>
                    <a className='home-link' href='https://www.hackerrank.com/sujoydcunha' target="_blank" rel='noreferrer'>
                        <SiHackerrank color={'#F5F5F5'} fontSize={'2.5em'} />  </a>
                </Grid>   
                <Grid item md={1} xs={6}>
                    <a className='home-link' href='https://medium.com/@sujoydcunha' target="_blank" rel='noreferrer'>
                    <img src={medium} alt='avatar' width='60' height='65' className='home-avatar' />  </a>
                </Grid>                                                                                                                       
            </Grid>                       
        </div>
    )
}

export default Home
