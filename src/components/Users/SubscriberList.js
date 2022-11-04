import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { condBaseUsers, purchaseUsersList, subscriberListAction } from "../../actions/userAction";
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
import TableSingleRow2 from "./tableSingleRow2";
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

const SubscriberList = () => {
  const { filterUsers, purchaseUsers, subscribeUser } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();
  console.log("===>", subscribeUser)
  useEffect(() => {
    dispatch(subscriberListAction());
  }, []);

  const classes = useStyles();

  const update = (event) => {
    if (event.target.value === "all") {
      window.location.reload([false]);
    } else {
      dispatch(condBaseUsers(event.target.value));
    }
  };



  return (
    <div>
      <div
        className="block-header"
        style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}
      >
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <h1 style={{ fontSize: "30px" }}>Subscribed Users</h1>
          </div>
        </div>
      </div>



      <Paper
        className={classes.root}
        style={{
          width: "100%",
          overflowX: "auto",
          marginTop: "10px",
        }}
      >
        {subscribeUser?.length > 0 ?
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

                </TableRow>
              </TableHead>

              <TableBody>
                {subscribeUser?.map((items, index) => (
                  <TableSingleRow2
                    key={index}
                    items={items}
                    index={index}

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

export default SubscriberList;
