// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// const { user } = useSelector((state) => state.userReducer);

// const AddDateCard = () => {

//     return (
//         <>
//             <div className="block-header">
//                 <div className="row clearfix">
//                     <div className="col-md-6 col-sm-12">
//                         <h1>Add Date Card Plans</h1>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AddDateCard

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
// import myStore from "../store/store"
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { connect } from "react-redux";
// import { admin_add_date_cards } from '../../actions/userAction';
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  adminApproval,
  userlist,
  dateCardsListAction,
  Date_cards_Delete,
  Date_cards_Edit,
  sub_plans_list,
  subscription_plans_Delete,
  subscription_plans_Edit,
} from "../../actions/userAction";

import configureStore from "../../store";
let store = configureStore();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const useStyles = makeStyles(theme => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// export default class SignUp extends React.Component {
class UpdateSubscriptionPlans extends React.Component {
  state = {
    subscription_title: "",
    subscription_description: "",
    subscription_price: "",
  };
  update = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event, id) => {
    console.log("id:", id);
    store.dispatch({
      type: "update_subscription_plans",
      payload: this.state,
      plan_card_id: id,
    });
    // console.log("this.state:", this.state);
    event.preventDefault();
  };

  render() {
    let classes = {};
    return (
      <div>
        <div
          className="block-header"
          style={{
            marginTop: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="row clearfix">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <h1 style={{ fontSize: "30px" }}>Update Subscription Plans</h1>
            </div>
          </div>
        </div>
        <Container component="main" maxWidth="xs" style={{ marginTop: "10px" }}>
          <CssBaseline />
          <div className={classes.paper}>
            <form
              className={classes.form}
              //   onSubmit={this.onsubmit}
              enctype="multipart/form-data"
              noValidate
            >
              {this.props.subscriptionPlansList
                .filter((idMatch) => {
                  return idMatch._id.includes(this.props.match.params.id);
                })
                .map((row) => (
                  <>
                    <TextField
                      //   onChange={this.update}
                      defaultValue={row.subscription_title}
                      onChange={(e) => {
                        this.setState({
                          subscription_title: e.target.value,
                        });
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="subscription_title"
                      label="Enter Subscription Title"
                      name="subscription_title"
                      autoComplete="subscription_title"
                      autoFocus
                    />
                    <TextField
                      //   onChange={this.update}
                      defaultValue={row.subscription_description}
                      onChange={(e) => {
                        this.setState({
                          subscription_description: e.target.value,
                        });
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="subscription_description"
                      label="Subscription Plans Description"
                      multiline
                      rows={10}
                      maxWidth
                      // variant="outlined"
                      name="subscription_description"
                    />
                    <TextField
                      //   onChange={this.update}
                      defaultValue={row.subscription_price}
                      onChange={(e) => {
                        this.setState({
                          subscription_price: e.target.value,
                        });
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="subscription_price"
                      label="Enter Subscription Price"
                      name="subscription_price"
                      autoComplete="subscription_price"
                    />
                    <span style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        // type="submit"
                        className="btn btn-round btn-primary mr-1"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{
                          marginTop: "20px",
                          outline: "none",
                          fontSize: "bold",
                        }}
                        onClick={(event) => this.onSubmit(event, row._id)}
                      >
                        Update
                      </button>
                    </span>
                  </>
                ))}

              {/* <span style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  className="btn btn-round btn-primary mr-1"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "20px",
                    outline: "none",
                    fontSize: "bold",
                  }}
                >
                  Update
                </button>
              </span> */}
              <br />
              <br />
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(rec) {
  console.log("rec.userReducer.user:", rec.userReducer.user._id);
  console.log(
    "subscriptionPlansList:",
    rec.userReducer.subscriptionPlansList.data
  );

  return {
    adminId: rec.userReducer.user._id,
    subscriptionPlansList: rec.userReducer.subscriptionPlansList.data,
  };
}
export default connect(mapStateToProps)(UpdateSubscriptionPlans);

/* <Rute path="/rders/:id" cmpo={view} /> */
/* this.props.match.params.id */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// // import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// ///////////////////////////////////////////////////////
// import { connect } from "react-redux";
// // import myStore from '../store/store';
// import Button from "@material-ui/core/Button";
// // import EditIcon from '@material-ui/icons/Edit';
// // import UpdateIcon from '@material-ui/icons/Update';
// // import TextField from '@material-ui/core/TextField';
// // import BackspaceIcon from '@material-ui/icons/Backspace';
// import { Link } from "react-router-dom";

// // import {
// //     // BrowserRouter as Router,
// //     // Switch,
// //     // Route,
// //     Link
// //     // useParams
// // } from "react-router-dom";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// // const StyledTableRow = withStyles(theme => ({
// //     root: {
// //         '&:nth-of-type(odd)': {
// //             backgroundColor: theme.palette.background.default,
// //         },
// //     },
// // }))(TableRow);

// // function createData(name, calories, fat, carbs, protein) {
// //     return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //     createData('Eclair', 262, 16.0, 24, 6.0),
// //     createData('Cupcake', 305, 3.7, 67, 4.3),
// //     createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// // const useStyles = makeStyles({
// //     table: {
// //         minWidth: 700,
// //     },
// // });

// // const classes = useStyles();   //// not working here

// // function CustomizedTables(props) {
// class UpdateSubscriptionPlans extends React.Component {
//   render() {
//     let classes = {};

//     return (
//       <>
//         <div>
//           <Link to="/manageorders" style={{ textDecoration: "none" }}>
//             <Button
//               style={{ marginTop: "30px" }}
//               variant="contained"
//               color="secondary"
//             >
//               Go Back to See Customers
//             </Button>
//           </Link>
//         </div>

//         <TableContainer component={Paper} style={{ marginTop: "50px" }}>
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell align="left">Sr.</StyledTableCell>
//                 <StyledTableCell align="left">Image</StyledTableCell>
//                 <StyledTableCell align="left">Product Name</StyledTableCell>
//                 <StyledTableCell align="left">Price</StyledTableCell>
//                 {/* <StyledTableCell align="left">id</StyledTableCell> */}
//                 {/* <StyledTableCell align="left">authid</StyledTableCell> */}
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {
//                 // this.props.match.params.id.PurchaseItems.map((item, index) => (
//                 //     item.productsAddedInCart.map((itemtwo) => (
//                 //         <TableRow>

//                 //             <StyledTableCell align="left">{index + 1}</StyledTableCell>
//                 //             <StyledTableCell align="left"> <img alt="img" src={itemtwo.file} style={{ height: "100px", width: "100px" }} /> </StyledTableCell>
//                 //             <StyledTableCell align="left">{itemtwo.productname}</StyledTableCell>
//                 //             <StyledTableCell align="left">{itemtwo.price}</StyledTableCell>
//                 //             <StyledTableCell align="left">{item._id}</StyledTableCell>
//                 //             <StyledTableCell align="left">{item.authId}</StyledTableCell>

//                 //         </TableRow>
//                 //     ))
//                 // ))

//                 this.props.subscriptionPlansList
//                   .filter((idMatch) => {
//                     return idMatch._id.includes(this.props.match.params.id);
//                   })
//                   .map((row) => (
//                     <TableRow>
//                       <StyledTableCell align="left">
//                         {row.subscription_price}
//                       </StyledTableCell>
//                     </TableRow>
//                   ))
//               }
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </>
//     );
//   }
// }

// function mapStateToProps(rec) {
//   console.log("rec.userReducer.user:", rec.userReducer.user._id);
//   console.log(
//     "subscriptionPlansList:",
//     rec.userReducer.subscriptionPlansList.data
//   );

//   return {
//     adminId: rec.userReducer.user._id,
//     subscriptionPlansList: rec.userReducer.subscriptionPlansList.data,
//   };
// }

// export default connect(mapStateToProps)(UpdateSubscriptionPlans);
