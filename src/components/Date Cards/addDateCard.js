




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

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import myStore from "../store/store"
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { connect } from 'react-redux';
// import { admin_add_date_cards } from '../../actions/userAction';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import configureStore from '../../store';
let store = configureStore()

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
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
class SignUp extends React.Component {

    
    state = {
        dateCard_name: "",
        dateCard_description: "",
        ageToggle: "" || false
        // user_id: this.props.userId
    }
    update = (event) => {
     
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    onsubmit = (event) => {
        event.preventDefault();
        // if (event.target.value === "" || null || undefined) {
        //     alert("Please Fill Require Fields")
        // }
        //  dispatch(admin_add_date_cards(this.state));
        store.dispatch({
            type: "signUp_data_selection",
            payload: this.state,
            user_id: this.props.adminId
            // productValues: this.state
        })
        // console.log("zeeshan khan");


        
        this.setState({
            dateCard_name: "",
            dateCard_description: "",
            ageToggle: "" || false
        })

    }


    resetForm = () => {
        this.setState({
            dateCard_name: "",
            dateCard_description: "",
            ageToggle: "" || false
        })
    }

    // zeeshan = (userId) => {
    //     console.log("userId:", this.props.userId);
    //     console.log("object");
    //     // event.preventDefault();
    // }

    render() {
        let classes = {}
        return (
            <>
                <div className="block-header" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
                    <div className="row clearfix">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                            <h1 style={{ fontSize: "30px" }}>
                                Add Date Card Plans
                            </h1>
                        </div>
                    </div>
                </div>
                <Container component="main" maxWidth="xs" style={{ marginTop: "10px" }}>
                    <CssBaseline />
                    <div className={classes.paper}>

                        <form className={classes.form} onSubmit={this.onsubmit} enctype="multipart/form-data" noValidate >


                            <TextField
                                onChange={this.update}
                                value={this.state.dateCard_name}
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
                                onChange={this.update}
                                value={this.state.dateCard_description}
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
                            {/* <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px", outline: "none" }}
                                className={classes.submit}
                            >
                                Save
                            </Button>
                            <Button
                                style={{ marginTop: "10px", outline: "none" }}
                                type="reset"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.resetForm}
                            >
                                Reset
                            </Button> */}

                            <FormControl style={{ marginTop: "20px" }} fullWidth variant="outlined" className={classes.formControl}>
                                <h4><span>Age Above 21 ?</span></h4>

                                <select
                                    name="ageToggle"
                                    value={this.state.ageToggle}
                                    id=""
                                    style={{ color: "black", padding: "10px 5px" }}
                                    onChange={this.update}

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
                                className="btn btn-round btn-primary mr-1"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px", outline: "none", fontSize: "bold" }}

                            >Save</button></span>
                            <span style={{ display: "flex", justifyContent: "center" }}><button
                                type="reset"
                                className="btn btn-round btn-primary mr-1"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px", outline: "none" }}
                                onClick={this.resetForm}
                            >  Reset</button></span>
                            <br /><br />
                        </form>
                    </div>
                </Container>
            </>
        )
    }
}





function mapStateToProps(rec) {
    console.log("rec.userReducer.user:", rec.userReducer.user._id);
    return {
        adminId: rec.userReducer.user._id,

    }
}

export default connect(mapStateToProps)(SignUp);













