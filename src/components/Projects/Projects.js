import './Projects.css'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import {SiGithub, SiKaggle} from 'react-icons/si';
import { BiLink } from "react-icons/bi";
import {GoLinkExternal} from 'react-icons/go';

import projects from './projectData';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Projects() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      })); 

      const classes = useStyles();
    return (
        
        <div className={classes.root} id='projects'>  
         <Container maxWidth="lg">
         <Grid container spacing={5} >
                
                { projects.map((project,index) => (                    
                    <Grid item sm={4}>
                            <Card className="proj-card">
                                <CardContent>
                                    <p className='proj-title'>{project.title}</p>
                                    <p className='proj-stack'>{project.stack}</p>                                    
                                    <p className='proj-desc'>
                                    {project.desc}
                                    </p>                                   
                                </CardContent>
                                <CardActions>
                                <p style={{'textAlign':'left','marginLeft':'8px'}}>                                    
                                    <a href={project.github} className='proj-link' target="_blank" rel='noreferrer' style={project.github === null ? {'display':'none'} : {'':''}}>
                                    <SiGithub color={'black'} fontSize={'1.2em'} />
                                    </a>
                                    <a href={project.kaggle} className='proj-link' target="_blank" rel='noreferrer' style={project.kaggle === null ? {'display':'none'} : {'':''}}>
                                    <SiKaggle color={'black'} fontSize={'1.2em'} />
                                    </a>                                    
                                    <a href={project.link} className='proj-link' target="_blank" rel='noreferrer' style={project.link === null ? {'display':'none'} : {'':''}}>
                                        <BiLink color={'black'} fontSize={'1.5em'} />
                                    </a>
                                </p>                                 
                                </CardActions>
                            </Card>                                                   
                    </Grid>         

                        

                ))} 
                </Grid>                              

        </Container>
        </div>
    )
}

export default Projects





