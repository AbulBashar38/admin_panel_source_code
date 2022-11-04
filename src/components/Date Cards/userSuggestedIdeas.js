////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminApproval, userlist, dateCardsListAction, Date_cards_Delete, users_Date_cards_plans_Delete, Date_cards_Edit, users_sug_date_cards } from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';
///////////////////////////////////////////////////////////////////////////////
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Loader from "../Shared/Spinner"
import configureStore from '../../store';
let store = configureStore()
// 

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 700,
    },
});

const DateCardsList = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);
    const [ageToggle, setAgeToggle] = React.useState("" || false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const { users, newUser, adminApprovalStatus, dateCardsList, dateCardsListOfUsers, deleteCategory, categoryEditUpdate, deleteUsersPlans } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    ////////////////////////////////////////////////////////////
    console.log("dateCardsList_in_component:", dateCardsList?.data);
    useEffect(() => {
        dispatch(users_sug_date_cards());
    }, []);

    // console.log("dateCardsListOfUsers?.data:", dateCardsListOfUsers?.data);

    const DeleteCategory = (category_id) => {
        dispatch(users_Date_cards_plans_Delete(category_id));
        console.log("category_id:", category_id);
    }

    // useEffect(() => {
    //     if (deleteUsersPlans) {
    //         toast.error(deleteUsersPlans.msg);
    //     }
    //     dispatch(users_sug_date_cards());
    // }, [deleteUsersPlans])

    const confirm = (category_id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this.',
            buttons: [
                {
                    label: 'Yes',

                    onClick: () => {
                        dispatch(users_Date_cards_plans_Delete(category_id));
                        dispatch(users_sug_date_cards());
                        // window.location.reload([false])
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        dispatch(users_sug_date_cards());
                    }
                }
            ]
        });
    }

    const AcceptPlans = (items) => {

        store.dispatch({
            type: "add_user_accepted_plans",
            payload: items,
            ageToggle: ageToggle
        })
        window.location.reload([false])
        // dispatch(users_sug_date_cards());
        // dispatch(users_Date_cards_plans_Delete(items._id));
    }

    const update = (event) => {
        setAgeToggle(event.target.value)
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    const classes = useStyles();
    return (
        <div>

            <div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
                <div className="row clearfix">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <h1 style={{ fontSize: "30px" }}>
                            Users Suggested  Plans
                        </h1>
                    </div>
                </div>
            </div>

            <Paper className={classes.root}>
                {dateCardsListOfUsers?.data?.length > 0 ?
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center" className="btn_primary">Sr No.</StyledTableCell>

                                    <StyledTableCell align="center" className="btn_primary">User Email</StyledTableCell>
                                    <StyledTableCell align="center" className="btn_primary">DateCard Name</StyledTableCell>
                                    <StyledTableCell align="center" className="btn_primary">DateCard Description</StyledTableCell>
                                    {/* <StyledTableCell align="center">Add for Under Age Twenty One</StyledTableCell> */}
                                    <StyledTableCell align="center" className="btn_primary">Operations</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dateCardsListOfUsers?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <StyledTableCell align="center" >{index + 1}</StyledTableCell>

                                            <StyledTableCell align="center" className={items.accepted === 1 ? 'displayAddedUsers' : ""}>
                                                {items.user_email}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" className={items.accepted === 1 ? 'displayAddedUsers' : ""}>
                                                {items.dateCard_name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" className={items.accepted === 1 ? 'displayAddedUsers' : ""}>
                                                {items.dateCard_description}
                                            </StyledTableCell>
                                            {/* 
                                                  <StyledTableCell align="center">
                                                      <FormControl variant="outlined" className={classes.formControl}>
                                                          <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                                                          <Select
                                                              style={{ marginTop: "10px", marginLeft: "7px" }}
                                                              labelId="demo-simple-select-outlined-label"
                                                              id="demo-simple-select-outlined"
                                                              value={ageToggle}
                                                              // value=""
                                                              onChange={(e) => update(e)}
                                                          // onChange=''
                                                          // label="Age"
                                                          // input={
                                                          //     <OutlinedInput
                                                          //         labelWidth={this.state.labelWidth}
                                                          //         name="ageToggle"
                                                          //         id="outlined-age-simple"
                                                          //     />
                                                          // }
                                                          >
                                                              <MenuItem value="">
                                                                  <em></em>
                                                              </MenuItem>
                                                              <MenuItem value={true}>Yes</MenuItem>
                                                          </Select>
                                                      </FormControl>
                                                  </StyledTableCell> */}

                                            <StyledTableCell align="center">
                                                <Button variant="contained" color="secondary" className="btn_primary" style={{ margin: "5px", outline: "none" }}
                                                    // onClick={(e) => DeleteCategory(items._id)}
                                                    onClick={() => confirm(items._id)}
                                                ><CancelIcon /></Button>
                                                <Button variant="contained" color="primary" className="btn_secondary" style={{ margin: "5px", outline: "none" }}
                                                    onClick={(e) => AcceptPlans(items)}
                                                ><DoneIcon /></Button>
                                            </StyledTableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Loader />
                }


            </Paper>
        </div>
    );
}

export default DateCardsList




///////////////////////////////////////////////

 // <TablePagination
                //     rowsPerPageOptions={[50, 200, 500]}
                //     component="div"
                //     count={dateCardsListOfUsers?.data.length}
                //     rowsPerPage={rowsPerPage}
                //     page={page}
                //     onPageChange={handleChangePage}
                //     onRowsPerPageChange={handleChangeRowsPerPage}
                // />
// import React, { useEffect, useState } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminApproval, userlist, dateCardsListAction, Date_cards_Delete, users_Date_cards_plans_Delete, Date_cards_Edit, users_sug_date_cards } from '../../actions/userAction';
// import toast, { Toaster } from 'react-hot-toast';
// ///////////////////////////////////////////////////

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

// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


// import configureStore from '../../store';
// let store = configureStore()

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


// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

// ////////////////////////////////////
// const DateCardsList = () => {


//     const { users, newUser, adminApprovalStatus, dateCardsList, dateCardsListOfUsers, deleteCategory, categoryEditUpdate, deleteUsersPlans } = useSelector((state) => state.userReducer);
//     // const [tablebody, setTableBody] = useState([]);
//     // const [editText, setEditText] = useState(false);
//     // const [editDateCardInfo, setEditDateCardInfo] = useState({
//     //     dateCard_name: "",
//     //     dateCard_description: "",
//     //     dateCard_number: "",
//     //     average_rating: "",
//     // });

//     const dispatch = useDispatch();
//     ////////////////////////////////////////////////////////////
//     console.log("dateCardsList_in_component:", dateCardsList?.data);
//     useEffect(() => {
//         dispatch(users_sug_date_cards());
//     }, []);
//     /////////////////////////////////////////////////////////////////////
//     const DeleteCategory = (category_id) => {
//         dispatch(users_Date_cards_plans_Delete(category_id));
//         console.log("category_id:", category_id);
//     }

//     useEffect(() => {
//         if (deleteUsersPlans) {
//             toast.error(deleteUsersPlans.msg);
//         }
//         dispatch(users_sug_date_cards());
//     }, [deleteUsersPlans])

//     //////////////
//     const confirm = (category_id) => {
//         confirmAlert({
//             title: 'Confirm to Delete',
//             message: 'Are you sure to delete this.',
//             buttons: [
//                 {
//                     label: 'Yes',
//                     // onClick: () => alert('Click ggg')
//                     onClick: () => {
//                         dispatch(users_Date_cards_plans_Delete(category_id));
//                     }
//                 },
//                 {
//                     label: 'No',
//                     onClick: () => {
//                         dispatch(users_sug_date_cards());
//                     }
//                 }
//             ]
//         });
//     }


//     const AcceptPlans = (items) => {
//         console.log("items:", items);
//         store.dispatch({
//             type: "add_user_accepted_plans",
//             payload: items,
//             // user_id: this.props.userId
//             // productValues: this.state
//         })
//         dispatch(users_Date_cards_plans_Delete(items._id));
//     }
//     //////////////////////////////////
//     const classes = useStyles();
//     return (
//         <>

//             <div className="block-header">
//                 <div className="row clearfix">
//                     <div className="col-md-6 col-sm-12">
//                         <h1>
//                             Users Suggested  Plans

//                         </h1>
//                     </div>
//                 </div>
//             </div>

//             < TableContainer component={Paper} style={{ marginTop: "50px" }}>
//                 <Table className={classes.table} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell align="center">Sr No.</StyledTableCell>
//                             <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                             <StyledTableCell align="center">DateCard Description</StyledTableCell>
//                             <StyledTableCell align="center">Operations</StyledTableCell>
//                         </TableRow>
//                     </TableHead>

//                     <TableBody>
//                         {
//                             dateCardsListOfUsers?.data.map((items, index) => (

//                                 <StyledTableRow>

//                                     <StyledTableCell align="center">{index + 1}</StyledTableCell>

//                                     <StyledTableCell align="center">
//                                         {items.dateCard_name}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {items.dateCard_description}
//                                     </StyledTableCell>

//                                     <StyledTableCell align="center">

//                                         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                                             // onClick={(e) => DeleteCategory(items._id)}
//                                             onClick={() => confirm(items._id)}
//                                         ><CancelIcon /></Button>
//                                         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                                             onClick={(e) => AcceptPlans(items)}
//                                         ><DoneIcon /></Button>
//                                     </StyledTableCell>

//                                 </StyledTableRow>

//                             ))
//                         }

//                     </TableBody>

//                 </Table >
//             </TableContainer >

//         </>
//     )
// }

// export default DateCardsList

