import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navbar';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/signin' >
			Sign In
		</NavLink>
		<NavLink to='/register' >
			Register
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/home'>Home Page</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
