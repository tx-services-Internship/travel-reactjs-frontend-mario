import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/buttonComponent/buttonComponent';
import View from '../components/viewComponent/viewComponent';

const Home = () => {
	const navigate = useNavigate();
	const buttonStyles = ['homeScreen', 'formScreen', 'signupScreen']
	return (
	<View>
		<h1>TX Services Travel Guide</h1>
		<div className='logo'>
		<a href="https://jobs.txservices.rs/"><img alt='logo' src="./logo.png" height={'30rem'} width={'60rem'}/></a>
		</div>
        <Button className={`base ${buttonStyles[0]}`}
		onClick={() => navigate('/form')}>Form</Button>
	</View>

)
};


export default Home;
