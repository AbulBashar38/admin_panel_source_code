import React, { Component, useDebugValue, useEffect } from 'react';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Shared/Layout';
import Login from './components/Authentication/login';
import ForgotPassword from './components/Authentication/forgotpassword';
// import SignUp from './components/Authentication/signup';
// import ForgotPassword from './components/Authentication/forgotpassword';
// import NotFound from './components/Authentication/404';
// import Maintenance from './components/Authentication/maintenance';
import Dashboard from './components/Dashboard/dashboard';
// import UserList from "./components/Users/userList"

import { useSelector, useDispatch } from 'react-redux';

const cookies = new Cookies();

// http://142.11.216.247:3000/api/
// http://server.appsstaging.com:3041/api/
// mongodb://user_datejar:Technado%401234@server.appsstaging.com:27017/datejar?authSource=datejar&authMechanism=SCRAM-SHA-256

const Routing = () => {

	//const {token} = useSelector((state) => state.userReducer);	
	const token = cookies.get('token');
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => { 
		if (token) {
			dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: token }) 
			history.push('/dashboard');
		}
		else {
			history.push('/login');
		}

	}, [token])
	return (
		<Switch>
			{token?<> 
			<Route exact path="/">
				<Dashboard />
			</Route>
			<Route component={Layout}></Route>	
			</>:<>
			<Route path="/login">        
				<Login />           
			</Route>
			<Route path="/forgotpassword">
				<ForgotPassword />
			</Route>
			</>} 
		</Switch>
	)
}



function App() {

	const { settings } = useSelector((state) => state);

	const { themeColor, fontStyle, lightVersion, RtlVersion, offcanvas, miniSidebar, horizontalMenu, miniHover } = settings
	document.getElementsByTagName('body')[0].className = `${themeColor} ${fontStyle}${lightVersion ? ' light_version' : ''}${RtlVersion ? ' rtl' : ''}${offcanvas ? ' offcanvas-active' : ''}${horizontalMenu ? ' h-menu' : ''}${miniSidebar ? ' mini_sidebar' : ''}${miniHover ? ' mini_hover' : ''}`;
	return (
		<Router>
			<Routing />
		</Router>       
	);
}

export default App;