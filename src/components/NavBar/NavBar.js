import React, {useState, useEffect, useRef} from 'react'
import { Link} from "react-router-dom";
import { Navbar, Container, Nav, Image} from "react-bootstrap"
import './NavBar.css'
import home from '../../Assets/home.png'
import projects from '../../Assets/projects.png'
import user from '../../Assets/user.png'

function NavBar() {
	const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

	return (
		<div>
			<Navbar expand="md" fixed="top" style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'transparent'}}>
			<Container>
				<Navbar.Toggle className='text-light' aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className='text-light' id="basic-navbar-nav">
				<Nav className="justify-content-start">
					<Nav.Item>				
						<Link to='/' className='nav-link'>
							<Image className= 'icon-home' src={home} /> Home
						</Link>
					</Nav.Item>
					<Nav.Item>									
						<Link to='/projects' className='nav-link'>
							<Image className= 'icon-nav' src={projects} />
							Projects
						</Link>
					</Nav.Item>
					<Nav.Item>				
						<Link to='/about' className='nav-link'>
							<Image className= 'icon-nav' src={user} />
							About
						</Link>	
					</Nav.Item>				
				</Nav>				
				</Navbar.Collapse>
			</Container>
			</Navbar>			
		 </div> 
	)
}

export default NavBar
