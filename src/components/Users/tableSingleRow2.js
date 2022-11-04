import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  users__Delete,
  blockUser,
  UnblockUser,
  condBaseUsers,
} from "../../actions/userAction";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Moment from "react-moment";
import moment from "moment";

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

const TableSingleRow2 = (props) => {
  const { items, index, purchaseUsers } = props;

  const [isToggledOn, setToggle] = useState(items.is_blocked);

  const dispatch = useDispatch();

  const confirm = (category_id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",

          onClick: () => {
            dispatch(users__Delete(category_id));
            window.location.reload([false]);
          },
        },
        {
          label: "No",
          onClick: () => {
            dispatch(condBaseUsers());
          },
        },
      ],
    });
  };

  const toggle = () => {
    setToggle(!isToggledOn);
  };

  const Block = (id) => {
    dispatch(blockUser(id));
    dispatch(condBaseUsers());
  };

  const UnBlock = (id) => {
    dispatch(UnblockUser(id));
    dispatch(condBaseUsers());
  };

  const filteredData = purchaseUsers?.data.filter((item, index) => {
    return item?.user_id == items?._id;
  });

  const plan_duration = filteredData?.map((allItems, index) => {
    return allItems?.plan_duration;
  });

  const subDate = filteredData?.map((allItems, index) => {
    return <Moment format="MM-DD-YYYY">{allItems?.date}</Moment>;
  });

  const expiryDate = filteredData?.map((allItems, index) => {
    const expDate = moment(allItems?.date).add(30, "days");
    return (
      <Moment format="MM-DD-YYYY">
        {allItems?.expiryDate != null ? allItems?.expiryDate : expDate}
      </Moment>
    );
  });

  return (
    <>
      {
        <StyledTableRow>
          <StyledTableCell align="center">{index + 1}</StyledTableCell>
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
          <StyledTableCell
            colSpan={2}
            align="center"
            className={items?.is_blocked === 0 ? "display" : ""}
          >
            <Moment format="MM-DD-YYYY">
              {items.createdAt.substring(0, 10)}
            </Moment>
          </StyledTableCell>

          
        </StyledTableRow>
      }
    </>
  );
};

export default TableSingleRow2;
