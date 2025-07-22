import { Link } from "react-router";
import "./Header.css";

function Header() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
