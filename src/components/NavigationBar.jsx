import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";


function NavigationBar() {
	return (
		<div className='topnav'>
			<Link to="">
				<GoHomeFill/>
			</Link>
			<Link to = {{
          pathname: "/portfolio",
          state: { showSegment: 1 }
        }} className="nav-item"><i>Portfolio</i></Link>
			<Link to ="/aboutMe" className="nav-item"><i>About me</i></Link>
			<Link to ="/contact" className="nav-item"><i>Contact</i></Link>
		</div>		
	);
}

export default NavigationBar;