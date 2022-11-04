




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

const SingleDateCradC = (props) => {
    const { isToggledOn, items, index } = props
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
    // const [isToggledOn, setToggle] = useState(false);
    const [allValues, setAllValues] = useState([]);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(dateCardsListAction(props.adminId));
    //     // setAllValues(dateCardsList?.data);
    //     // console.log("allValues>>>>>>>>>", dateCardsList?.data);
    // }, [props.adminId]);

    const confirm = (category_id) => {
        confirmAlert({
            title: "Confirm to Delete",
            message: "Are you sure to delete this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        dispatch(Date_cards_Delete(category_id));
                        // dispatch(dateCardsListAction(props.adminId));
                        // window.location.reload([false])
                     
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        // dispatch(dateCardsListAction(props.adminId));
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

    // const DeleteCategory = (category_id) => {
    //     dispatch(Date_cards_Delete(category_id));
    //     dispatch(dateCardsListAction(props.adminId));
    //     // console.log("category_id:", category_id);
    // };
    // useEffect(() => {
    //     if (deleteCategory) {
    //         toast.error(deleteCategory.msg);
    //     }
    //     dispatch(dateCardsListAction(props.adminId));
    // }, [deleteCategory]);

    const EditCategory = (category_id, editDateCardInfo) => {
        dispatch(Date_cards_Edit(category_id, editDateCardInfo));
        // dispatch(dateCardsListAction(props.adminId));
    
        // window.location.reload([false])
        // console.log("category_id:", category_id);
    };
    // useEffect(() => {
    //     if (categoryEditUpdate) {
    //         dispatch(dateCardsListAction(props.adminId));
    //         setEditText(false);
    //     }
    //     dispatch(Date_cards_Edit());
    // }, [categoryEditUpdate]);

    // const toggle = () => {
    //     setToggle(!isToggledOn);
    //     console.log(isToggledOn);
    // };

    const classes = useStyles();








    useEffect(() => {
        if (categoryEditUpdate || deleteCategory) {
       
       
            dispatch(dateCardsListAction(props.adminId));
            setEditText(false);
        }    
      }, [categoryEditUpdate, deleteCategory]);


    return (
        <>

            {
                isToggledOn ? items?.ageToggle === true ? <StyledTableRow>
                    {
                        <StyledTableCell align="center">
                            {index + 1}
                        </StyledTableCell>
                    }
                    <StyledTableCell align="center">
                        {items.dateCard_number}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {editText ? (
                            <TextField
                                style={{ width: '100%' }}
                                defaultValue={items.dateCard_name}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setEditDateCardInfo({
                                        ...editDateCardInfo,
                                        dateCard_name: e.target.value,
                                    });
                                }}
                            />
                        ) : (
                            <p>{items.dateCard_name}</p>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {editText ? (
                            <TextField
                                style={{ width: '100%' }}
                                defaultValue={items.dateCard_description}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setEditDateCardInfo({
                                        ...editDateCardInfo,
                                        dateCard_description: e.target.value,
                                    });
                                }}
                            />
                        ) : (
                            <p>{items.dateCard_description}</p>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {items.average_rating}
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
                        {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
                    </StyledTableCell>
                </StyledTableRow> : null : <StyledTableRow>
                    {
                        <StyledTableCell align="center">
                            {index + 1}
                        </StyledTableCell>
                    }
                    <StyledTableCell align="center">
                        {items.dateCard_number}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {editText ? (
                            <TextField
                                style={{ width: '100%' }}
                                defaultValue={items.dateCard_name}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setEditDateCardInfo({
                                        ...editDateCardInfo,
                                        dateCard_name: e.target.value,
                                    });
                                }}
                            />
                        ) : (
                            <p>{items.dateCard_name}</p>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {editText ? (
                            <TextField
                                style={{ width: '100%' }}
                                defaultValue={items.dateCard_description}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setEditDateCardInfo({
                                        ...editDateCardInfo,
                                        dateCard_description: e.target.value,
                                    });
                                }}
                            />
                        ) : (
                            <p>{items.dateCard_description}</p>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {items.average_rating}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {!editText ? (
                            <Button
                                variant="contained"
                                color="primary"
                                className="btn_primary"
                                style={{ outline: "none" }}
                                onClick={(e) => {

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
                                 console.log("clciked Save");
                                    EditCategory(items?._id, editDateCardInfo);
                                }}
                            >
                                SAVE
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            color="secondary"
                            className="btn_secondary"
                            style={{ margin: "5px", outline: "none" }}
                            onClick={() => confirm(items._id)}
                        >
                            <CancelIcon />
                        </Button>
                        {/* <button onClick={() => confirm(items._id)}>Confirm dialog</button> */}
                    </StyledTableCell>
                </StyledTableRow>

            }

        </>
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
export default connect(mapStateToProps)(SingleDateCradC);

