import React from 'react'
import Grid from '@material-ui/core/Grid';
import {SiGithub} from 'react-icons/si';
import {GoLinkExternal} from 'react-icons/go';
import './Projects.css'
import projects from './projectData';

function Projects() {
    return (
        <div className='project-container' id='projects'>                  
                { projects.map((project,index) => (                    
                    <Grid container style={{'marginBottom':'50px'}}>
                        <Grid item md={6} className={'project-img'} >                            
                            <img src={project.image} alt={project.title} className='project-img' />
                        </Grid>
                        <Grid item md={6}>  
                            <h3 className='project-title'>{project.title}</h3>
                            <h5 className='project-desc'>
                                {project.desc}
                            </h5>
                            <p style={{'textAlign':'left'}}>
                            {project.stack.map((tech)=>(                                
                                <span className={'project-stack'} >
                                    {tech}                                    
                                </span>                                                                                                    
                            ))}
                            </p>
                            <p style={{'textAlign':'left'}}>
                                <a href={project.link} className='project-link' target="_blank" rel='noreferrer' style={project.link === null ? {'display':'none'} : {'':''}}>
                                    <GoLinkExternal color={'white'} fontSize={'1.5em'} />
                                </a>
                                <a href={project.github} target="_blank" rel='noreferrer' style={project.github === null ? {'display':'none'} : {'':''}}>
                                    <SiGithub color={'white'} fontSize={'1.5em'} />
                                </a>
                            </p>                            
                        </Grid>      
                    </Grid>                              
                ))}                          
        </div>
    )
}

export default Projects
