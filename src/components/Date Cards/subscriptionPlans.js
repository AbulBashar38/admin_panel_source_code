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
class SubscriptionPlans extends React.Component {
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
  onsubmit = (event) => {
    store.dispatch({
      type: "subscription_plans",
      payload: this.state,
      user_id: this.props.adminId,
    });
    event.preventDefault();

    this.setState({
      subscription_title: "",
      subscription_description: "",
      subscription_price: "",
    });
  };

  resetForm = () => {
    this.setState({
      subscription_title: "",
      subscription_description: "",
      subscription_price: "",
    });
  };

  render() {
    let classes = {};
    return (
      <>
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
              <h1 style={{ fontSize: "30px" }}>Add Subscription Plans</h1>
            </div>
          </div>
        </div>
        <Container component="main" maxWidth="xs" style={{ marginTop: "10px" }}>
          <CssBaseline />
          <div className={classes.paper}>
            <form
              className={classes.form}
              onSubmit={this.onsubmit}
              enctype="multipart/form-data"
              noValidate
            >
              <TextField
                onChange={this.update}
                value={this.state.subscription_title}
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
                onChange={this.update}
                value={this.state.subscription_description}
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
                onChange={this.update}
                value={this.state.subscription_price}
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
                  Save
                </button>
              </span>
              <br />
              <br />
            </form>
          </div>
        </Container>
      </>
    );
  }
}

function mapStateToProps(rec) {
  console.log("rec.userReducer.user:", rec.userReducer.user._id);
  return {
    adminId: rec.userReducer.user._id,
  };
}
export default connect(mapStateToProps)(SubscriptionPlans);
