import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";
import sierraLogo from './images/sierraLogo.png';

function Headers() {
	return (
		<nav className="nav">
			<Link to="/" className="site-tite"> 
				<img style={{width:200, height:100}} src={sierraLogo} alt="logo"/> 
			</Link>
			<ul>
				<CustomLink to="/userInfo">User Information</CustomLink>
				<CustomLink to="/resumetable">Resume Table</CustomLink>
				
			</ul>
		</nav>

	);
}
function CustomLink({to, children, ...props}) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({path: resolvedPath.pathname, end: true})
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default Headers;