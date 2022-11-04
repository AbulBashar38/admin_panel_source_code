
import React, { useEffect, useState, useReducer } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	adminApproval, userlist, users__Delete, blockUser, UnblockUser,
	userListAndroid,
	userListIos,
	userListSubscribed,
	userListUnsubscribed,
	condBaseUsers,
	purchaseUsersList


} from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
///////////////////////////////////////
import {
	TOGGLE
} from "../../constents/constents";
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from "@material-ui/core/Button";
import AsyncCSV from './CSVfile';   ////  import code file
import ReactExport from 'react-data-export';
////////////////////////////////////////////
import {
	userReducer,
	initState
} from "../../reducers/userReducer";
import TableSingleRow from './tableSingleRow';
import FilterUser from './FilterUsers';
import { filter } from 'lodash';
import Moment from 'react-moment';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);


// const useStyles = makeStyles({
// 	table: {
// 		minWidth: 700,
// 	},
// });

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowY: "auto",
		textAlign: "center",
		// height: '100vh'
	},
	container: {
		maxHeight: 700,
	},
});

//////////////////
const UserList = () => {


	const [page, setPage] = React.useState(0);
	// const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [rowsPerPage, setRowsPerPage] = React.useState(50);
	// const [is_member, setIs_member] = useState(false);
	const [block, setBlock] = useState(false);
	const [toggleUSer, setToggleUSer] = useState("");
	const [isToggledOn, setToggle] = useState(false);
	const [isToggledOns, setToggles] = useState(false);
	const [isToggledOnss, setToggless] = useState(false);
	const [msg, setMsg] = useState("Total No OF Users:");
	const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers, androidLISTUsers, iosLISTUsers,
		SubLISTUsers, UnSubLISTUsers, filterUsers, purchaseUsers
	} = useSelector((state) => state.userReducer);


	const [Androidusers, setMyUsers] = useState("");
	const [iosUsers, setIosUsers] = useState("");
	const [subUsers, setSubUsers] = useState("");
	const [unsubUsers, setUnsubUsers] = useState("");
	// const [index, setIndex] = useState();
	const [allUsers, setAllUsers] = useState([]);
	// const [allUsers, setAllUsers] = useState(filterUsers ? filterUsers : "");






	const [state, dispatchs] = useReducer(userReducer, initState);

	const { isEdit } = state;



	const [tablebody, setTableBody] = useState([]);

	const dispatch = useDispatch();


	useEffect(() => {
		// dispatch(userlist());
		dispatch(condBaseUsers())
		dispatch(purchaseUsersList())

	}, []);

	// useEffect(() => {

	// 	if (filterUsers) {

	// 		setAllUsers(filterUsers)

	// 	}

	// }, [filterUsers]);


	// console.log("filterUsers:", filterUsers);
	// console.log("allUsers:", allUsers);
	// console.log("purchaseUsers:", purchaseUsers);





	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};


	const classes = useStyles();



	const update = (event) => {
		// setToggleUSer(event.target.value)
		// dispatch(condBaseUsers(event.target.value))

		if (event.target.value === "all") {
			// dispatch(condBaseUsers())
			window.location.reload([false])
		} else {
			dispatch(condBaseUsers(event.target.value))
		}

	}


	// receipt: "as"

	// const filetrUsersFUN = (val) => {
	// 	// console.log("am ruuning", val);
	// 	// const value = {}
	// 	dispatch(condBaseUsers(val))
	// 	// dispatch(condBaseUsers())
	// }


	// const filterUSers = () => {

	// 	dispatch(condBaseUsers())



	// };


	// console.log("filterUsers?.data.length", filterUsers?.data.length);


	return <div>

		<div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
			<div className="row clearfix">
				<div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
					<h1 style={{ fontSize: "30px" }}>
						All Users list
					</h1>
				</div>
			</div>
		</div>
		<div>



			<AsyncCSV />


			<div>


				<h4 style={{ margin: "10px", fontSize: "20px" }}>{filterUsers?.message}<span style={{ marginLeft: "5px" }}>{filterUsers?.data.length}</span></h4>


			</div>

		</div>


		<FormControl className={classes.formControl} variant="outlined" style={{ width: "20%" }}>
			<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				// value={toggleUSer}
				onChange={(event) => update(event)}
			// onChange={update}
			>
				<MenuItem value={"all"}>All</MenuItem>
				<MenuItem value={"Subscribed"}>Subscribed Users</MenuItem>
				<MenuItem value={"Unsubscribed"}>Unsubscribed Users</MenuItem>
				<MenuItem value={"android"}>Android Users</MenuItem>
				<MenuItem value={"ios"}>IOS Users</MenuItem>
			</Select>
		</FormControl>

		{/* <FilterUser /> */}

		{/*	<CSVLink data={data} headers={headers}>
			Download Users File
		</CSVLink>
         */}



		<Paper
			className={classes.root}
			style={{
				width: "100%",
				overflowX: "auto",
				marginTop: "10px"
			}}>
			< TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="center">Sr No.</StyledTableCell>
							<StyledTableCell align="center">User Name</StyledTableCell>
							<StyledTableCell align="center">User Gender</StyledTableCell>
							<StyledTableCell align="center">User Email</StyledTableCell>
							<StyledTableCell align="center">User Points</StyledTableCell>
							<StyledTableCell align="center">User Device Type</StyledTableCell>
							<StyledTableCell align="center">Registration
								{/* <div style={{ backgroundColor: "white" }}>
									<FormControl className={classes.formControl} variant="outlined" fullWidth>
										<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={toggleUSer}
											onChange={(event) => update(event)}
										>
											<MenuItem value="">All</MenuItem>
											<MenuItem value={true}>Subscribed</MenuItem>
											<MenuItem value={false}>Unsubscribed</MenuItem>
										</Select>
									</FormControl>
								</div> */}
							</StyledTableCell>
							<StyledTableCell align="center">Join Date</StyledTableCell>
							<StyledTableCell align="center"></StyledTableCell>
							<StyledTableCell align="center">Subscription duration</StyledTableCell>
							<StyledTableCell align="center">Date Of Subscription</StyledTableCell>
							<StyledTableCell align="center">Subscription Expiray Date</StyledTableCell>
							<StyledTableCell align="center">Operations</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>

						{


							// filterUsers?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => (
							// allUsers?.data.map((items, index) => (
							filterUsers?.data.map((items, index) => (
								<TableSingleRow items={items} index={index} purchaseUsers={purchaseUsers} length={filterUsers?.data.length} />
							))


						}

					</TableBody>

				</Table >
			</TableContainer >

		</Paper>



	</div >

}

export default UserList


// <TablePagination
// 				// rowsPerPageOptions={[5, 10, 150, 200, 300, 400, 500]}
// 				rowsPerPageOptions={[50, 200, 500]}
// 				component="div"
// 				count={filterUsers?.data.length}
// 				rowsPerPage={rowsPerPage}
// 				page={page}
// 				onPageChange={handleChangePage}
// 				onRowsPerPageChange={handleChangeRowsPerPage}
// 			/>


// import React, { useEffect, useState, useReducer } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	adminApproval, userlist, users__Delete, blockUser, UnblockUser,
// 	userListAndroid,
	// userListIos,
// 	userListSubscribed,
// 	userListUnsubscribed,
// 	condBaseUsers

// } from '../../actions/userAction';


// import toast, { Toaster } from 'react-hot-toast';
// import axios from "axios";
// ///////////////////////////////////////
// import {
// 	TOGGLE
// } from "../../constents/constents";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// // import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import CancelIcon from '@material-ui/icons/Cancel';
// import DoneIcon from '@material-ui/icons/Done';
// import EditIcon from '@material-ui/icons/Edit';
// import TextField from '@material-ui/core/TextField';
// import TablePagination from '@material-ui/core/TablePagination';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Button from "@material-ui/core/Button";
// import AsyncCSV from './CSVfile';   ////  import code file
// import ReactExport from 'react-data-export';
// ////////////////////////////////////////////
// import {
// 	userReducer,
// 	initState
// } from "../../reducers/userReducer";
// import TableSingleRow from './tableSingleRow';
// import FilterUser from './FilterUsers';
// import { filter } from 'lodash';

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


// const StyledTableCell = withStyles(theme => ({
// 	head: {
// 		backgroundColor: theme.palette.common.black,
// 		color: theme.palette.common.white,
// 	},
// 	body: {
// 		fontSize: 14,
// 	},
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
// 	root: {
// 		'&:nth-of-type(odd)': {
// 			backgroundColor: theme.palette.background.default,
// 		},
// 	},
// }))(TableRow);


// // const useStyles = makeStyles({
// // 	table: {
// // 		minWidth: 700,
// // 	},
// // });

// const useStyles = makeStyles({
// 	root: {
// 		width: '100%',
// 	},
// 	container: {
// 		maxHeight: 700,
// 	},
// });

// //////////////////
// const UserList = () => {


// 	const [page, setPage] = React.useState(0);
// 	const [rowsPerPage, setRowsPerPage] = React.useState(5);
// 	// const [is_member, setIs_member] = useState(false);
// 	const [block, setBlock] = useState(false);
// 	const [toggleUSer, setToggleUSer] = useState("");
// 	const [isToggledOn, setToggle] = useState(false);
// 	const [isToggledOns, setToggles] = useState(false);
// 	const [isToggledOnss, setToggless] = useState(false);
// 	const [msg, setMsg] = useState("Total No OF Users:");


// 	const [Androidusers, setMyUsers] = useState("");
// 	const [iosUsers, setIosUsers] = useState("");
// 	const [subUsers, setSubUsers] = useState("");
// 	const [unsubUsers, setUnsubUsers] = useState("");
// 	// const [index, setIndex] = useState();


// 	const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers, androidLISTUsers, iosLISTUsers,
// 		SubLISTUsers, UnSubLISTUsers, filterUsers
// 	} = useSelector((state) => state.userReducer);
// 	//console.log('login user data',user._id);


// 	const [state, dispatchs] = useReducer(userReducer, initState);

// 	const { isEdit } = state;



// 	const [tablebody, setTableBody] = useState([]);

// 	const dispatch = useDispatch();

// 	// console.log("users_in_component:", users);
// 	useEffect(() => {
// 		dispatch(userlist());
// 		dispatch(condBaseUsers())
// 		// dispatch(userListAndroid());
// 		// dispatch(userListIos());
// 		// dispatch(userListSubscribed());
// 		// dispatch(userListUnsubscribed());

// 	}, []);
// 	// useEffect(() => {
// 	// 	setMyUsers(users)
// 	// }, []);
// 	// console.log("users>>>>>", users);
// 	// console.log("paginationNo:", isToggledOns);
// 	/////////////////////////////////////////////////////////////////////
// 	const DeleteCategory = (category_id) => {
// 		dispatch(users__Delete(category_id));
// 		// console.log("category_id:", category_id);
// 	}
// 	const confirm = (category_id) => {
// 		confirmAlert({
// 			title: 'Confirm to Delete',
// 			message: 'Are you sure to delete this.',
// 			buttons: [
// 				{
// 					label: 'Yes',
// 					// onClick: () => alert('Click ggg')
// 					onClick: () => {
// 						dispatch(users__Delete(category_id));
// 					}
// 				},
// 				{
// 					label: 'No',
// 					onClick: () => {
// 						dispatch(userlist());
// 					}
// 				}
// 			]
// 		});
// 	}
// 	useEffect(() => {
// 		if (deleteUSERS) {
// 			toast.error(deleteUSERS.msg);
// 		}
// 		dispatch(userlist());
// 	}, [deleteUSERS])



// 	const handleChangePage = (event, newPage) => {
// 		setPage(newPage);
// 	};

// 	const handleChangeRowsPerPage = (event) => {
// 		setRowsPerPage(+event.target.value);
// 		setPage(0);
// 	};

// 	///////////////////////////////////
// 	const classes = useStyles();



// 	const update = (event) => {
// 		// setToggleUSer(event.target.value)
// 		dispatch(condBaseUsers(event.target.value))
// 		// setToggleUSer(!toggleUSer)
// 	}
// 	// const toggle = () => {
// 	// 	// setToggle(!isToggledOn);

// 	// 	// console.log(isToggledOn);
// 	// 	// dispatch(condBaseUsers())
// 	// 	if (isToggledOn === false) {
// 	// 		setToggle(!isToggledOn);
// 	// 	} else if (isToggledOn === true) {
// 	// 		// dispatch(condBaseUsers())
// 	// 		window.location.reload([false])

// 	// 		// setToggle(!isToggledOn);
// 	// 		// console.log("zzzzzzzzzzz");
// 	// 	}
// 	// };

// 	// const toggles = () => {
// 	// 	// dispatch(userlist());
// 	// 	// dispatch(condBaseUsers())

// 	// 	// window.location.reload([false])
// 	// 	// setToggles(!isToggledOns);

// 	// 	if (isToggledOns === false) {
// 	// 		// window.location.reload([false])
// 	// 		dispatch(condBaseUsers())
// 	// 		setToggles(!isToggledOns);
// 	// 	}

// 	// 	// axios.get(process.env.REACT_APP_API_URL + "userListAndroid").then(r => setMyUsers(r.data.data));
// 	// 	// axios.get(process.env.REACT_APP_API_URL + "userListAndroid").then(r => setMsg(r.data.message));

// 	// 	// userListAndroid()
// 	// 	// dispatch(userListAndroid());
// 	// 	// dispatch(userListAndroid());
// 	// 	// console.log(" android users");
// 	// 	// console.log("isToggledOnsForANDROID>>>>", isToggledOns);
// 	// 	// setMsg("")

// 	// 	// dispatch(condBaseUsers("android"))

// 	// };

// 	// const toggless = () => {
// 	// 	setToggless(!isToggledOnss);
// 	// 	// console.log(isToggledOn);
// 	// 	// dispatch(userListIos());
// 	// 	// axios.get(process.env.REACT_APP_API_URL + "userListIos").then(r => setIosUsers(r.data));
// 	// 	// console.log(" hiii ios users");
// 	// 	// console.log("isToggledOnssForIOS:", isToggledOnss);

// 	// };
// 	// console.log("iosUsers:", iosUsers);
// 	// console.log("iosUsers?.length:", iosUsers?.length);


// 	// useEffect(() => {
// 	// 	console.log("useEffect toggle for android>>>>", isToggledOns);
// 	// 	console.log("useEffect toggle for IOS:", isToggledOnss);
// 	// }, [isToggledOns, isToggledOnss])

// 	const filetrUsersFUN = (val) => {
// 		// console.log("am ruuning", val);
// 		// const value = {}
// 		dispatch(condBaseUsers(val))
// 		// dispatch(condBaseUsers())
// 	}
// 	// console.log("filterUsers:", filterUsers);
// 	// console.log("filterUsers?.data.length:", filterUsers?.data.length);
// 	// console.log("filterUsers?.data.message:", filterUsers?.message);
// 	// console.log("msg", msg);
// 	// console.log("Androidusers:", Androidusers);
// 	// console.log("Androidusers:", Androidusers?.length);

// 	// console.log("androidLISTUsers:", androidLISTUsers);
// 	// console.log("androidLISTUsers?.length:", androidLISTUsers?.length);


// 	const filterUSers = () => {
// 		// debugger
// 		// dispatch(userlist());
// 		dispatch(condBaseUsers())
// 		// window.location.reload([false])

// 	};



// 	// const headers = [
// 	// 	{ label: "User Name", key: "user_name" },
// 	// 	{ label: "User Email", key: "user_email" },
// 	// 	{ label: "User Points", key: "user_points" },
// 	// 	{ label: "User Device Type", key: "user_device_type" },
// 	// 	// { label: "Registration", key: "registration" },
// 	// ];

// 	// const data = [
// 	// 	{
// 	// 		user_name: users?.map((items, index) => (
// 	// 			items.user_name
// 	// 		)),
// 	// 		user_email: users?.map((items, index) => (
// 	// 			items.user_email
// 	// 		)),
// 	// 		user_points: users?.map((items, index) => (
// 	// 			items.user_points
// 	// 		)),
// 	// 		user_device_type: users?.map((items, index) => (
// 	// 			items.user_device_type
// 	// 		)),
// 	// 		// registration: users?.map((items, index) => (
// 	// 		// 	items?.is_member === true ? "Subscribed" : "Unsubscribed"
// 	// 		// )),
// 	// 	},
// 	// ];


// 	// const multiDataSet = [
// 	// 	{
// 	// 		columns: [
// 	// 			{ title: "User Name", width: { wpx: 80 } },//pixels width
// 	// 			{ title: "User Email", width: { wch: 40 } },//char width
// 	// 			{ title: "User Points", width: { wpx: 90 } },
// 	// 			{ title: "User Device Type", width: { wpx: 90 } },
// 	// 			{ title: "Registration", width: { wpx: 90 } },
// 	// 		],
// 	// 		data: users?.map((item) => [
// 	// 			{ value: item.user_name, width: { wpx: 90 } },
// 	// 			{ value: item.user_email, width: { wpx: 90 } },
// 	// 			{ value: item.user_points, width: { wpx: 90 } },
// 	// 			{ value: item.user_device_type, width: { wpx: 90 } },
// 	// 			{ value: item.registration, width: { wpx: 90 } },
// 	// 		])
// 	// 	}
// 	// ];

// 	// console.log("isToggledOns:", isToggledOns);
// 	// console.log("isToggledOnss:", isToggledOnss);
// 	// console.log("ios users:", iosLISTUsers);



// 	return <div>

// 		<div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
// 			<div className="row clearfix">
// 				<div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
// 					<h1 style={{ fontSize: "30px" }}>
// 						All Users list
// 					</h1>
// 				</div>
// 			</div>
// 		</div>
// 		<div>
// 			{/* <Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				// onClick={() => toggle()}
// 				// onClick={() => { toggle(); filetrUsersFUN("Subscribed") }}
// 				onClick={() => filetrUsersFUN("Subscribed")}
// 			>

// 				{
// 					isToggledOn ? "Filter All Users" : "Subscribed Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				// onClick={() => toggles()}
// 				// onClick={() => { toggles(); filetrUsersFUN("android") }}
// 				onClick={() => filetrUsersFUN("android")}

// 			>

// 				{
// 					isToggledOns ? "Filter All Users" : "Android Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				// onClick={() => toggless()}
// 				// onClick={() => { toggless(); filetrUsersFUN("ios") }}
// 				onClick={() => filetrUsersFUN("ios")}

// 			>

// 				{
// 					isToggledOnss ? "Filter All Users" : "IOS Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				onClick={() => filterUSers()}
// 			>

// 				Reset All Users

// 			</Button> */}

// 			{/* <ExcelFile
// 				filename="Users Data"
// 				element={<button type='button' style={{ fontSize: "15px", borderRadius: "10px" }} className='btn btn-success'>Download Excel Users List</button>}>
// 				<ExcelSheet dataSet={multiDataSet} name="Users List" />
// 			</ExcelFile> */}

// 			<AsyncCSV />

// 			{/*	<h1>{androidLISTUsers?.length}</h1> */}
// 			{/* <h1>{users?.length || isToggledOns ? androidLISTUsers?.length : users?.length}</h1> */}
// 			{/*<h1>{isToggledOns ? `Total No OF Android Users${androidLISTUsers?.length}` : `Total No OF All Users${users?.length}`}</h1> */}
// 			<div>

// 				{

// 					// isToggledOns ? <h4 style={{ color: "black", marginTop: "10px" }}>Total No OF Android Users:{<span style={{ color: "black", marginLeft: "5px" }}>{androidLISTUsers?.length}</span>}</h4> :
// 					// 	<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF All Users:{<span style={{ color: "black", marginLeft: "5px" }}>{users?.length}</span>}</h4> ||
// 					// 		isToggledOnss ? <h4 style={{ color: "black", marginTop: "10px" }}>Total No OF IOS Users:{<span style={{ color: "black", marginLeft: "5px" }}>{iosLISTUsers?.length}</span>}</h4> :
// 					// 		<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF All Users:{<span style={{ color: "black", marginLeft: "5px" }}>{users?.length}</span>}</h4>


// 					// isToggledOns ? <h4 style={{ color: "black", marginTop: "10px" }}>Total No OF Android Users:{<span style={{ color: "black", marginLeft: "5px" }}>{androidLISTUsers?.length}</span>}</h4> :
// 					// 	<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF All Users:{<span style={{ color: "black", marginLeft: "5px" }}>{users?.length}</span>}</h4> ||
// 					// 		isToggledOnss ? <h4 style={{ color: "black", marginTop: "10px" }}>Total No OF IOS Users:{<span style={{ color: "black", marginLeft: "5px" }}>{iosLISTUsers?.length}</span>}</h4> :
// 					// 		<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF All Users:{<span style={{ color: "black", marginLeft: "5px" }}>{users?.length}</span>}</h4>

// 					// isToggledOns ?   "f" : "p"

// 					// isToggledOns && items?.is_member === false || isToggledOnsA && items.user_device_type?.toLowerCase() === "ios" || isToggledOnssI && items.user_device_type?.toLowerCase() === "android" ? "" : "ali"
// 					// isToggledOns || isToggledOnss  ? "p" : "ali"

// 					// isToggledOns || isToggledOnss ? <h4 style={{ color: "black", marginTop: "10px" }}>Total No OF Android Users:{<span style={{ color: "black", marginLeft: "5px" }}>{Androidusers?.length}</span>}</h4> ||
// 					// 	<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF IOS Users:{<span style={{ color: "black", marginLeft: "5px" }}>{iosUsers?.length}</span>}</h4>
// 					// 	:
// 					// 	<h4 style={{ color: "black", marginTop: "10px" }}>Total No OF All Users:{<span style={{ color: "black", marginLeft: "5px" }}>{users?.length}</span>}</h4>



// 				}

// 				{/* <h4>{msg} {users?.length} ||{Androidusers?.length}</h4> */}
// 				<h4 style={{ margin: "10px", fontSize: "20px" }}>{filterUsers?.message}<span style={{ marginLeft: "5px" }}>{filterUsers?.data.length}</span></h4>


// 			</div>

// 		</div>


// 		<FormControl className={classes.formControl} variant="outlined" style={{ width: "20%" }}>
// 			<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
// 			<Select
// 				labelId="demo-simple-select-label"
// 				id="demo-simple-select"
// 				// value={toggleUSer}
// 				onChange={(event) => update(event)}
// 			// onChange={update}
// 			>
// 				<MenuItem value={"all"}>All</MenuItem>
// 				<MenuItem value={"Subscribed"}>Subscribed Users</MenuItem>
// 				<MenuItem value={"Unsubscribed"}>Unsubscribed Users</MenuItem>
// 				<MenuItem value={"android"}>Android Users</MenuItem>
// 				<MenuItem value={"ios"}>IOS Users</MenuItem>
// 			</Select>
// 		</FormControl>

// 		{/* <FilterUser /> */}

// 		{/*	<CSVLink data={data} headers={headers}>
// 			Download Users File
// 		</CSVLink>
//          */}



// 		<Paper>
// 			< TableContainer component={Paper} style={{ marginTop: "10px" }}>
// 				<Table className={classes.table} aria-label="customized table">
// 					<TableHead>
// 						<TableRow>
// 							<StyledTableCell align="center">User Name</StyledTableCell>
// 							<StyledTableCell align="center">User Email</StyledTableCell>
// 							<StyledTableCell align="center">User Points</StyledTableCell>
// 							<StyledTableCell align="center">User Device Type</StyledTableCell>
// 							<StyledTableCell align="center">Registration
// 								{/* <div style={{ backgroundColor: "white" }}>
// 									<FormControl className={classes.formControl} variant="outlined" fullWidth>
// 										<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
// 										<Select
// 											labelId="demo-simple-select-label"
// 											id="demo-simple-select"
// 											value={toggleUSer}
// 											onChange={(event) => update(event)}
// 										>
// 											<MenuItem value="">All</MenuItem>
// 											<MenuItem value={true}>Subscribed</MenuItem>
// 											<MenuItem value={false}>Unsubscribed</MenuItem>
// 										</Select>
// 									</FormControl>
// 								</div> */}
// 							</StyledTableCell>
// 							<StyledTableCell align="center">Operations</StyledTableCell>
// 						</TableRow>
// 					</TableHead>

// 					<TableBody>
// 						{
// 							// users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => (
// 							// 	<TableSingleRow items={items} isToggledOns={isToggledOn} isToggledOnsA={isToggledOns} isToggledOnssI={isToggledOnss} index={index} />


// 							// ))

// 							// users?.map((items, index) => (
// 							// 	<TableSingleRow items={items} isToggledOns={isToggledOn} isToggledOnsA={isToggledOns} isToggledOnssI={isToggledOnss} index={index} />
// 							// ))

// 							filterUsers?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => (
// 								<TableSingleRow items={items} isToggledOns={isToggledOn} isToggledOnsA={isToggledOns} isToggledOnssI={isToggledOnss} index={index} />


// 							))

// 						}

// 					</TableBody>

// 				</Table >
// 			</TableContainer >
// 			<TablePagination
// 				rowsPerPageOptions={[5, 10, 150, 200, 300, 400, 500]}
// 				component="div"
// 				// count={users?.length || isToggledOns ? users?.filter((items) => {
// 				// 	return items.user_device_type?.toLowerCase() === "ios"
// 				// }).length : users?.length || isToggledOnss ? users?.filter((items) => {
// 				// 	return items.user_device_type?.toLowerCase() === "android"
// 				// }).length : users?.length}
// 				// count={users?.length}
// 				count={filterUsers?.data.length}
// 				rowsPerPage={rowsPerPage}
// 				page={page}
// 				onPageChange={handleChangePage}
// 				onRowsPerPageChange={handleChangeRowsPerPage}
// 			/>
// 		</Paper>



// 	</div >

// }

// export default UserList




// before


// import React, { useEffect, useState, useReducer } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminApproval, userlist, users__Delete, blockUser, UnblockUser } from '../../actions/userAction';
// import toast, { Toaster } from 'react-hot-toast';

// ///////////////////////////////////////
// import {
// 	TOGGLE
// } from "../../constents/constents";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// // import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import CancelIcon from '@material-ui/icons/Cancel';
// import DoneIcon from '@material-ui/icons/Done';
// import EditIcon from '@material-ui/icons/Edit';
// import TextField from '@material-ui/core/TextField';
// import TablePagination from '@material-ui/core/TablePagination';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Button from "@material-ui/core/Button";
// import AsyncCSV from './CSVfile';   ////  import code file
// import ReactExport from 'react-data-export';
// ////////////////////////////////////////////
// import {
// 	userReducer,
// 	initState
// } from "../../reducers/userReducer";
// import TableSingleRow from './tableSingleRow';
// import FilterUser from './FilterUsers';
// import { filter } from 'lodash';

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


// const StyledTableCell = withStyles(theme => ({
// 	head: {
// 		backgroundColor: theme.palette.common.black,
// 		color: theme.palette.common.white,
// 	},
// 	body: {
// 		fontSize: 14,
// 	},
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
// 	root: {
// 		'&:nth-of-type(odd)': {
// 			backgroundColor: theme.palette.background.default,
// 		},
// 	},
// }))(TableRow);


// // const useStyles = makeStyles({
// // 	table: {
// // 		minWidth: 700,
// // 	},
// // });

// const useStyles = makeStyles({
// 	root: {
// 		width: '100%',
// 	},
// 	container: {
// 		maxHeight: 700,
// 	},
// });

// //////////////////
// const UserList = () => {


// 	const [page, setPage] = React.useState(0);
// 	const [rowsPerPage, setRowsPerPage] = React.useState(5);
// 	// const [is_member, setIs_member] = useState(false);
// 	const [block, setBlock] = useState(false);
// 	const [toggleUSer, setToggleUSer] = useState("");
// 	const [isToggledOn, setToggle] = useState(false);
// 	const [isToggledOns, setToggles] = useState(false);
// 	const [isToggledOnss, setToggless] = useState(false);


// 	const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers } = useSelector((state) => state.userReducer);
// 	//console.log('login user data',user._id);


// 	const [state, dispatchs] = useReducer(userReducer, initState);

// 	const { isEdit } = state;



// 	const [tablebody, setTableBody] = useState([]);

// 	const dispatch = useDispatch();

// 	// console.log("users_in_component:", users);
// 	useEffect(() => {
// 		dispatch(userlist());
// 	}, []);
// 	console.log("users>>>>>", users);
// 	console.log("paginationNo:", isToggledOns);
// 	/////////////////////////////////////////////////////////////////////
// 	const DeleteCategory = (category_id) => {
// 		dispatch(users__Delete(category_id));
// 		console.log("category_id:", category_id);
// 	}
// 	const confirm = (category_id) => {
// 		confirmAlert({
// 			title: 'Confirm to Delete',
// 			message: 'Are you sure to delete this.',
// 			buttons: [
// 				{
// 					label: 'Yes',
// 					// onClick: () => alert('Click ggg')
// 					onClick: () => {
// 						dispatch(users__Delete(category_id));
// 					}
// 				},
// 				{
// 					label: 'No',
// 					onClick: () => {
// 						dispatch(userlist());
// 					}
// 				}
// 			]
// 		});
// 	}
// 	useEffect(() => {
// 		if (deleteUSERS) {
// 			toast.error(deleteUSERS.msg);
// 		}
// 		dispatch(userlist());
// 	}, [deleteUSERS])



// 	const handleChangePage = (event, newPage) => {
// 		setPage(newPage);
// 	};

// 	const handleChangeRowsPerPage = (event) => {
// 		setRowsPerPage(+event.target.value);
// 		setPage(0);
// 	};

// 	///////////////////////////////////
// 	const classes = useStyles();



// 	const update = (event) => {
// 		setToggleUSer(event.target.value)
// 		// setToggleUSer(!toggleUSer)
// 	}
// 	const toggle = () => {
// 		setToggle(!isToggledOn);
// 		// console.log(isToggledOn);
// 	};

// 	const toggles = () => {
// 		setToggles(!isToggledOns);
// 		// console.log(isToggledOn);
// 	};
// 	const toggless = () => {
// 		setToggless(!isToggledOnss);
// 		// console.log(isToggledOn);
// 	};


// 	const filterUSers = () => {
// 		// debugger
// 		// dispatch(userlist());
// 		window.location.reload([false])

// 	};



// 	// const headers = [
// 	// 	{ label: "User Name", key: "user_name" },
// 	// 	{ label: "User Email", key: "user_email" },
// 	// 	{ label: "User Points", key: "user_points" },
// 	// 	{ label: "User Device Type", key: "user_device_type" },
// 	// 	// { label: "Registration", key: "registration" },
// 	// ];

// 	// const data = [
// 	// 	{
// 	// 		user_name: users?.map((items, index) => (
// 	// 			items.user_name
// 	// 		)),
// 	// 		user_email: users?.map((items, index) => (
// 	// 			items.user_email
// 	// 		)),
// 	// 		user_points: users?.map((items, index) => (
// 	// 			items.user_points
// 	// 		)),
// 	// 		user_device_type: users?.map((items, index) => (
// 	// 			items.user_device_type
// 	// 		)),
// 	// 		// registration: users?.map((items, index) => (
// 	// 		// 	items?.is_member === true ? "Subscribed" : "Unsubscribed"
// 	// 		// )),
// 	// 	},
// 	// ];


// 	// const multiDataSet = [
// 	// 	{
// 	// 		columns: [
// 	// 			{ title: "User Name", width: { wpx: 80 } },//pixels width
// 	// 			{ title: "User Email", width: { wch: 40 } },//char width
// 	// 			{ title: "User Points", width: { wpx: 90 } },
// 	// 			{ title: "User Device Type", width: { wpx: 90 } },
// 	// 			{ title: "Registration", width: { wpx: 90 } },
// 	// 		],
// 	// 		data: users?.map((item) => [
// 	// 			{ value: item.user_name, width: { wpx: 90 } },
// 	// 			{ value: item.user_email, width: { wpx: 90 } },
// 	// 			{ value: item.user_points, width: { wpx: 90 } },
// 	// 			{ value: item.user_device_type, width: { wpx: 90 } },
// 	// 			{ value: item.registration, width: { wpx: 90 } },
// 	// 		])
// 	// 	}
// 	// ];


// 	return <div>

// 		<div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
// 			<div className="row clearfix">
// 				<div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
// 					<h1 style={{ fontSize: "30px" }}>
// 						All Users list
// 					</h1>
// 				</div>
// 			</div>
// 		</div>
// 		<div>
// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				onClick={() => toggle()}
// 			>

// 				{
// 					isToggledOn ? "Filter All Users" : "Subscribed Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				onClick={() => toggles()}
// 			>

// 				{
// 					isToggledOns ? "Filter All Users" : "Android Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				onClick={() => toggless()}
// 			>

// 				{
// 					isToggledOnss ? "Filter All Users" : "IOS Users"
// 				}

// 			</Button>

// 			<Button
// 				variant="contained"
// 				color="primary"
// 				style={{ margin: "5px", outline: "none" }}
// 				onClick={() => filterUSers()}
// 			>

// 				Reset All Users

// 			</Button>

// 			{/* <ExcelFile
// 				filename="Users Data"
// 				element={<button type='button' style={{ fontSize: "15px", borderRadius: "10px" }} className='btn btn-success'>Download Excel Users List</button>}>
// 				<ExcelSheet dataSet={multiDataSet} name="Users List" />
// 			</ExcelFile> */}

// 			<AsyncCSV />


// 		</div>

// 		{/* <FormControl className={classes.formControl} variant="outlined" style={{ width: "20%" }}>
// 			<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
// 			<Select
// 				labelId="demo-simple-select-label"
// 				id="demo-simple-select"
// 				value={toggleUSer}
// 				onChange={(event) => update(event)}
// 			// onChange={update}
// 			>
// 				<MenuItem value={"all"}>All</MenuItem>
// 				<MenuItem value={"Subscribed"}>Subscribed</MenuItem>
// 				<MenuItem value={"Unsubscribed"}>Unsubscribed</MenuItem>
// 			</Select>
// 		</FormControl> */}

// 		{/* <FilterUser /> */}

// 		{/*	<CSVLink data={data} headers={headers}>
// 			Download Users File
// 		</CSVLink>
//          */}



// 		<Paper>
// 			< TableContainer component={Paper} style={{ marginTop: "10px" }}>
// 				<Table className={classes.table} aria-label="customized table">
// 					<TableHead>
// 						<TableRow>
// 							<StyledTableCell align="center">Sr No.</StyledTableCell>
// 							<StyledTableCell align="center">User Name</StyledTableCell>
// 							<StyledTableCell align="center">User Email</StyledTableCell>
// 							<StyledTableCell align="center">User Points</StyledTableCell>
// 							<StyledTableCell align="center">User Device Type</StyledTableCell>
// 							<StyledTableCell align="center">Registration
// 								{/* <div style={{ backgroundColor: "white" }}>
// 									<FormControl className={classes.formControl} variant="outlined" fullWidth>
// 										<InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
// 										<Select
// 											labelId="demo-simple-select-label"
// 											id="demo-simple-select"
// 											value={toggleUSer}
// 											onChange={(event) => update(event)}
// 										>
// 											<MenuItem value="">All</MenuItem>
// 											<MenuItem value={true}>Subscribed</MenuItem>
// 											<MenuItem value={false}>Unsubscribed</MenuItem>
// 										</Select>
// 									</FormControl>
// 								</div> */}
// 							</StyledTableCell>
// 							<StyledTableCell align="center">Operations</StyledTableCell>
// 						</TableRow>
// 					</TableHead>

// 					<TableBody>
// 						{
// 							users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => (
// 								<TableSingleRow items={items} isToggledOns={isToggledOn} isToggledOnsA={isToggledOns} isToggledOnssI={isToggledOnss} index={index} />


// 							))
// 						}

// 					</TableBody>

// 				</Table >
// 			</TableContainer >
// 			<TablePagination
// 				rowsPerPageOptions={[5, 10, 150, 200, 300, 400, 500]}
// 				component="div"
// 				// count={users?.length || isToggledOns ? users?.filter((items) => {
// 				// 	return items.user_device_type?.toLowerCase() === "ios"
// 				// }).length : users?.length || isToggledOnss ? users?.filter((items) => {
// 				// 	return items.user_device_type?.toLowerCase() === "android"
// 				// }).length : users?.length}
// 				count={users?.length}
// 				rowsPerPage={rowsPerPage}
// 				page={page}
// 				onPageChange={handleChangePage}
// 				onRowsPerPageChange={handleChangeRowsPerPage}
// 			/>
// 		</Paper>



// 	</div >

// }

// export default UserList
