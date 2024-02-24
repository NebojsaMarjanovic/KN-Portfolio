import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";


function NavigationBar() {
	return (
		<div className='topnav'>
			<Link to="KN-Portfolio/">
				<GoHomeFill/>
			</Link>
			<Link to = {{
          pathname: "KN-Portfolio/portfolio",
          state: { showSegment: 1 }
        }} className="nav-item"><i>Portfolio</i></Link>
			<Link to ="KN-Portfolio/aboutMe" className="nav-item"><i>About me</i></Link>
			<Link to ="KN-Portfolio/contact" className="nav-item"><i>Contact</i></Link>
		</div>		
	);
}

export default NavigationBar;