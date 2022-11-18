import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

	const navigate = useNavigate();

return (
	<div className="view">
		<h1>TX Services Travel Guide</h1>
		<div className='logo'>
		<a href="https://jobs.txservices.rs/"><img alt='logo' src="./logo.png" height={'35rem'} width={'70rem'}/></a>
		</div>
        <button className="button" onClick={() => navigate("/forma")}>Form</button>
	</div>

);
};


export default Home;
