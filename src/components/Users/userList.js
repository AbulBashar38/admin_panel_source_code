import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { condBaseUsers, purchaseUsersList } from "../../actions/userAction";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "react-confirm-alert/src/react-confirm-alert.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AsyncCSV from "./CSVfile";
import TableSingleRow from "./tableSingleRow";
import Loader from "../Shared/Spinner"


const StyledTableCell = withStyles((theme) => ({
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
    width: "100%",
    overflowY: "auto",
    textAlign: "center",
  },
  container: {
    maxHeight: 700,
  },
});

const UserList = () => {
  const { filterUsers, purchaseUsers } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(condBaseUsers());
    dispatch(purchaseUsersList());
  }, []);

  const classes = useStyles();

  const update = (event) => {
    if (event.target.value === "all") {
      window.location.reload([false]);
    } else {
      dispatch(condBaseUsers(event.target.value));
    }
  };

  console.log(filterUsers?.data?.length)

  return (
    <div>
      <div
        className="block-header"
        style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
      >
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <h1 style={{ fontSize: "30px" }}>All Users list</h1>
          </div>
        </div>
      </div>
      <div>
        <AsyncCSV />

        <div>
          <h4 style={{ margin: "10px", fontSize: "20px" }}>
            {filterUsers?.message}
            <span style={{ marginLeft: "5px" }}>
              {filterUsers?.data.length}
            </span>
          </h4>
        </div>
      </div>

      <FormControl
        className={classes.formControl}
        variant="outlined"
        style={{ width: "20%" }}
      >
        <InputLabel
          id="demo-simple-select-label"
          style={{ color: "black", marginTop: "8px" }}
        >
          Filter Users
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => update(event)}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"Subscribed"}>Subscribed Users</MenuItem>
          <MenuItem value={"Unsubscribed"}>Unsubscribed Users</MenuItem>
          <MenuItem value={"android"}>Android Users</MenuItem>
          <MenuItem value={"ios"}>IOS Users</MenuItem>
        </Select>
      </FormControl>
      <Paper
        className={classes.root}
        style={{
          width: "100%",
          overflowX: "auto",
          marginTop: "10px",
        }}
      >
        {filterUsers?.data?.length > 0 ?
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead >
              <TableRow className="btn_primary">
                <StyledTableCell align="center" className="btn_primary">Sr No.</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">User Name</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">User Gender</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">User Email</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">User Points</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">
                  User Device Type
                </StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">Registration</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">Join Date</StyledTableCell>
                <StyledTableCell align="center" className="btn_primary"></StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">
                  Subscription duration
                </StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">
                  Date Of Subscription
                </StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">
                  Subscription Expiray Date
                </StyledTableCell>
                <StyledTableCell align="center" className="btn_primary">Operations</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filterUsers?.data?.map((items, index) => (
                <TableSingleRow
                  key={index}
                  items={items}
                  index={index}
                  purchaseUsers={purchaseUsers}
                  length={filterUsers?.data?.length}
                />
              ))}
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

export default UserList;
