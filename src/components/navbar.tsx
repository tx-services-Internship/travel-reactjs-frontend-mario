import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #06da91;
font-family: 'Source Sans Pro', sans-serif;
height: 3rem;
font-size: 1em;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
&.active {
	color: #ffffff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #ffffff;
@media screen and (max-width: 10%) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 100%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: 5%;
margin-right: 5%;
width: 100vw;
white-space: nowrap;
@media screen and (max-width: 10%) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 10%;
justify-content: flex-end;
width: 100vw;
@media screen and (max-width: 10%) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 8px;
background: #06da91;
padding: 0.3rem 0.9rem;
color: #ffffff;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
margin-left: 10%;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #808080;
	color: #ffffff;
}
`;
