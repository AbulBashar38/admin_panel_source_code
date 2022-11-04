import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { Link, NavLink } from 'react-router-dom';

import { setOffcanvas, setOffcanvas2 } from '../../actions/settingsAction';
import metisMenu from './metisMenu';
import DefaultLink from './DefaultLink';
import { Dropdown } from 'react-bootstrap';
import { setMiniSidebarMenuOn, setMiniHover } from '../../actions/settingsAction';
import { signout } from '../../actions/userAction';
import metisMenuCompany from './metisMenuCompany';
import Cookies from 'universal-cookie';
import Button from "@material-ui/core/Button";

const Menu = (props) => {
	const dispatch = useDispatch();
	const cookies = new Cookies();
	
	const { user } = useSelector((state) => state.userReducer);
	const { offcanvas } = useSelector((state) => state.settings);
	const [can, setCan] = useState(offcanvas)

	const getUser = cookies.get('userData');

	const [role, setRole] = useState(getUser.isAdmin == true ? getUser.isAdmin : "")

 console.log(user , "yeh data")
	const toggleSubMenu1 = (e) => {
		console.log(e, 'eeeee')
		// let menucClass = ''
		return "sdsdfszd";
	}
	console.log("Menu", offcanvas)

	const toggleSubMenu = (e) => {
		let menucClass = ''
		if (e.itemId) {
			const subClass = e.items.map((menuItem) => {
				if (menuItem.id === 'main' || menuItem.id === 'app' || menuItem.id === 'extra' || menuItem.id === 'ui') {
					menucClass = "header";
				}
				if (menuItem.to === props.location.pathname) {
					menucClass = "";
				} else {
					menucClass = "collapse";
				}
				return menucClass;
			})
			return subClass
			// return "collapse";
		} else {
			return e.visible ? "collapse" : "metismenu";
		}
	}

	const minisidebarMouseOver = () => {
		props.setMiniSidebarMenuOn(false);
		props.setMiniHover(true);
	}

	const minisidebarMouseOut = () => {
		props.setMiniSidebarMenuOn(true);
		props.setMiniHover(false);
	}

	const signoutHendler = () => {
		dispatch(signout())
	}

	const closeToggle = () => {
		setCan(false)
		dispatch(setOffcanvas2(can))
	}
	useEffect(() => {

	}, [])



	return (
		<>

			<div id="left-sidebar" className={`sidebar${props.miniSideMenuOn ? ' mini_sidebar_on' : ''}`}>
				<div className="navbar-brand">
					<Link to="/dashboard"><img src={require("../../assets/images/date-jar.png")} style={{ width: 100, height: 50 }} alt="Date Jar" className="img-fluid logo" /></Link>
					<button type="button" className="btn-toggle-offcanvas btn btn-sm float-right" onClick={closeToggle}><i className="lnr lnr-menu icon-close"></i></button>
				</div>
				<div className="sidebar-scroll">
					<div className="user-account d-flex ">
						<div className="user_div">
							{/* <img src="../assets/images/user.png" className="user-photo" alt="User Profile" /> */}
						</div>
						<div className="dropdown">
							<span>Welcome </span>
							<br />
							<Dropdown className="ml-0">
								<Dropdown.Toggle variant="success" id="dropdown-basic" className="user-name left_dropdown_btn">
									<strong>{(user ? user.name : '')}</strong>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									{/* <Link className="dropdown-item" to="/user-profile"><i className="icon-user"></i>My Profile</Link> */}
									{/* <Link className="dropdown-item" to="/app-inbox"><i className="icon-envelope-open"></i>Messages</Link>
										<Link className="dropdown-item" to="/"><i className="icon-settings"></i>Settings</Link> */}
									<li className="divider" />
									<Link className="dropdown-item" to="/login" onClick={signoutHendler}><i className="icon-power"></i>Logout</Link>
								</Dropdown.Menu>
							</Dropdown>
							<ul className="dropdown-menu dropdown-menu-right account vivify flipInY">

							</ul>
						</div>
					</div>
					<nav id="left-sidebar-nav" className="sidebar-nav">
						<MetisMenu
							//content={metisMenu}
							content={role == true ? metisMenu : metisMenuCompany}
							noBuiltInClassNames={true}
							classNameItemActive="active"
							classNameContainer={(e) => toggleSubMenu(e)}
							classNameContainerVisible="in"
							iconNamePrefix=""
							LinkComponent={(e) => <DefaultLink itemProps={e} />}
						/>

					</nav>

					<Button
						variant="contained"
						color="primary"
						className="btn_primary"
						
						style={{ margin: "5px", outline: "none", position: "fixed" }}
						onClick={() => {
							// window.scrollTo(0, 1000)
							window.scrollTo({ top: "0", behavior: "smooth" })
							window.scrollTo(0, document.body.scrollHeight);
						}}
					>
						Scroll Top To Bottom
					</Button><br /><br />
					<Button
						variant="contained"
						color="primary"
						className="btn_primary"
						style={{ margin: "5px", outline: "none", position: "fixed" }}
						onClick={() => {
							window.scrollTo({ top: "0", behavior: "smooth" })
						}}
					>
						Scroll Bottom To Top
					</Button>
				</div>
			</div>

		</>
	);
}

export default Menu