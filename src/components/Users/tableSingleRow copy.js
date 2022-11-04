// // import React, { useEffect, useState, useReducer } from 'react';
// // import { MDBDataTableV5 } from 'mdbreact';
// // import { Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { adminApproval, userlist, users__Delete, blockUser, UnblockUser } from '../../actions/userAction';
// // import toast, { Toaster } from 'react-hot-toast';
// // ///////////////////////////////////////
// // import {
// //     TOGGLE
// // } from "../../constents/constents";
// // import { withStyles, makeStyles } from '@material-ui/core/styles';
// // // import { withStyles } from '@material-ui/core/styles';
// // import Table from '@material-ui/core/Table';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableCell from '@material-ui/core/TableCell';
// // import TableContainer from '@material-ui/core/TableContainer';
// // import TableHead from '@material-ui/core/TableHead';
// // import TableRow from '@material-ui/core/TableRow';
// // import Paper from '@material-ui/core/Paper';
// // import Button from '@material-ui/core/Button';
// // import CancelIcon from '@material-ui/icons/Cancel';
// // import DoneIcon from '@material-ui/icons/Done';
// // import EditIcon from '@material-ui/icons/Edit';
// // import TextField from '@material-ui/core/TextField';
// // import TablePagination from '@material-ui/core/TablePagination';
// // import { confirmAlert } from 'react-confirm-alert'; // Import
// // import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// // import { CSVLink } from "react-csv";
// // import {
// //     userReducer,
// //     initState
// // } from "../../reducers/userReducer";

// // const StyledTableCell = withStyles(theme => ({
// //     head: {
// //         backgroundColor: theme.palette.common.black,
// //         color: theme.palette.common.white,
// //     },
// //     body: {
// //         fontSize: 14,
// //     },
// // }))(TableCell);

// // const StyledTableRow = withStyles(theme => ({
// //     root: {
// //         '&:nth-of-type(odd)': {
// //             backgroundColor: theme.palette.background.default,
// //         },
// //     },
// // }))(TableRow);

// // // const useStyles = makeStyles({
// // // 	table: {
// // // 		minWidth: 700,
// // // 	},
// // // });

// // const useStyles = makeStyles({
// //     root: {
// //         width: '100%',
// //     },
// //     container: {
// //         maxHeight: 700,
// //     },
// // });

// // //////////////////
// // const TableSingleRow = (props) => {
// //     const [toggles, setToggles] = React.useState("");
// //     const { items, isToggledOns, isToggledOnsA, isToggledOnssI, index } = props
// //     // console.log("items:", items);
// //     // console.log("isToggledOns:", isToggledOns);

// //     const [page, setPage] = React.useState(0);
// //     const [rowsPerPage, setRowsPerPage] = React.useState(5);

// //     // const [is_member, setIs_member] = useState(false);
// //     const [isToggledOn, setToggle] = useState(items.is_blocked);
// //     const [block, setBlock] = useState(false);

// //     const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers } = useSelector((state) => state.userReducer);
// //     //console.log('login user data',user._id);

// //     const [state, dispatchs] = useReducer(userReducer, initState);

// //     const { isEdit } = state;

// //     const [tablebody, setTableBody] = useState([]);

// //     const dispatch = useDispatch();

// //     // console.log("users_in_component:", users);
// //     useEffect(() => {
// //         dispatch(userlist());
// //     }, []);
// //     /////////////////////////////////////////////////////////////////////
// //     const DeleteCategory = (category_id) => {
// //         dispatch(users__Delete(category_id));
// //         // console.log("category_id:", category_id);
// //     }
// //     const confirm = (category_id) => {
// //         confirmAlert({
// //             title: 'Confirm to Delete',
// //             message: 'Are you sure to delete this.',
// //             buttons: [
// //                 {
// //                     label: 'Yes',
// //                     // onClick: () => alert('Click ggg')
// //                     onClick: () => {
// //                         dispatch(users__Delete(category_id));
// //                     }
// //                 },
// //                 {
// //                     label: 'No',
// //                     onClick: () => {
// //                         dispatch(userlist());
// //                     }
// //                 }
// //             ]
// //         });
// //     }
// //     useEffect(() => {
// //         if (deleteUSERS) {
// //             toast.error(deleteUSERS.msg);
// //         }
// //         dispatch(userlist());
// //     }, [deleteUSERS])

// //     useEffect(() => {
// //         if (blockusers) {
// //             toast.error(blockusers.msg);
// //         }
// //         dispatch(userlist());
// //     }, [blockusers])

// //     useEffect(() => {
// //         if (UnblockBlockusers) {
// //             toast.error(UnblockBlockusers.msg);
// //         }
// //         dispatch(userlist());
// //     }, [UnblockBlockusers])

// //     const handleChangePage = (event, newPage) => {
// //         setPage(newPage);
// //     };

// //     const handleChangeRowsPerPage = (event) => {
// //         setRowsPerPage(+event.target.value);
// //         setPage(0);
// //     };

// //     ///////////////////////////////////
// //     const classes = useStyles();
// //     // console.log("users?", users?.map((item) => {
// //     //     return item
// //     // }));

// //     const toggle = () => {
// //         setToggle(!isToggledOn);
// //         // console.log(isToggledOn);
// //     };

// //     // const toggle = (toggledState) => {
// //     //     dispatchs({
// //     //         type: TOGGLE,
// //     //         payload: {
// //     //             toggledState: toggledState,
// //     //         },
// //     //     });
// //     // };

// //     const Block = (id) => {
// //         dispatch(blockUser(id))
// //     }

// //     const UnBlock = (id) => {
// //         dispatch(UnblockUser(id))
// //     }

// //     return (

// //         <>

// //             < StyledTableRow >
// //                 <StyledTableCell align="center"
// //                     className={items.is_blocked === 0 ? 'display' : ""}>{items.user_name}</StyledTableCell>
// //                 <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_email} </StyledTableCell>
// //                 <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_points}</StyledTableCell>
// //                 <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_device_type}</StyledTableCell>
// //                 {
// //                     items?.is_member === true ? <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Subscribed</StyledTableCell> : <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Unsubscribed</StyledTableCell>
// //                 }
// //                 <StyledTableCell align="center">
// //                     <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                         // onClick={(e) => DeleteCategory(items._id)}
// //                         onClick={() => confirm(items._id)}
// //                     ><CancelIcon /></Button>
// //                     <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                         // onClick={(e) => DeleteCategory(items._id)}
// //                         // onClick={() => confirm(items._id)}
// //                         onClick={toggle}
// //                     >
// //                         {isToggledOn
// //                             ?
// //                             <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                                 // onClick={(e) => DeleteCategory(items._id)}
// //                                 // onClick={() => confirm(items._id)}
// //                                 onClick={(e) => Block(items._id)}
// //                             >Block</Button>
// //                             : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
// //                                 // onClick={(e) => DeleteCategory(items._id)}
// //                                 onClick={(e) => UnBlock(items._id)}
// //                             >UnBlock</Button>
// //                         }
// //                     </span>
// //                 </StyledTableCell>
// //             </StyledTableRow>

// //         </>

// //     )

// // }

// // export default TableSingleRow

import React, { useEffect, useState, useReducer } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminApproval,
  userlist,
  users__Delete,
  blockUser,
  UnblockUser,
  condBaseUsers,
} from "../../actions/userAction";
import toast, { Toaster } from "react-hot-toast";
///////////////////////////////////////
import { TOGGLE } from "../../constents/constents";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import TablePagination from "@material-ui/core/TablePagination";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { CSVLink } from "react-csv";
import Moment from "react-moment";
import moment from "moment";
import { userReducer, initState } from "../../reducers/userReducer";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
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
    width: "100%",
  },
  container: {
    maxHeight: 700,
  },
});

//////////////////
const TableSingleRow = (props) => {
  const [toggles, setToggles] = React.useState("");
  const { items, index, purchaseUsers, length } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const [is_member, setIs_member] = useState(false);
  const [isToggledOn, setToggle] = useState(items.is_blocked);
  const [block, setBlock] = useState(false);

  const {
    users,
    newUser,
    adminApprovalStatus,
    deleteUSERS,
    blockusers,
    UnblockBlockusers,
  } = useSelector((state) => state.userReducer);
  //console.log('login user data',user._id);

  const [state, dispatchs] = useReducer(userReducer, initState);

  const { isEdit } = state;

  const [tablebody, setTableBody] = useState([]);

  const dispatch = useDispatch();

  // console.log("users_in_component:", users);
  // useEffect(() => {
  //     // dispatch(userlist());
  //     dispatch(condBaseUsers())

  // }, []);
  /////////////////////////////////////////////////////////////////////
  const DeleteCategory = (category_id) => {
    dispatch(users__Delete(category_id));
    // console.log("category_id:", category_id);
  };
  const confirm = (category_id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          // onClick: () => alert('Click ggg')
          onClick: () => {
            dispatch(users__Delete(category_id));
            // dispatch(condBaseUsers())
            // callbackFun()
            window.location.reload([false]);
          },
        },
        {
          label: "No",
          onClick: () => {
            // dispatch(userlist());
            dispatch(condBaseUsers());
          },
        },
      ],
    });
  };

  // const callbackFun = () => {
  //     // dispatch(condBaseUsers())
  //     console.log("pppppppppppppppppppppp");
  //     if (deleteUSERS) {
  //         dispatch(condBaseUsers())
  //     }
  // }

  // useEffect(() => {
  //     if (deleteUSERS) {
  //         toast.error(deleteUSERS.msg);
  //     }
  //     // dispatch(userlist());
  //     dispatch(condBaseUsers())
  // }, [deleteUSERS])

  // useEffect(() => {
  //     if (blockusers) {
  //         toast.error(blockusers.msg);
  //     }
  //     // dispatch(userlist());
  //     dispatch(condBaseUsers())

  // }, [blockusers])

  // useEffect(() => {
  //     if (UnblockBlockusers) {
  //         toast.error(UnblockBlockusers.msg);
  //     }
  //     dispatch(condBaseUsers())
  //     // dispatch(userlist());
  // }, [UnblockBlockusers])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  ///////////////////////////////////
  const classes = useStyles();
  // console.log("users?", users?.map((item) => {
  //     return item
  // }));

  const toggle = () => {
    setToggle(!isToggledOn);
    // console.log(isToggledOn);
  };

  // const toggle = (toggledState) => {
  //     dispatchs({
  //         type: TOGGLE,
  //         payload: {
  //             toggledState: toggledState,
  //         },
  //     });
  // };

  const Block = (id) => {
    dispatch(blockUser(id));

    // if (blockusers) {
    dispatch(condBaseUsers());
    // }
  };

  const UnBlock = (id) => {
    dispatch(UnblockUser(id));
    dispatch(condBaseUsers());
  };

  let increment = 0;

  // console.log("length:", length);
  console.log("items:", items);
  // console.log("purchaseUsers?.data?????", purchaseUsers?.data);

  return (
    <>
      {
        // // isToggledOns && items?.is_member === false || isToggledOnsA && items.user_device_type?.toLowerCase() === "ios" || isToggledOnssI && items.user_device_type?.toLowerCase() === "android" ? "" : < StyledTableRow >
        // < StyledTableRow >
        //     {/* <StyledTableCell align="center">{index + 1} </StyledTableCell> */}
        //     <StyledTableCell align="center"
        //         className={items.is_blocked === 0 ? 'display' : ""}>{items.user_name}</StyledTableCell>
        //     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_email} </StyledTableCell>
        //     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_points}</StyledTableCell>
        //     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_device_type}</StyledTableCell>
        //     {
        //         items?.is_member === true ? <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Subscribed</StyledTableCell> : <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Unsubscribed</StyledTableCell>
        //     }
        //     {/* <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.createdAt.substring(0, 10)}</StyledTableCell> */}
        //     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>
        //         <Moment format="MM-DD-YYYY">
        //             {items.createdAt.substring(0, 10)}
        //         </Moment>
        //     </StyledTableCell>

        //     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{
        //         // purchaseUsers?.data.filter((item) => ( item.user_id.includes(items._id)))

        //         purchaseUsers?.data.filter((item, index) => {
        //             return item.user_id.includes(items._id)
        //         }).map((allItems, index) => {
        //             // console.log("allItems", allItems);
        //             const temp = JSON.parse(allItems?.receipt);
        //             // console.log("temp:", temp);
        //             return temp.productId
        //         })

        //     }</StyledTableCell>
        //     <StyledTableCell align="center">
        //         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //             // onClick={(e) => DeleteCategory(items._id)}
        //             onClick={() => confirm(items._id)}
        //         ><CancelIcon /></Button>
        //         <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //             // onClick={(e) => DeleteCategory(items._id)}
        //             // onClick={() => confirm(items._id)}
        //             onClick={toggle}
        //         >
        //             {isToggledOn
        //                 ?
        //                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //                     // onClick={(e) => DeleteCategory(items._id)}
        //                     // onClick={() => confirm(items._id)}
        //                     onClick={(e) => Block(items._id)}
        //                 >Block</Button>
        //                 : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
        //                     // onClick={(e) => DeleteCategory(items._id)}
        //                     onClick={(e) => UnBlock(items._id)}
        //                 >UnBlock</Button>
        //             }
        //         </span>
        //     </StyledTableCell>
        // </StyledTableRow>

        // isToggledOns && items?.is_member === false || isToggledOnsA && items.user_device_type?.toLowerCase() === "ios" || isToggledOnssI && items.user_device_type?.toLowerCase() === "android" ? "" : < StyledTableRow >
        <StyledTableRow>
          <StyledTableCell align="center">
            {
              // 1 + increment++
              // length
              index + 1
            }
          </StyledTableCell>
          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {items?.user_name}
          </StyledTableCell>
          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {items?.user_gender}
          </StyledTableCell>
          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {items?.user_email}{" "}
          </StyledTableCell>
          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {items?.user_points}
          </StyledTableCell>
          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {items?.user_device_type}
          </StyledTableCell>
          {items?.is_member === true ? (
            <StyledTableCell
              align="center"
              className={items?.is_blocked === 0 ? "display" : ""}
            >
              Subscribed
            </StyledTableCell>
          ) : (
            <StyledTableCell
              align="center"
              className={items?.is_blocked === 0 ? "display" : ""}
            >
              Unsubscribed
            </StyledTableCell>
          )}
          {/* <StyledTableCell align="center" >{items.createdAt.substring(0, 10)}</StyledTableCell> */}
          <StyledTableCell
            colSpan={2}
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            <Moment format="MM-DD-YYYY">{items.createdAt.substring(0, 10)}</Moment>
          </StyledTableCell>

          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {
              // purchaseUsers?.data.filter((item) => ( item.user_id.includes(items._id)))

              purchaseUsers?.data
                .filter((item, index) => {
                  return item?.user_id.includes(items?._id);
                })
                ?.map((allItems, index) => {
                  // let temp
                  // if (typeof (allItems) == 'string') {

                  //     temp = JSON.parse(allItems?.receipt);

                  // }
                  // else if (typeof (allItems) == Object) {
                  //     temp = allItems?.receipt
                  // }

                  // return temp?.productId

                  return allItems?.plan_duration;
                })
            }
          </StyledTableCell>

          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {
              // purchaseUsers?.data.filter((item) => ( item.user_id.includes(items._id)))

              purchaseUsers?.data
                .filter((item, index) => {
                  return item?.user_id.includes(items?._id);
                })
                ?.map((allItems, index) => {
                  // let temp
                  // if (typeof (allItems) == 'string') {

                  //     temp = JSON.parse(allItems?.receipt);

                  // }
                  // else if (typeof (allItems) == Object) {
                  //     temp = allItems?.receipt
                  // }

                  // return temp?.productId

                  // return allItems?.date.substring(0, 10)

                  return (
                    <Moment format="MM-DD-YYYY">
                      {allItems?.date?.substring(0, 10)}
                    </Moment>
                  );
                })
            }
          </StyledTableCell>

          <StyledTableCell
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            {purchaseUsers?.data
              .filter((item, index) => {
                return item?.user_id.includes(items._id);
              })
              .map((allItems, index) => {
                // // const SubTime = allItems?.createdAt.substring(0, 10)
                // const SubTime = allItems?.date.substring(0, 10)

                // let temp
                // if (typeof (allItems) == 'string') {

                //     temp = JSON.parse(allItems?.receipt);

                // }
                // else if (typeof (allItems) == Object) {
                //     temp = allItems?.receipt
                // }

                // // const temp = JSON.parse(allItems?.receipt);

                // // if (temp?.productId === "monthly_plan") {
                // if (allItems?.plan_duration === "monthly_plan") {
                //     const second = new Date(SubTime);
                //     // const TotalTime = second.setDate(second.getDate() + 30);
                //     const TotalTime = second.setMonth(second.getMonth() + 1);
                //     return <Moment format="MM-DD-YYYY">
                //         {TotalTime}
                //     </Moment>
                //     // } else if (temp?.productId === "yearly_plan") {
                // } else if (allItems?.plan_duration === "yearly_plan") {
                //     const third = new Date(SubTime);
                //     const TotalTime = third.setFullYear(third.getFullYear() + 1);
                //     return <Moment format="MM-DD-YYYY">
                //         {TotalTime}
                //     </Moment>
                // }

                return (
                  <Moment format="MM-DD-YYYY">
                    {allItems?.expiryDate.substring(0, 10)}
                  </Moment>
                );
              })}
          </StyledTableCell>

          <StyledTableCell align="center">
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "5px", outline: "none" }}
              // onClick={(e) => DeleteCategory(items._id)}
              onClick={() => confirm(items?._id)}
            >
              <CancelIcon />
            </Button>
            <span
              variant="contained"
              color="secondary"
              style={{ margin: "5px", outline: "none" }}
              // onClick={(e) => DeleteCategory(items._id)}
              // onClick={() => confirm(items._id)}
              onClick={toggle}
            >
              {isToggledOn ? (
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "5px", outline: "none" }}
                  // onClick={(e) => DeleteCategory(items._id)}
                  // onClick={() => confirm(items._id)}
                  onClick={(e) => Block(items?._id)}
                >
                  Block
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "5px", outline: "none" }}
                  // onClick={(e) => DeleteCategory(items._id)}
                  onClick={(e) => UnBlock(items?._id)}
                >
                  UnBlock
                </Button>
              )}
            </span>
          </StyledTableCell>
        </StyledTableRow>

        // // isToggledOns && items?.is_member === false || isToggledOnsA && items.user_device_type?.toLowerCase() === "ios" || isToggledOnssI && items.user_device_type?.toLowerCase() === "android" ? "" : < StyledTableRow >
        // < StyledTableRow >
        //     {/* <StyledTableCell align="center">{index + 1} </StyledTableCell> */}
        //     <StyledTableCell align="center"
        //     >{items.user_name}</StyledTableCell>
        //     <StyledTableCell align="center" >{items.user_email} </StyledTableCell>
        //     <StyledTableCell align="center" >{items.user_points}</StyledTableCell>
        //     <StyledTableCell align="center" >{items.user_device_type}</StyledTableCell>
        //     {
        //         items?.is_member === true ? <StyledTableCell align="center" >Subscribed</StyledTableCell> : <StyledTableCell align="center" >Unsubscribed</StyledTableCell>
        //     }
        //     {/* <StyledTableCell align="center" >{items.createdAt.substring(0, 10)}</StyledTableCell> */}
        //     <StyledTableCell colSpan={2} align="center" >
        //         <Moment format="MM-DD-YYYY">
        //             {items.createdAt.substring(0, 10)}
        //         </Moment>
        //     </StyledTableCell>

        //     <StyledTableCell align="center" >{
        //         // purchaseUsers?.data.filter((item) => ( item.user_id.includes(items._id)))

        //         purchaseUsers?.data.filter((item, index) => {
        //             return item.user_id.includes(items._id)
        //         }).map((allItems, index) => {
        //             // console.log("allItems", allItems);
        //             const temp = JSON.parse(allItems?.receipt);
        //             // console.log("temp:", temp);
        //             return temp.productId
        //         })

        //     }</StyledTableCell>
        //     <StyledTableCell align="center" >{
        //         purchaseUsers?.data.filter((item, index) => {
        //             return item?.user_id.includes(items._id)
        //         }).map((allItems, index) => {

        //             const SubTime = allItems?.createdAt.substring(0, 10)
        //             const temp = JSON.parse(allItems?.receipt);

        //             if (temp.productId === "monthly_plan") {
        //                 const second = new Date(SubTime);
        //                 // const TotalTime = second.setDate(second.getDate() + 30);
        //                 const TotalTime = second.setMonth(second.getMonth() + 1);
        //                 return <Moment format="MM-DD-YYYY">
        //                     {TotalTime}
        //                 </Moment>
        //             } else if (temp.productId === "yearly_plan") {
        //                 const third = new Date(SubTime);
        //                 const TotalTime = third.setFullYear(third.getFullYear() + 1);
        //                 return <Moment format="MM-DD-YYYY">
        //                     {TotalTime}
        //                 </Moment>
        //             }
        //         })
        //     }</StyledTableCell>
        //     <StyledTableCell align="center">
        //         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //             // onClick={(e) => DeleteCategory(items._id)}
        //             onClick={() => confirm(items._id)}
        //         ><CancelIcon /></Button>
        //         <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //             // onClick={(e) => DeleteCategory(items._id)}
        //             // onClick={() => confirm(items._id)}
        //             onClick={toggle}
        //         >
        //             {isToggledOn
        //                 ?
        //                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
        //                     // onClick={(e) => DeleteCategory(items._id)}
        //                     // onClick={() => confirm(items._id)}
        //                     onClick={(e) => Block(items._id)}
        //                 >Block</Button>
        //                 : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
        //                     // onClick={(e) => DeleteCategory(items._id)}
        //                     onClick={(e) => UnBlock(items._id)}
        //                 >UnBlock</Button>
        //             }
        //         </span>
        //     </StyledTableCell>
        // </StyledTableRow>
      }
    </>
  );
};

export default TableSingleRow;

//////////////////////////////////////////////////////////////////////////////////////

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
// import {
//     userReducer,
//     initState
// } from "../../reducers/userReducer";

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
// const TableSingleRow = (props) => {

//     const { items, toggleUSer } = props
//     console.log("items:", items);
//     console.log("toggleUSer:", toggleUSer);
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//     // const [is_member, setIs_member] = useState(false);
//     const [isToggledOn, setToggle] = useState(items.is_blocked);
//     const [block, setBlock] = useState(false);

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

//     useEffect(() => {
//         if (blockusers) {
//             toast.error(blockusers.msg);
//         }
//         dispatch(userlist());
//     }, [blockusers])

//     useEffect(() => {
//         if (UnblockBlockusers) {
//             toast.error(UnblockBlockusers.msg);
//         }
//         dispatch(userlist());
//     }, [UnblockBlockusers])

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     ///////////////////////////////////
//     const classes = useStyles();
//     console.log("users?", users?.map((item) => {
//         return item
//     }));

//     const toggle = () => {
//         setToggle(!isToggledOn);
//         console.log(isToggledOn);
//     };

//     // const toggle = (toggledState) => {
//     //     dispatchs({
//     //         type: TOGGLE,
//     //         payload: {
//     //             toggledState: toggledState,
//     //         },
//     //     });
//     // };

//     const Block = (id) => {
//         dispatch(blockUser(id))
//     }

//     const UnBlock = (id) => {
//         dispatch(UnblockUser(id))
//     }

//     return <StyledTableRow>

//         <StyledTableCell align="center"
//             className={items.is_blocked === 0 ? 'display' : ""}>{items.user_name}</StyledTableCell>
//         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_email} </StyledTableCell>
//         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_points}</StyledTableCell>
//         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_device_type}</StyledTableCell>
//         {
//             items?.is_member === true ? <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Subscribed</StyledTableCell> : <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Unsubscribed</StyledTableCell>
//         }

//         <StyledTableCell align="center">

//             <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                 // onClick={(e) => DeleteCategory(items._id)}
//                 onClick={() => confirm(items._id)}
//             ><CancelIcon /></Button>

//             <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                 // onClick={(e) => DeleteCategory(items._id)}
//                 // onClick={() => confirm(items._id)}
//                 onClick={toggle}
//             >
//                 {isToggledOn
//                     ?
//                     <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                         // onClick={(e) => DeleteCategory(items._id)}
//                         // onClick={() => confirm(items._id)}
//                         onClick={(e) => Block(items._id)}
//                     >Block</Button>
//                     : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
//                         // onClick={(e) => DeleteCategory(items._id)}
//                         onClick={(e) => UnBlock(items._id)}
//                     >UnBlock</Button>
//                 }
//             </span>

//         </StyledTableCell>

//         {/*
//         <StyledTableCell align="center">

//             <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                 // onClick={(e) => DeleteCategory(items._id)}
//                 onClick={() => confirm(items._id)}
//             ><CancelIcon /></Button>

//             {state.isEdit ? (

//                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                     // onClick={(e) => DeleteCategory(items._id)}
//                     // onClick={(e) => Block(items._id)}
//                     onClick={() => { toggle("isEdit"); Block(items._id) }}
//                 >Block</Button>
//             ) : (
//                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                     // onClick={(e) => DeleteCategory(items._id)}
//                     // onClick={(e) => UnBlock(items._id)}
//                     onClick={() => { toggle("isEdit"); UnBlock(items._id) }}
//                 >UnBlock</Button>
//             )}

//         </StyledTableCell>
//  */}

//     </StyledTableRow>

// }

// export default TableSingleRow

// before

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
// import { CSVLink } from "react-csv";
// import {
//     userReducer,
//     initState
// } from "../../reducers/userReducer";

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
// const TableSingleRow = (props) => {
//     const [toggles, setToggles] = React.useState("");
//     const { items, isToggledOns, isToggledOnsA, isToggledOnssI, index } = props
//     // console.log("items:", items);
//     console.log("isToggledOns:", isToggledOns);

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);

//     // const [is_member, setIs_member] = useState(false);
//     const [isToggledOn, setToggle] = useState(items.is_blocked);
//     const [block, setBlock] = useState(false);

//     const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers } = useSelector((state) => state.userReducer);
//     //console.log('login user data',user._id);

//     const [state, dispatchs] = useReducer(userReducer, initState);

//     const { isEdit } = state;

//     const [tablebody, setTableBody] = useState([]);

//     const dispatch = useDispatch();

//     // console.log("users_in_component:", users);
//     useEffect(() => {
//         dispatch(userlist());
//     }, []);
//     /////////////////////////////////////////////////////////////////////
//     const DeleteCategory = (category_id) => {
//         dispatch(users__Delete(category_id));
//         // console.log("category_id:", category_id);
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

//     useEffect(() => {
//         if (blockusers) {
//             toast.error(blockusers.msg);
//         }
//         dispatch(userlist());
//     }, [blockusers])

//     useEffect(() => {
//         if (UnblockBlockusers) {
//             toast.error(UnblockBlockusers.msg);
//         }
//         dispatch(userlist());
//     }, [UnblockBlockusers])

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     ///////////////////////////////////
//     const classes = useStyles();
//     // console.log("users?", users?.map((item) => {
//     //     return item
//     // }));

//     const toggle = () => {
//         setToggle(!isToggledOn);
//         // console.log(isToggledOn);
//     };

//     // const toggle = (toggledState) => {
//     //     dispatchs({
//     //         type: TOGGLE,
//     //         payload: {
//     //             toggledState: toggledState,
//     //         },
//     //     });
//     // };

//     const Block = (id) => {
//         dispatch(blockUser(id))
//     }

//     const UnBlock = (id) => {
//         dispatch(UnblockUser(id))
//     }

//     return (

//         <>

//             {

//                 isToggledOns && items?.is_member === false || isToggledOnsA && items.user_device_type?.toLowerCase() === "ios" || isToggledOnssI && items.user_device_type?.toLowerCase() === "android" ? "" : < StyledTableRow >
//                     <StyledTableCell align="center">{index + 1} </StyledTableCell>
//                     <StyledTableCell align="center"
//                         className={items.is_blocked === 0 ? 'display' : ""}>{items.user_name}</StyledTableCell>
//                     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_email} </StyledTableCell>
//                     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_points}</StyledTableCell>
//                     <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_device_type}</StyledTableCell>
//                     {
//                         items?.is_member === true ? <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Subscribed</StyledTableCell> : <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Unsubscribed</StyledTableCell>
//                     }
//                     <StyledTableCell align="center">
//                         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                             // onClick={(e) => DeleteCategory(items._id)}
//                             onClick={() => confirm(items._id)}
//                         ><CancelIcon /></Button>
//                         <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                             // onClick={(e) => DeleteCategory(items._id)}
//                             // onClick={() => confirm(items._id)}
//                             onClick={toggle}
//                         >
//                             {isToggledOn
//                                 ?
//                                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                                     // onClick={(e) => DeleteCategory(items._id)}
//                                     // onClick={() => confirm(items._id)}
//                                     onClick={(e) => Block(items._id)}
//                                 >Block</Button>
//                                 : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
//                                     // onClick={(e) => DeleteCategory(items._id)}
//                                     onClick={(e) => UnBlock(items._id)}
//                                 >UnBlock</Button>
//                             }
//                         </span>
//                     </StyledTableCell>
//                 </StyledTableRow>

//             }

//         </>

//     )

// }

// export default TableSingleRow

// //////////////////////////////////////////////////////////////////////////////////////

// // import React, { useEffect, useState, useReducer } from 'react';
// // import { MDBDataTableV5 } from 'mdbreact';
// // import { Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { adminApproval, userlist, users__Delete, blockUser, UnblockUser } from '../../actions/userAction';
// // import toast, { Toaster } from 'react-hot-toast';
// // ///////////////////////////////////////
// // import {
// //     TOGGLE
// // } from "../../constents/constents";
// // import { withStyles, makeStyles } from '@material-ui/core/styles';
// // // import { withStyles } from '@material-ui/core/styles';
// // import Table from '@material-ui/core/Table';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableCell from '@material-ui/core/TableCell';
// // import TableContainer from '@material-ui/core/TableContainer';
// // import TableHead from '@material-ui/core/TableHead';
// // import TableRow from '@material-ui/core/TableRow';
// // import Paper from '@material-ui/core/Paper';
// // import Button from '@material-ui/core/Button';
// // import CancelIcon from '@material-ui/icons/Cancel';
// // import DoneIcon from '@material-ui/icons/Done';
// // import EditIcon from '@material-ui/icons/Edit';
// // import TextField from '@material-ui/core/TextField';
// // import TablePagination from '@material-ui/core/TablePagination';
// // import { confirmAlert } from 'react-confirm-alert'; // Import
// // import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// // import {
// //     userReducer,
// //     initState
// // } from "../../reducers/userReducer";

// // const StyledTableCell = withStyles(theme => ({
// //     head: {
// //         backgroundColor: theme.palette.common.black,
// //         color: theme.palette.common.white,
// //     },
// //     body: {
// //         fontSize: 14,
// //     },
// // }))(TableCell);

// // const StyledTableRow = withStyles(theme => ({
// //     root: {
// //         '&:nth-of-type(odd)': {
// //             backgroundColor: theme.palette.background.default,
// //         },
// //     },
// // }))(TableRow);

// // // const useStyles = makeStyles({
// // // 	table: {
// // // 		minWidth: 700,
// // // 	},
// // // });

// // const useStyles = makeStyles({
// //     root: {
// //         width: '100%',
// //     },
// //     container: {
// //         maxHeight: 700,
// //     },
// // });

// // //////////////////
// // const TableSingleRow = (props) => {

// //     const { items, toggleUSer } = props
// //     console.log("items:", items);
// //     console.log("toggleUSer:", toggleUSer);
// //     const [page, setPage] = React.useState(0);
// //     const [rowsPerPage, setRowsPerPage] = React.useState(5);
// //     // const [is_member, setIs_member] = useState(false);
// //     const [isToggledOn, setToggle] = useState(items.is_blocked);
// //     const [block, setBlock] = useState(false);

// //     const { users, newUser, adminApprovalStatus, deleteUSERS, blockusers, UnblockBlockusers } = useSelector((state) => state.userReducer);
// //     //console.log('login user data',user._id);

// //     const [state, dispatchs] = useReducer(userReducer, initState);

// //     const { isEdit } = state;

// //     const [tablebody, setTableBody] = useState([]);

// //     const dispatch = useDispatch();

// //     console.log("users_in_component:", users);
// //     useEffect(() => {
// //         dispatch(userlist());
// //     }, []);
// //     /////////////////////////////////////////////////////////////////////
// //     const DeleteCategory = (category_id) => {
// //         dispatch(users__Delete(category_id));
// //         console.log("category_id:", category_id);
// //     }
// //     const confirm = (category_id) => {
// //         confirmAlert({
// //             title: 'Confirm to Delete',
// //             message: 'Are you sure to delete this.',
// //             buttons: [
// //                 {
// //                     label: 'Yes',
// //                     // onClick: () => alert('Click ggg')
// //                     onClick: () => {
// //                         dispatch(users__Delete(category_id));
// //                     }
// //                 },
// //                 {
// //                     label: 'No',
// //                     onClick: () => {
// //                         dispatch(userlist());
// //                     }
// //                 }
// //             ]
// //         });
// //     }
// //     useEffect(() => {
// //         if (deleteUSERS) {
// //             toast.error(deleteUSERS.msg);
// //         }
// //         dispatch(userlist());
// //     }, [deleteUSERS])

// //     useEffect(() => {
// //         if (blockusers) {
// //             toast.error(blockusers.msg);
// //         }
// //         dispatch(userlist());
// //     }, [blockusers])

// //     useEffect(() => {
// //         if (UnblockBlockusers) {
// //             toast.error(UnblockBlockusers.msg);
// //         }
// //         dispatch(userlist());
// //     }, [UnblockBlockusers])

// //     const handleChangePage = (event, newPage) => {
// //         setPage(newPage);
// //     };

// //     const handleChangeRowsPerPage = (event) => {
// //         setRowsPerPage(+event.target.value);
// //         setPage(0);
// //     };

// //     ///////////////////////////////////
// //     const classes = useStyles();
// //     console.log("users?", users?.map((item) => {
// //         return item
// //     }));

// //     const toggle = () => {
// //         setToggle(!isToggledOn);
// //         console.log(isToggledOn);
// //     };

// //     // const toggle = (toggledState) => {
// //     //     dispatchs({
// //     //         type: TOGGLE,
// //     //         payload: {
// //     //             toggledState: toggledState,
// //     //         },
// //     //     });
// //     // };

// //     const Block = (id) => {
// //         dispatch(blockUser(id))
// //     }

// //     const UnBlock = (id) => {
// //         dispatch(UnblockUser(id))
// //     }

// //     return <StyledTableRow>

// //         <StyledTableCell align="center"
// //             className={items.is_blocked === 0 ? 'display' : ""}>{items.user_name}</StyledTableCell>
// //         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_email} </StyledTableCell>
// //         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_points}</StyledTableCell>
// //         <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>{items.user_device_type}</StyledTableCell>
// //         {
// //             items?.is_member === true ? <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Subscribed</StyledTableCell> : <StyledTableCell align="center" className={items.is_blocked === 0 ? 'display' : ""}>Unsubscribed</StyledTableCell>
// //         }

// //         <StyledTableCell align="center">

// //             <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                 // onClick={(e) => DeleteCategory(items._id)}
// //                 onClick={() => confirm(items._id)}
// //             ><CancelIcon /></Button>

// //             <span variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                 // onClick={(e) => DeleteCategory(items._id)}
// //                 // onClick={() => confirm(items._id)}
// //                 onClick={toggle}
// //             >
// //                 {isToggledOn
// //                     ?
// //                     <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                         // onClick={(e) => DeleteCategory(items._id)}
// //                         // onClick={() => confirm(items._id)}
// //                         onClick={(e) => Block(items._id)}
// //                     >Block</Button>
// //                     : <Button variant="contained" color="primary" style={{ margin: "5px", outline: "none" }}
// //                         // onClick={(e) => DeleteCategory(items._id)}
// //                         onClick={(e) => UnBlock(items._id)}
// //                     >UnBlock</Button>
// //                 }
// //             </span>

// //         </StyledTableCell>

// //         {/*
// //         <StyledTableCell align="center">

// //             <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                 // onClick={(e) => DeleteCategory(items._id)}
// //                 onClick={() => confirm(items._id)}
// //             ><CancelIcon /></Button>

// //             {state.isEdit ? (

// //                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                     // onClick={(e) => DeleteCategory(items._id)}
// //                     // onClick={(e) => Block(items._id)}
// //                     onClick={() => { toggle("isEdit"); Block(items._id) }}
// //                 >Block</Button>
// //             ) : (
// //                 <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
// //                     // onClick={(e) => DeleteCategory(items._id)}
// //                     // onClick={(e) => UnBlock(items._id)}
// //                     onClick={() => { toggle("isEdit"); UnBlock(items._id) }}
// //                 >UnBlock</Button>
// //             )}

// //         </StyledTableCell>
// //  */}

// //     </StyledTableRow>

// // }

// // export default TableSingleRow
