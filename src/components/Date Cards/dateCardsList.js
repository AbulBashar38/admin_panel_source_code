


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loader from "../Shared/Spinner"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


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
  addDateCard
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
import SingleDateCradC from "./singledateCardCmp";




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
    dateCardsList,
    deleteCategory,
    categoryEditUpdate,
    user,
  } = useSelector((state) => state.userReducer);
  const [tablebody, setTableBody] = useState([]);
  const [editText, setEditText] = useState(false);
  const [editDateCardInfo, setEditDateCardInfo] = useState({
    dateCard_name: "",
    dateCard_description: "",
  });
  const [isToggledOn, setToggle] = useState(false);
  const [allValues, setAllValues] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // debugger
    if (props.adminId) {
      dispatch(dateCardsListAction(props.adminId));

    }




  }, [props.adminId]);



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

  const EditCategory = (category_id, editDateCardInfo) => {
    dispatch(Date_cards_Edit(category_id, editDateCardInfo));
    console.log("category_id:", category_id);
  };


  const toggle = () => {
    setToggle(!isToggledOn);
    console.log(isToggledOn);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [dateCardData, setdateCardData] = useState({
    dateCard_name: "",
    dateCard_description: "",
    ageToggle: "" || false,
    user_id: props.adminId
  })
  const update = (e) => {
    setdateCardData({
      ...dateCardData,
      [e.target.name]: e.target.value,
    });

    console.log(dateCardData)
  }
  const onsubmit = (e) => {
    e.preventDefault();
    console.log("form======>", dateCardData)
    setdateCardData({ user_id: props.adminId })

    dispatch(addDateCard(dateCardData))

    handleClose()
    dispatch(dateCardsListAction(props.adminId));


  }
  const resetForm = () => {
    setdateCardData({
      dateCard_name: "",
      dateCard_description: "",
      ageToggle: "" || false
    })
  }
  const classes = useStyles();
  return (
    <div>
      <div
        className="block-header"
        style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
      >
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <h1 style={{ fontSize: "30px" }}>All Date Card Plans list</h1>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="btn_primary"
        style={{ margin: "5px", outline: "none" }}
        onClick={toggle}
      >
        {isToggledOn
          ? "Show All"
          : " Less Than 21 Years Old"}
      </Button>

      <Button variant="outlined" onClick={handleClickOpen} className="btn_secondary">
        ADD DATE CARD
      </Button>



      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Date Card</DialogTitle>
        <DialogContent>

          <Container component="main" maxWidth="xs" style={{ marginTop: "10px" }}>
            <CssBaseline />
            <div className={classes.paper}>

              <form className={classes.form} onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" noValidate >


                <TextField
                  onChange={update}
                  value={dateCardData.dateCard_name}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="dateCardName"
                  label="Enter Date Card Name"
                  name="dateCard_name"
                  autoComplete="dateCardName"
                  autoFocus
                />
                <TextField
                  onChange={update}
                  value={dateCardData.dateCard_description}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Date Card Description"
                  label="Date Card Description"
                  multiline
                  rows={10}
                  maxWidth
                  // variant="outlined"
                  name="dateCard_description"
                />


                <FormControl style={{ marginTop: "20px" }} fullWidth variant="outlined" className={classes.formControl}>
                  <h4><span>Age Above 21 ?</span></h4>

                  <select
                    name="ageToggle"
                    value={dateCardData.ageToggle}

                    id=""
                    style={{ color: "black", padding: "10px 5px" }}
                    onChange={update}

                  >

                    {/* <option  value=""> <em>---Select---</em> </option> */}
                    <option value={true}> Yes </option>
                    <option value={false}>No</option>
                  </select>
                  {/* <InputLabel
                                    style={{ marginTop: "10px", fontSize: "25px" }}
                                    ref={ref => {
                                        this.InputLabelRef = ref;
                                    }}
                                    htmlFor="outlined-age-simple"
                                >
                                    Select Under Age Twenty One
                                </InputLabel> */}
                  {/* <Select
                                    value={this.state.ageToggle}
                                    onChange={this.update}
                                    input={
                                        <OutlinedInput
                                            labelWidth={this.state.labelWidth}
                                            name="ageToggle"
                                            id="outlined-age-simple"
                                        />
                                    }
                                >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select> */}

                </FormControl>

                <span style={{ display: "flex", justifyContent: "center", }}><button
                  type="submit"
                  className="btn btn-round  mr-1"

                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px", outline: "none", fontSize: "bold", color: "white", background: "#D55187" }}

                >Save</button></span>
                <span style={{ display: "flex", justifyContent: "center" }}><button
                  type="reset"
                  className="btn btn-round  mr-1"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px", outline: "none", color: "white", background: "#D55187" }}
                  onClick={handleClose}
                >  Close</button></span>
                <br /><br />
              </form>
            </div>
          </Container>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
      <Paper>
        {dateCardsList?.data?.length > 0 ?
          <TableContainer component={Paper} style={{ marginTop: "10px" }}>

            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" className="btn_primary">Sr No.</StyledTableCell>
                  <StyledTableCell align="center" className="btn_primary">
                    DateCard Number
                  </StyledTableCell>
                  <StyledTableCell align="center" className="btn_primary">DateCard Name</StyledTableCell>
                  <StyledTableCell align="center" className="btn_primary">
                    DateCard Description
                  </StyledTableCell>
                  <StyledTableCell align="center" className="btn_primary">Average Rating</StyledTableCell>
                  <StyledTableCell align="center" className="btn_primary">Operations</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dateCardsList?.data
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((items, index) => {
                    return <SingleDateCradC isToggledOn={isToggledOn} items={items} index={index} adminId={props.adminId} />
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
//     dateCardsList,
//     deleteCategory,
//     categoryEditUpdate,
//     user,
//   } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     dateCard_name: "",
//     dateCard_description: "",
//   });
//   const [isToggledOn, setToggle] = useState(false);
//   const [allValues, setAllValues] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dateCardsListAction(props.adminId));
//     // setAllValues(dateCardsList?.data);
//     // console.log("allValues>>>>>>>>>", dateCardsList?.data);
//   }, [props.adminId]);

//   const confirm = (category_id) => {
//     confirmAlert({
//       title: "Confirm to Delete",
//       message: "Are you sure to delete this.",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             dispatch(Date_cards_Delete(category_id));
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             dispatch(dateCardsListAction(props.adminId));
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
//     dispatch(dateCardsListAction(props.adminId));
//   }, [deleteCategory]);

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (categoryEditUpdate) {
//       dispatch(dateCardsListAction(props.adminId));
//       setEditText(false);
//     }
//     dispatch(Date_cards_Edit());
//   }, [categoryEditUpdate]);

//   const toggle = () => {
//     setToggle(!isToggledOn);
//     console.log(isToggledOn);
//   };

//   const classes = useStyles();
//   return (
//     <div>
//       <div
//         className="block-header"
//         style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
//       >
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>All Date Card Plans list</h1>
//           </div>
//         </div>
//       </div>

//       <Button
//         variant="contained"
//         color="primary"
//         style={{ margin: "5px", outline: "none" }}
//         onClick={toggle}
//       >
//         {isToggledOn
//           ? "Show All"
//           : " Filter Date Plans For Less Than 21 Years Old"}
//       </Button>

//       <Paper>
//         <TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell align="center">Sr No.</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Number
//                 </StyledTableCell>
//                 <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Description
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Average Rating</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dateCardsList?.data
//                 // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((items, index) => {
//                   if (isToggledOn) {
//                     if (items?.ageToggle === true) {
//                       return (
//                         <StyledTableRow>
//                           {
//                             <StyledTableCell align="center">
//                               {index + 1}
//                             </StyledTableCell>
//                           }
//                           <StyledTableCell align="center">
//                             {items.dateCard_number}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_name}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_name: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_name}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_description}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_description: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_description}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {items.average_rating}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {!editText ? (
//                               <Button
//                                 variant="contained"
//                                 color="primary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   console.log("clicked!!");
//                                   setEditText(!editText);
//                                 }}
//                               >
//                                 <EditIcon />
//                               </Button>
//                             ) : (
//                               <Button
//                                 variant="contained"
//                                 color="primary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   EditCategory(items?._id, editDateCardInfo);
//                                 }}
//                               >
//                                 SAVE
//                               </Button>
//                             )}
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ margin: "5px", outline: "none" }}
//                               onClick={() => confirm(items._id)}
//                             >
//                               <CancelIcon />
//                             </Button>
//                             {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                           </StyledTableCell>
//                         </StyledTableRow>
//                       );
//                     }
//                   } else {
//                     return (
//                       <StyledTableRow>
//                         {
//                           <StyledTableCell align="center">
//                             {index + 1}
//                           </StyledTableCell>
//                         }
//                         <StyledTableCell align="center">
//                           {items.dateCard_number}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_name}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_name: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_name}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_description}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_description: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_description}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {items.average_rating}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {!editText ? (
//                             <Button
//                               variant="contained"
//                               color="primary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 console.log("clicked!!");
//                                 setEditText(!editText);
//                               }}
//                             >
//                               <EditIcon />
//                             </Button>
//                           ) : (
//                             <Button
//                               variant="contained"
//                               color="primary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 EditCategory(items?._id, editDateCardInfo);
//                               }}
//                             >
//                               SAVE
//                             </Button>
//                           )}
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             style={{ margin: "5px", outline: "none" }}
//                             onClick={() => confirm(items._id)}
//                           >
//                             <CancelIcon />
//                           </Button>
//                           {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     );
//                   }
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
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
//     dateCardsList,
//     deleteCategory,
//     categoryEditUpdate,
//     user,
//   } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     dateCard_name: "",
//     dateCard_description: "",
//   });
//   const [isToggledOn, setToggle] = useState(false);
//   const [allValues, setAllValues] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dateCardsListAction(props.adminId));
//     // setAllValues(dateCardsList?.data);
//     // console.log("allValues>>>>>>>>>", dateCardsList?.data);
//   }, [props.adminId]);

//   const confirm = (category_id) => {
//     confirmAlert({
//       title: "Confirm to Delete",
//       message: "Are you sure to delete this.",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             dispatch(Date_cards_Delete(category_id));
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             dispatch(dateCardsListAction(props.adminId));
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
//     dispatch(dateCardsListAction(props.adminId));
//   }, [deleteCategory]);

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (categoryEditUpdate) {
//       dispatch(dateCardsListAction(props.adminId));
//       setEditText(false);
//     }
//     dispatch(Date_cards_Edit());
//   }, [categoryEditUpdate]);

//   const toggle = () => {
//     setToggle(!isToggledOn);
//     console.log(isToggledOn);
//   };

//   const classes = useStyles();
//   return (
//     <div>
//       <div
//         className="block-header"
//         style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
//       >
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>All Date Card Plans list</h1>
//           </div>
//         </div>
//       </div>

//       <Button
//         variant="contained"
//         color="primary"
//         style={{ margin: "5px", outline: "none" }}
//         onClick={toggle}
//       >
//         {isToggledOn
//           ? "Show All"
//           : " Filter Date Plans For Less Than 21 Years Old"}
//       </Button>

//       <Paper>
//         <TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell align="center">Sr No.</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Number
//                 </StyledTableCell>
//                 <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Description
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Average Rating</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dateCardsList?.data
//                 // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((items, index) => {
//                   if (isToggledOn) {
//                     if (items?.ageToggle === true) {
//                       return (
//                         <StyledTableRow>
//                           {
//                             <StyledTableCell align="center">
//                               {index + 1}
//                             </StyledTableCell>
//                           }
//                           <StyledTableCell align="center">
//                             {items.dateCard_number}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_name}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_name: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_name}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_description}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_description: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_description}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {items.average_rating}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {!editText ? (
//                               <Button
//                                 variant="contained"
//                                 color="primary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   console.log("clicked!!");
//                                   setEditText(!editText);
//                                 }}
//                               >
//                                 <EditIcon />
//                               </Button>
//                             ) : (
//                               <Button
//                                 variant="contained"
//                                 color="primary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   EditCategory(items?._id, editDateCardInfo);
//                                 }}
//                               >
//                                 SAVE
//                               </Button>
//                             )}
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ margin: "5px", outline: "none" }}
//                               onClick={() => confirm(items._id)}
//                             >
//                               <CancelIcon />
//                             </Button>
//                             {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                           </StyledTableCell>
//                         </StyledTableRow>
//                       );
//                     }
//                   } else {
//                     return (
//                       <StyledTableRow>
//                         {
//                           <StyledTableCell align="center">
//                             {index + 1}
//                           </StyledTableCell>
//                         }
//                         <StyledTableCell align="center">
//                           {items.dateCard_number}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_name}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_name: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_name}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_description}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_description: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_description}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {items.average_rating}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {!editText ? (
//                             <Button
//                               variant="contained"
//                               color="primary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 console.log("clicked!!");
//                                 setEditText(!editText);
//                               }}
//                             >
//                               <EditIcon />
//                             </Button>
//                           ) : (
//                             <Button
//                               variant="contained"
//                               color="primary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 EditCategory(items?._id, editDateCardInfo);
//                               }}
//                             >
//                               SAVE
//                             </Button>
//                           )}
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             style={{ margin: "5px", outline: "none" }}
//                             onClick={() => confirm(items._id)}
//                           >
//                             <CancelIcon />
//                           </Button>
//                           {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     );
//                   }
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
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







///////////////////////
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
//     dateCardsList,
//     deleteCategory,
//     categoryEditUpdate,
//     user,
//   } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     dateCard_name: "",
//     dateCard_description: "",
//   });
//   const [isToggledOn, setToggle] = useState(false);
//   // const [allValues, setAllValues] = useState("");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dateCardsListAction(props.adminId));
//     // setAllValues(dateCardsList?.data);
//     // console.log("allValues>>>>>>>>>", allValues);
//   }, [props.adminId]);

//   const confirm = (category_id) => {
//     confirmAlert({
//       title: "Confirm to Delete",
//       message: "Are you sure to delete this.",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             dispatch(Date_cards_Delete(category_id));
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             dispatch(dateCardsListAction(props.adminId));
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
//     dispatch(dateCardsListAction(props.adminId));
//   }, [deleteCategory]);

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (categoryEditUpdate) {
//       dispatch(dateCardsListAction(props.adminId));
//       setEditText(false);
//     }
//     dispatch(Date_cards_Edit());
//   }, [categoryEditUpdate]);

//   const toggle = () => {
//     setToggle(!isToggledOn);
//     console.log(isToggledOn);
//   };

//   const classes = useStyles();
//   return (
//     <div>
//       <div
//         className="block-header"
//         style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
//       >
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>All Date Card Plans list</h1>
//           </div>
//         </div>
//       </div>

//       <Button
//         variant="contained"
//         color="secondary"
//         style={{ margin: "5px", outline: "none" }}
//         onClick={toggle}
//       >
//         {isToggledOn
//           ? "Show All"
//           : " Filter Date Plans For Less Than 21 Years Old"}
//       </Button>

//       <Paper>
//         <TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 {/* <StyledTableCell align="center">Sr No.</StyledTableCell> */}
//                 <StyledTableCell align="center">
//                   DateCard Number
//                 </StyledTableCell>
//                 <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Description
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Average Rating</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dateCardsList?.data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((items, index) => {
//                   // if (isToggledOn) {
//                     if (items?.ageToggle === true) {
//                       return (
//                         <StyledTableRow>
//                           {/* <StyledTableCell align="center">{index + 1}</StyledTableCell> */}
//                           <StyledTableCell align="center">
//                             {items.dateCard_number}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_name}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_name: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_name}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_description}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_description: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_description}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {items.average_rating}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {!editText ? (
//                               <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   console.log("clicked!!");
//                                   setEditText(!editText);
//                                 }}
//                               >
//                                 <EditIcon />
//                               </Button>
//                             ) : (
//                               <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   EditCategory(items?._id, editDateCardInfo);
//                                 }}
//                               >
//                                 SAVE
//                               </Button>
//                             )}
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ margin: "5px", outline: "none" }}
//                               onClick={() => confirm(items._id)}
//                             >
//                               <CancelIcon />
//                             </Button>
//                             {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                           </StyledTableCell>
//                         </StyledTableRow>
//                       );
//                     }
//                   // } else {
//                   //   return (
//                   //     <StyledTableRow>
//                   //       {/* <StyledTableCell align="center">{index + 1}</StyledTableCell> */}
//                   //       <StyledTableCell align="center">
//                   //         {items.dateCard_number}
//                   //       </StyledTableCell>
//                   //       <StyledTableCell align="center">
//                   //         {editText ? (
//                   //           <TextField
//                   //             defaultValue={items.dateCard_name}
//                   //             onChange={(e) => {
//                   //               console.log(e.target.value);
//                   //               setEditDateCardInfo({
//                   //                 ...editDateCardInfo,
//                   //                 dateCard_name: e.target.value,
//                   //               });
//                   //             }}
//                   //           />
//                   //         ) : (
//                   //           <p>{items.dateCard_name}</p>
//                   //         )}
//                   //       </StyledTableCell>
//                   //       <StyledTableCell align="center">
//                   //         {editText ? (
//                   //           <TextField
//                   //             defaultValue={items.dateCard_description}
//                   //             onChange={(e) => {
//                   //               console.log(e.target.value);
//                   //               setEditDateCardInfo({
//                   //                 ...editDateCardInfo,
//                   //                 dateCard_description: e.target.value,
//                   //               });
//                   //             }}
//                   //           />
//                   //         ) : (
//                   //           <p>{items.dateCard_description}</p>
//                   //         )}
//                   //       </StyledTableCell>
//                   //       <StyledTableCell align="center">
//                   //         {items.average_rating}
//                   //       </StyledTableCell>
//                   //       <StyledTableCell align="center">
//                   //         {!editText ? (
//                   //           <Button
//                   //             variant="contained"
//                   //             color="secondary"
//                   //             style={{ outline: "none" }}
//                   //             onClick={(e) => {
//                   //               console.log("clicked!!");
//                   //               setEditText(!editText);
//                   //             }}
//                   //           >
//                   //             <EditIcon />
//                   //           </Button>
//                   //         ) : (
//                   //           <Button
//                   //             variant="contained"
//                   //             color="secondary"
//                   //             style={{ outline: "none" }}
//                   //             onClick={(e) => {
//                   //               EditCategory(items?._id, editDateCardInfo);
//                   //             }}
//                   //           >
//                   //             SAVE
//                   //           </Button>
//                   //         )}
//                   //         <Button
//                   //           variant="contained"
//                   //           color="secondary"
//                   //           style={{ margin: "5px", outline: "none" }}
//                   //           onClick={() => confirm(items._id)}
//                   //         >
//                   //           <CancelIcon />
//                   //         </Button>
//                   //         {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                   //       </StyledTableCell>
//                   //     </StyledTableRow>
//                   //   );
//                   // }
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 15, 20, 30, 50, 100]}
//           component="div"
//           count={dateCardsList?.data.length}
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

///////////////////////////

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
//     dateCardsList,
//     deleteCategory,
//     categoryEditUpdate,
//     user,
//   } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     dateCard_name: "",
//     dateCard_description: "",
//   });
//   const [isToggledOn, setToggle] = useState(false);
//   // const [allValues, setAllValues] = useState("");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dateCardsListAction(props.adminId));
//     // setAllValues(dateCardsList?.data);
//     // console.log("allValues>>>>>>>>>", allValues);
//   }, [props.adminId]);

//   const confirm = (category_id) => {
//     confirmAlert({
//       title: "Confirm to Delete",
//       message: "Are you sure to delete this.",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             dispatch(Date_cards_Delete(category_id));
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             dispatch(dateCardsListAction(props.adminId));
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
//     dispatch(dateCardsListAction(props.adminId));
//   }, [deleteCategory]);

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   };
//   useEffect(() => {
//     if (categoryEditUpdate) {
//       dispatch(dateCardsListAction(props.adminId));
//       setEditText(false);
//     }
//     dispatch(Date_cards_Edit());
//   }, [categoryEditUpdate]);

//   const toggle = () => {
//     setToggle(!isToggledOn);
//     console.log(isToggledOn);
//   };

//   const classes = useStyles();
//   return (
//     <div>
//       <div
//         className="block-header"
//         style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
//       >
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>All Date Card Plans list</h1>
//           </div>
//         </div>
//       </div>

//       <Button
//         variant="contained"
//         color="secondary"
//         style={{ margin: "5px", outline: "none" }}
//         onClick={toggle}
//       >
//         {isToggledOn
//           ? "Show All"
//           : " Filter Date Plans For Less Than 21 Years Old"}
//       </Button>

//       <Paper>
//         <TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 {/* <StyledTableCell align="center">Sr No.</StyledTableCell> */}
//                 <StyledTableCell align="center">
//                   DateCard Number
//                 </StyledTableCell>
//                 <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                 <StyledTableCell align="center">
//                   DateCard Description
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Average Rating</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dateCardsList?.data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((items, index) => {
//                   if (isToggledOn) {
//                     if (items?.ageToggle === true) {
//                       return (
//                         <StyledTableRow>
//                           {/* <StyledTableCell align="center">{index + 1}</StyledTableCell> */}
//                           <StyledTableCell align="center">
//                             {items.dateCard_number}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_name}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_name: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_name}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {editText ? (
//                               <TextField
//                                 defaultValue={items.dateCard_description}
//                                 onChange={(e) => {
//                                   console.log(e.target.value);
//                                   setEditDateCardInfo({
//                                     ...editDateCardInfo,
//                                     dateCard_description: e.target.value,
//                                   });
//                                 }}
//                               />
//                             ) : (
//                               <p>{items.dateCard_description}</p>
//                             )}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {items.average_rating}
//                           </StyledTableCell>
//                           <StyledTableCell align="center">
//                             {!editText ? (
//                               <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   console.log("clicked!!");
//                                   setEditText(!editText);
//                                 }}
//                               >
//                                 <EditIcon />
//                               </Button>
//                             ) : (
//                               <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 style={{ outline: "none" }}
//                                 onClick={(e) => {
//                                   EditCategory(items?._id, editDateCardInfo);
//                                 }}
//                               >
//                                 SAVE
//                               </Button>
//                             )}
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ margin: "5px", outline: "none" }}
//                               onClick={() => confirm(items._id)}
//                             >
//                               <CancelIcon />
//                             </Button>
//                             {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                           </StyledTableCell>
//                         </StyledTableRow>
//                       );
//                     }
//                   } else {
//                     return (
//                       <StyledTableRow>
//                         {/* <StyledTableCell align="center">{index + 1}</StyledTableCell> */}
//                         <StyledTableCell align="center">
//                           {items.dateCard_number}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_name}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_name: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_name}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {editText ? (
//                             <TextField
//                               defaultValue={items.dateCard_description}
//                               onChange={(e) => {
//                                 console.log(e.target.value);
//                                 setEditDateCardInfo({
//                                   ...editDateCardInfo,
//                                   dateCard_description: e.target.value,
//                                 });
//                               }}
//                             />
//                           ) : (
//                             <p>{items.dateCard_description}</p>
//                           )}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {items.average_rating}
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           {!editText ? (
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 console.log("clicked!!");
//                                 setEditText(!editText);
//                               }}
//                             >
//                               <EditIcon />
//                             </Button>
//                           ) : (
//                             <Button
//                               variant="contained"
//                               color="secondary"
//                               style={{ outline: "none" }}
//                               onClick={(e) => {
//                                 EditCategory(items?._id, editDateCardInfo);
//                               }}
//                             >
//                               SAVE
//                             </Button>
//                           )}
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             style={{ margin: "5px", outline: "none" }}
//                             onClick={() => confirm(items._id)}
//                           >
//                             <CancelIcon />
//                           </Button>
//                           {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     );
//                   }
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 15, 20, 30, 50, 100]}
//           component="div"
//           count={dateCardsList?.data.length}
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

//////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminApproval, userlist, dateCardsListAction, Date_cards_Delete, Date_cards_Edit } from '../../actions/userAction';
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
// import TablePagination from '@material-ui/core/TablePagination';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { connect } from 'react-redux';

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
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
//     width: '100%',
//   },
//   container: {
//     maxHeight: 700,
//   },
// });

// const DateCardsList = (props) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const { users, newUser, adminApprovalStatus, dateCardsList, deleteCategory, categoryEditUpdate, user } = useSelector((state) => state.userReducer);
//   const [tablebody, setTableBody] = useState([]);
//   const [editText, setEditText] = useState(false);
//   const [editDateCardInfo, setEditDateCardInfo] = useState({
//     dateCard_name: "",
//     dateCard_description: ""
//   });
//   const dispatch = useDispatch();
//   console.log("dateCardsList_in_component:", dateCardsList?.data);
//   useEffect(() => {
//     dispatch(dateCardsListAction(props.adminId));
//   }, [props.adminId]);
//   const confirm = (category_id) => {
//     confirmAlert({
//       title: 'Confirm to Delete',
//       message: 'Are you sure to delete this.',
//       buttons: [
//         {
//           label: 'Yes',
//           // onClick: () => alert('Click ggg')
//           onClick: () => {
//             dispatch(Date_cards_Delete(category_id));
//           }
//         },
//         {
//           label: 'No',
//           onClick: () => {
//             dispatch(dateCardsListAction(props.adminId));
//           }
//         }
//       ]
//     });
//   }

//   // const Toggle = () => {

//   // }

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
//   }

//   useEffect(() => {
//     if (deleteCategory) {
//       toast.error(deleteCategory.msg);
//     }
//     dispatch(dateCardsListAction(props.adminId));
//   }, [deleteCategory])
//   //////////////////////////////////

//   const EditCategory = (category_id, editDateCardInfo) => {
//     dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//     console.log("category_id:", category_id);
//   }

//   useEffect(() => {
//     if (categoryEditUpdate) {
//       dispatch(dateCardsListAction(props.adminId));
//       setEditText(false)
//     }
//     dispatch(Date_cards_Edit());
//   }, [categoryEditUpdate])

//   // categoryEditUpdate

//   const classes = useStyles();
//   return (
//     <div>
//       <div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
//         <div className="row clearfix">
//           <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
//             <h1 style={{ fontSize: "30px" }}>
//               All Date Card Plans list
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                 onClick={() => Toggle()}
//             ><CancelIcon />Filter Cards For Less Than 21</Button> */}

//       <Paper>
//         < TableContainer component={Paper} style={{ marginTop: "10px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 {/* <StyledTableCell align="center">Sr No.</StyledTableCell> */}
//                 <StyledTableCell align="center">DateCard Number</StyledTableCell>
//                 <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                 <StyledTableCell align="center">DateCard Description</StyledTableCell>
//                 <StyledTableCell align="center">Average Rating</StyledTableCell>
//                 <StyledTableCell align="center">Operations</StyledTableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {
//                 // dateCardsList?.data.map((items, index) => (
//                 dateCardsList?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, index) => (
//                   <StyledTableRow>
//                     {/* <StyledTableCell align="center">{index + 1}</StyledTableCell> */}
//                     <StyledTableCell align="center">
//                       {items.dateCard_number}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {editText ? <TextField defaultValue={items.dateCard_name}
//                         onChange={(e) => {
//                           console.log(e.target.value)
//                           setEditDateCardInfo({
//                             ...editDateCardInfo,
//                             dateCard_name: e.target.value
//                           })

//                         }}
//                       /> : <p>{items.dateCard_name}</p>}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {editText ? <TextField defaultValue={items.dateCard_description}
//                         onChange={(e) => {
//                           console.log(e.target.value)
//                           setEditDateCardInfo({
//                             ...editDateCardInfo,
//                             dateCard_description: e.target.value
//                           })
//                         }}
//                       /> : <p>{items.dateCard_description}</p>}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {items.average_rating}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {!editText ? <Button variant="contained" color="secondary" style={{ outline: "none" }}
//                         onClick={(e) => {
//                           console.log("clicked!!")
//                           setEditText(!editText)
//                         }}
//                       ><EditIcon /></Button> :
//                         <Button variant="contained" color="secondary" style={{ outline: "none" }}
//                           onClick={(e) => {
//                             EditCategory(items?._id, editDateCardInfo)
//                           }}
//                         >SAVE</Button>}
//                       <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                         onClick={() => confirm(items._id)}
//                       ><CancelIcon /></Button>
//                       {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))
//               }
//             </TableBody>
//           </Table >
//         </TableContainer >
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 50, 100]}
//           component="div"
//           count={dateCardsList?.data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </div >
//   )
// }

// // export default DateCardsList

// function mapStateToProps(rec) {
//   console.log("rec.userReducer.user_object:", rec.userReducer.user);
//   console.log("rec.userReducer.user:", rec.userReducer.user._id);
//   return {
//     adminId: rec.userReducer.user._id,

//   }
// }
// export default connect(mapStateToProps)(DateCardsList);

// //////////////////////

// import React, { useEffect, useState } from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminApproval, userlist, dateCardsListAction, Date_cards_Delete, Date_cards_Edit } from '../../actions/userAction';
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

//     const { users, newUser, adminApprovalStatus, dateCardsList, deleteCategory, categoryEditUpdate } = useSelector((state) => state.userReducer);
//     const [tablebody, setTableBody] = useState([]);
//     const [editText, setEditText] = useState(false);
//     const [editDateCardInfo, setEditDateCardInfo] = useState({
//         dateCard_name: "",
//         dateCard_description: "",
//         dateCard_number: "",
//         average_rating: "",
//     });
//     const dispatch = useDispatch();
//     ////////////////////////////////////////////////////////////
//     console.log("dateCardsList_in_component:", dateCardsList?.data);
//     useEffect(() => {
//         dispatch(dateCardsListAction());
//     }, []);
//     /////////////////////////////////////////////////////////////////////
//     const DeleteCategory = (category_id) => {
//         dispatch(Date_cards_Delete(category_id));
//         console.log("category_id:", category_id);
//     }

//     useEffect(() => {
//         if (deleteCategory) {
//             toast.error(deleteCategory.msg);
//         }
//         dispatch(dateCardsListAction());
//     }, [deleteCategory])
//     //////////////////////////////////

//     const EditCategory = (category_id, editDateCardInfo) => {
//         dispatch(Date_cards_Edit(category_id, editDateCardInfo));
//         console.log("category_id:", category_id);
//     }

//     useEffect(() => {
//         if (categoryEditUpdate) {
//             toast.error(categoryEditUpdate.msg);
//         }
//         dispatch(Date_cards_Edit());
//     }, [categoryEditUpdate])

//     ///////////////////////////////////
//     const classes = useStyles();
//     return (
//         <>

//             <div className="block-header">
//                 <div className="row clearfix">
//                     <div className="col-md-6 col-sm-12">
//                         <h1>
//                             All Date Card Plans list

//                         </h1>
//                     </div>
//                 </div>
//             </div>

//             < TableContainer component={Paper} style={{ marginTop: "50px" }}>
//                 <Table className={classes.table} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell align="center">Sr No.</StyledTableCell>
//                             <StyledTableCell align="center">DateCard Number</StyledTableCell>
//                             <StyledTableCell align="center">DateCard Name</StyledTableCell>
//                             <StyledTableCell align="center">DateCard Description</StyledTableCell>
//                             <StyledTableCell align="center">Average Rating</StyledTableCell>
//                             <StyledTableCell align="center">Operations</StyledTableCell>
//                         </TableRow>
//                     </TableHead>

//                     <TableBody>
//                         {
//                             dateCardsList?.data.map((items, index) => (

//                                 <StyledTableRow>

//                                     <StyledTableCell align="center">{index + 1}</StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {editText ? <TextField defaultValue={items.dateCard_number}
//                                             onChange={(e) => {
//                                                 console.log(e.target.value)
//                                                 setEditDateCardInfo({
//                                                     ...editDateCardInfo,
//                                                     dateCard_number: e.target.value
//                                                 })
//                                             }}
//                                         /> : <p>{items.dateCard_number}</p>}

//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {editText ? <TextField defaultValue={items.dateCard_name}
//                                             onChange={(e) => {
//                                                 console.log(e.target.value)
//                                                 setEditDateCardInfo({
//                                                     ...editDateCardInfo,
//                                                     dateCard_name: e.target.value
//                                                 })

//                                             }}
//                                         /> : <p>{items.dateCard_name}</p>}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {editText ? <TextField defaultValue={items.dateCard_description}
//                                             onChange={(e) => {
//                                                 console.log(e.target.value)
//                                                 setEditDateCardInfo({
//                                                     ...editDateCardInfo,
//                                                     dateCard_description: e.target.value
//                                                 })

//                                             }}
//                                         /> : <p>{items.dateCard_description}</p>}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {editText ? <TextField defaultValue={items.average_rating}
//                                             onChange={(e) => {
//                                                 console.log(e.target.value)
//                                                 setEditDateCardInfo({
//                                                     ...editDateCardInfo,
//                                                     average_rating: e.target.value
//                                                 })

//                                             }}
//                                         /> : <p>{items.average_rating}</p>}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                         {!editText ? <Button variant="contained" color="secondary" style={{ outline: "none" }}
//                                             onClick={(e) => {
//                                                 console.log("clicked!!")
//                                                 setEditText(!editText)
//                                             }}
//                                         ><EditIcon /></Button> :
//                                             <Button variant="contained" color="secondary" style={{ outline: "none" }}
//                                                 onClick={(e) => {
//                                                     EditCategory(items?._id, editDateCardInfo)
//                                                     setEditText(false)
//                                                 }}
//                                             >SAVE</Button>}
//                                         <Button variant="contained" color="secondary" style={{ margin: "5px", outline: "none" }}
//                                             onClick={(e) => DeleteCategory(items._id)}
//                                         ><CancelIcon /></Button>
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
