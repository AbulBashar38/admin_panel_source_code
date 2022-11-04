import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminApproval,
  userlist,
  dateCardsListAction,
  Date_cards_Delete,
  Date_cards_Edit,
  sub_plans_list,
  subscription_plans_Delete,
  subscription_plans_Edit
} from "../../actions/userAction";
import toast, { Toaster } from "react-hot-toast";
///////////////////////////////////////////////////

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
import { connect } from "react-redux";

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
//     table: {
//         minWidth: 700,
//     },
// });

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 700,
  },
});

const DateCardsList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {
    users,
    newUser,
    adminApprovalStatus,
    subscriptionPlansList,
    deleteCategory,
    categoryEditUpdate,
    user,
    subscription_plans_EditUpdate,
  } = useSelector((state) => state.userReducer);
  const [tablebody, setTableBody] = useState([]);
  const [editText, setEditText] = useState(false);
  const [editDateCardInfo, setEditDateCardInfo] = useState({
    subscription_title: "",
    subscription_description: "",
    subscription_price: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sub_plans_list());
  }, []);

  const confirm = (category_id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(subscription_plans_Delete(category_id));
            dispatch(sub_plans_list());
          },
        },
        {
          label: "No",
          onClick: () => {
            dispatch(sub_plans_list());
          },
        },
      ],
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteCategory = (category_id) => {
    dispatch(Date_cards_Delete(category_id));
    console.log("category_id:", category_id);
  };
  useEffect(() => {
    if (deleteCategory) {
      toast.error(deleteCategory.msg);
    }
    dispatch(sub_plans_list());
  }, [deleteCategory]);

  const EditCategory = (category_id, editDateCardInfo) => {
    dispatch(subscription_plans_Edit(category_id, editDateCardInfo));
    console.log("category_id:", category_id);
  };
  useEffect(() => {
    if (subscription_plans_EditUpdate) {
      dispatch(sub_plans_list());
      setEditText(false);
    }
    dispatch(subscription_plans_Edit());
  }, [subscription_plans_EditUpdate]);

  const classes = useStyles();
  return (
    <div>
      <div
        className="block-header"
        style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
      >
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <h1 style={{ fontSize: "30px" }}>All Subscription Plans list</h1>
          </div>
        </div>
      </div>

      <Paper>
        <TableContainer component={Paper} style={{ marginTop: "10px" }}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">price</StyledTableCell>
                <StyledTableCell align="center">Operations</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscriptionPlansList?.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((items, index) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center">
                        {editText ? (
                          <TextField
                            defaultValue={items.subscription_title}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setEditDateCardInfo({
                                ...editDateCardInfo,
                                subscription_title: e.target.value,
                              });
                            }}
                          />
                        ) : (
                          <p>{items.subscription_title}</p>
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {editText ? (
                          <TextField
                            defaultValue={items.subscription_description}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setEditDateCardInfo({
                                ...editDateCardInfo,
                                subscription_description: e.target.value,
                              });
                            }}
                          />
                        ) : (
                          <p>{items.subscription_description}</p>
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {editText ? (
                          <TextField
                            defaultValue={items.subscription_price}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setEditDateCardInfo({
                                ...editDateCardInfo,
                                subscription_price: e.target.value,
                              });
                            }}
                          />
                        ) : (
                          <p>{items.subscription_price}</p>
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {!editText ? (
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ outline: "none" }}
                            onClick={(e) => {
                              console.log("clicked!!");
                              setEditText(!editText);
                              
                            }}
                          >
                            <EditIcon />
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ outline: "none" }}
                            onClick={(e) => {
                              EditCategory(items?._id, editDateCardInfo);
                            }}
                          >
                            SAVE
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ margin: "5px", outline: "none" }}
                          onClick={() => confirm(items._id)}
                        >
                          <CancelIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 50, 100]}
          component="div"
          count={subscriptionPlansList?.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

// export default DateCardsList

function mapStateToProps(rec) {
  //   console.log("rec.userReducer.user_object:", rec.userReducer.user);
  //   console.log("rec.userReducer.user:", rec.userReducer.user._id);
  return {
    adminId: rec.userReducer.user._id,
  };
}
export default connect(mapStateToProps)(DateCardsList);


// import React, { useEffect, useState } from "react";
// import { MDBDataTableV5 } from "mdbreact";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   adminApproval,
//   userlist,
//   dateCardsListAction,
//   Date_cards_Delete,
//   Date_cards_Edit,
//   sub_plans_list,
//   subscription_plans_Delete,
//   subscription_plans_Edit,
// } from "../../actions/userAction";
// import toast, { Toaster } from "react-hot-toast";
// ///////////////////////////////////////////////////

// import { withStyles, makeStyles } from "@material-ui/core/styles";
// // import { withStyles } from '@material-ui/core/styles';
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import CancelIcon from "@material-ui/icons/Cancel";
// import DoneIcon from "@material-ui/icons/Done";
// import EditIcon from "@material-ui/icons/Edit";
// import TextField from "@material-ui/core/TextField";
// import TablePagination from "@material-ui/core/TablePagination";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { connect } from "react-redux";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

// // const useStyles = makeStyles({
// //     table: {
// //         minWidth: 700,
// //     },
// // });

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
//   container: {
//     maxHeight: 700,
//   },
// });

// const DateCardsList = (props) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const {
//     users,
//     newUser,
//     adminApprovalStatus,
//     subscriptionPlansList,
//     deleteCategory,
//     categoryEditUpdate,
//     user,
//     subscription_plans_EditUpdate,
//   } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     subscription_title: "",
//     subscription_description: "",
//     subscription_price: "",
//   });

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(sub_plans_list());
//   }, []);

//   const confirm = (category_id) => {
//     confirmAlert({
//       title: "Confirm to Delete",
//       message: "Are you sure to delete this.",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             dispatch(subscription_plans_Delete(category_id));
//             dispatch(sub_plans_list());
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             dispatch(sub_plans_list());
//           },
//         },
//       ],
//     });
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const DeleteCategory = (category_id) => {
//     dispatch(Date_cards_Delete(category_id));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (deleteCategory) {
//       toast.error(deleteCategory.msg);
//     }
//     dispatch(sub_plans_list());
//   }, [deleteCategory]);

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(subscription_plans_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (subscription_plans_EditUpdate) {
//       dispatch(sub_plans_list());
//       setEditText(false);
//     }
//     dispatch(subscription_plans_Edit());
//   }, [subscription_plans_EditUpdate]);

//   const classes = useStyles();
//   return (
//     <div>
//       <div
//         className="block-header"
//         style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
//       >
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>All Subscription Plans list</h1>
//           </div>
//         </div>
//       </div>

//       <Paper>
//         <TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell align="center">Title</StyledTableCell>
//                 <StyledTableCell align="center">Description</StyledTableCell>
//                 <StyledTableCell align="center">price</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {subscriptionPlansList?.data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((items, index) => {
//                   return (
//                     <StyledTableRow>
//                       <StyledTableCell align="center">
//                         {items.subscription_title}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {items.subscription_description}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {items.subscription_price}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         <Link
//                           to={"/update_Subscription_Plans/" + items._id}
//                           style={{ textDecoration: "none", fontSize: "20px" }}
//                         >
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             style={{ outline: "none" }}
//                           >
//                             <EditIcon />
//                           </Button>
//                         </Link>

//                         <Button
//                           variant="contained"
//                           color="secondary"
//                           style={{ margin: "5px", outline: "none" }}
//                           onClick={() => confirm(items._id)}
//                         >
//                           <CancelIcon />
//                         </Button>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 50, 100]}
//           component="div"
//           count={subscriptionPlansList?.data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </div>
//   );
// };

// // export default DateCardsList

// function mapStateToProps(rec) {
//   //   console.log("rec.userReducer.user_object:", rec.userReducer.user);
//   //   console.log("rec.userReducer.user:", rec.userReducer.user._id);
//   return {
//     adminId: rec.userReducer.user._id,
//   };
// }
// export default connect(mapStateToProps)(DateCardsList);
