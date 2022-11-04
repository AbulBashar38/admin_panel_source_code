import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sub_plans_list,
  subscription_plans_Edit,
  forum_list,
  forumlist_Delete,
} from "../../actions/userAction";
import toast from "react-hot-toast";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { connect } from "react-redux";
import Loader from "../Shared/Spinner";

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

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 700,
  },
});

const ForumList = () => {
  const {
    deleteCategory,
    subscription_plans_EditUpdate,
    AllForumList,
    ForumLists_DEL,
  } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const confirm = (category_id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(forumlist_Delete(category_id));
            dispatch(forum_list());
          },
        },
        {
          label: "No",
          onClick: () => {
            dispatch(forum_list());
          },
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(forum_list());
  }, []);

  useEffect(() => {
    if (deleteCategory) {
      toast.error(deleteCategory.msg);
    }
    dispatch(sub_plans_list());
  }, [deleteCategory]);

  useEffect(() => {
    if (ForumLists_DEL) {
      toast.error(ForumLists_DEL.msg);
    }
    dispatch(forum_list());
  }, [ForumLists_DEL]);

  useEffect(() => {
    if (subscription_plans_EditUpdate) {
      dispatch(sub_plans_list());
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
            <h1 style={{ fontSize: "30px" }}>Forum List</h1>
          </div>
        </div>
      </div>
      <Paper>
        {AllForumList?.data?.length > 0 ?
          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">User Name</StyledTableCell>
                  <StyledTableCell align="center">
                    DateCard Number
                  </StyledTableCell>
                  <StyledTableCell align="center">DateCard Name</StyledTableCell>
                  <StyledTableCell align="center">
                    Experience Description
                  </StyledTableCell>
                  <StyledTableCell align="center">Operations</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AllForumList?.data.map((items) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center">
                        {items?.user_id?.user_name}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {items?.dateCard_id?.dateCard_number}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {items?.dateCard_id?.dateCard_name}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {items?.experience_description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ margin: "5px", outline: "none" }}
                          onClick={() => confirm(items?._id)}
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
          :
          <Loader />
        }

      </Paper>
    </div>
  );
};

function mapStateToProps(rec) {
  return {
    adminId: rec.userReducer.user._id,
  };
}
export default connect(mapStateToProps)(ForumList);
