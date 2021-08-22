import React from 'react'
import './NavBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {MdHome} from 'react-icons/md';
import {MdLibraryBooks} from 'react-icons/md';
import {BiUserPin} from 'react-icons/bi';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
	fontSize: "1.5em",
	color: "#9E9E9E",
	fontWeight: "800",
  },
}));

function NavBar() {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="fixed" style={{background: 'black',boxShadow: 'none'}} >
				<Toolbar>
				<Typography className={classes.title}>
					<span className={'navbar-span'}>
						<a className='navbar-link' href='#home' rel='noreferrer'>
							<MdHome color={'#9E9E9E'} size={'0.4em'} fontSize={'2.9em'} />Home</a>
					</span>
					<span className={'navbar-span'}>
						<a className='navbar-link' href='#projects' rel='noreferrer'>
							<MdLibraryBooks color={'#9E9E9E'} size={'0.4em'} fontSize={'2.5em'} />Projects</a>
					</span>
					<span>
						<a className='navbar-link' href='#about' rel='noreferrer'>
							<BiUserPin color={'#9E9E9E'} size={'0.4em'} fontSize={'3em'} />About</a>
					</span>																								
				</Typography>				
				</Toolbar>
			</AppBar>		
		 </div> 
	)
}

export default NavBar
