import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
	  <div>
		<div className="NavBar">
		  <ul>
			
			<Link to="/home">
			  <li>Home</li>
			</Link>
  
		<div className="NavRight">
			<Link to="/signin">
			  <li>Sign In</li>
			</Link>
  
			<Link to="/register">
			  <li>Register</li>
			</Link>
		</div>
		  </ul>
		</div>
	  </div>
	);
  };


// {
// return (
// 	<>
// 	<Nav>
// 		<Bars />
// 		<NavMenu>
// 		<NavLink to='/signin' >
// 			Sign In
// 		</NavLink>
// 		<NavLink to='/register' >
// 			Register
// 		</NavLink>
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/home'>Home Page</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

export default Navbar;
