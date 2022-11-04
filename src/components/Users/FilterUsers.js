// import React, { useEffect, useState, useReducer } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminApproval, userlist, users__Delete, blockUser, UnblockUser } from '../../actions/userAction';
// import toast, { Toaster } from 'react-hot-toast';

// ///////////////////////////////////////
// import {
//     TOGGLE
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
// import Button from '@material-ui/core/Button';
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

// //////////////
// import {
//     userReducer,
//     initState
// } from "../../reducers/userReducer";
// import TableSingleRow from './tableSingleRow';

// const StyledTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.background.default,
//         },
//     },
// }))(TableRow);


// // const useStyles = makeStyles({
// // 	table: {
// // 		minWidth: 700,
// // 	},
// // });

// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//     },
//     container: {
//         maxHeight: 700,
//     },
// });

// //////////////////
// const FilterUser = () => {


//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//     // const [is_member, setIs_member] = useState(false);
//     const [isToggledOn, setToggle] = useState(false);
//     const [block, setBlock] = useState(false);
//     const [toggleUSer, setToggleUSer] = useState(false);


//     const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers } = useSelector((state) => state.userReducer);
//     //console.log('login user data',user._id);		


//     const [state, dispatchs] = useReducer(userReducer, initState);

//     const { isEdit } = state;



//     const [tablebody, setTableBody] = useState([]);

//     const dispatch = useDispatch();

//     console.log("users_in_component:", users);
//     useEffect(() => {
//         dispatch(userlist());
//     }, []);
//     /////////////////////////////////////////////////////////////////////
//     const DeleteCategory = (category_id) => {
//         dispatch(users__Delete(category_id));
//         console.log("category_id:", category_id);
//     }
//     const confirm = (category_id) => {
//         confirmAlert({
//             title: 'Confirm to Delete',
//             message: 'Are you sure to delete this.',
//             buttons: [
//                 {
//                     label: 'Yes',
//                     // onClick: () => alert('Click ggg')
//                     onClick: () => {
//                         dispatch(users__Delete(category_id));
//                     }
//                 },
//                 {
//                     label: 'No',
//                     onClick: () => {
//                         dispatch(userlist());
//                     }
//                 }
//             ]
//         });
//     }
//     useEffect(() => {
//         if (deleteUSERS) {
//             toast.error(deleteUSERS.msg);
//         }
//         dispatch(userlist());
//     }, [deleteUSERS])



//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     ///////////////////////////////////
//     const classes = useStyles();



//     const update = (event) => {
//         // setToggleUSer(event.target.value)
//         setToggleUSer(!toggleUSer)
//     }

//     return <div>



//         <FormControl className={classes.formControl} variant="outlined" style={{ width: "20%" }}>
//             <InputLabel id="demo-simple-select-label" style={{ color: "black", marginTop: "8px" }}>Filter Users</InputLabel>
//             <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={toggleUSer}
//                 onChange={(event) => update(event)}
//             >
//                 <MenuItem value="">All</MenuItem>
//                 <MenuItem value={true}>Subscribed</MenuItem>
//                 <MenuItem value={false}>Unsubscribed</MenuItem>
//             </Select>
//         </FormControl>





//     </div >

// }

// export default FilterUser
