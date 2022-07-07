import './NavBar.css'
import uchiha from '../../Assets/uchiha.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className='nav-wid' style={{background: 'black',boxShadow: 'none'}} >
        <Toolbar>
		<Typography align='left' variant="h5" className={classes.title}>
			<a className='navbar-link' href='#home' rel='noreferrer'> 				
			<img src={uchiha} alt='avatar' width='30' height='35' className='avatar' />
			<span className='brand'>Sujoy Dcunha</span>  </a>
          </Typography>	
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
            <MenuIcon />
          </IconButton>	
		  <Menu
        		id="simple-menu"
        		anchorEl={anchorEl}
        		keepMounted
        		open={Boolean(anchorEl)}
        		onClose={handleClose}>
        	<MenuItem onClick={handleClose}>
				<a className='navbar-link' href='#home' rel='noreferrer'>
				Home</a>
			</MenuItem>
        	<MenuItem onClick={handleClose}>
				<a className='navbar-link' href='#projects' rel='noreferrer'>
				Projects</a>
			</MenuItem>
        	<MenuItem onClick={handleClose}>
				<a className='navbar-link' href='#about' rel='noreferrer'>
				About</a>
			</MenuItem>
      	</Menu>		  	  	  
          {/* <Button color="inherit">
		  	<a className='navbar-link' href='#home' rel='noreferrer'>
 			Home</a>
		  </Button>
          <Button color="inherit">
		  	<a className='navbar-link' href='#projects' rel='noreferrer'>
			Projects</a>
		  </Button>		  		  
          <Button color="inherit">
		  	<a className='navbar-link' href='#about' rel='noreferrer'>
			About</a>
		  </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
