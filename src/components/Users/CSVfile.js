import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from 'react-redux';
import configureStore from '../../store';
// import ReactExport from 'react-data-export';
let store = configureStore()

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const headers = [
    { label: "User Name", key: "user_name", width: { wpx: 180 } },
    { label: "User Email", key: "user_email" },
    { label: "User Points", key: "user_points" },
    { label: "User Device Type", key: "user_device_type" },
    { label: "Registration", key: "registration" }
];

class AsyncCSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.csvLinkEl = React.createRef();

    }


    getUserList = () => {
        return fetch(process.env.REACT_APP_API_URL + "userList")
            .then(res => res.json());
    }

    downloadReport = async () => {
        const data = await this.getUserList();
        this.setState({ data: data }, () => {
            setTimeout(() => {
                this.csvLinkEl.current.link.click();
            });
        });
    }



    render() {
        const { data } = this.state;


        // execl

        // const multiDataSet = [
        //     {
        //         columns: [
        //             { title: "User Name", width: { wpx: 80 } },//pixels width 
        //             { title: "User Email", width: { wch: 40 } },//char width 
        //             { title: "User Points", width: { wpx: 90 } },
        //             { title: "User Device Type", width: { wpx: 90 } },
        //             { title: "Registration", width: { wpx: 90 } },
        //         ],
        //         data: this.props.users?.map((item) => [
        //             { value: item.user_name, width: { wpx: 90 } },
        //             { value: item.user_email, width: { wpx: 90 } },
        //             { value: item.user_points, width: { wpx: 90 } },
        //             { value: item.user_device_type, width: { wpx: 90 } },
        //             { value: item.registration, width: { wpx: 90 } },
        //         ])
        //     }
        // ];

        ///excel



        return (
            <div>
                <input className='btn btn-success' type="button" value="Download  Users List" onClick={this.downloadReport} style={{ borderRadius: "10px", fontSize: "15px", outline: "none" }} />
                <CSVLink
                    headers={headers}
                    filename="UsersList.csv"
                    data={data}
                    ref={this.csvLinkEl}
                />

                {/* <span style={{ marginLeft: "10px" }}>
                    <ExcelFile
                        filename="Users Data"
                        element={<button type='button' style={{ fontSize: "15px", borderRadius: "10px" }} className='btn btn-success'>Download Excel Users List</button>}>
                        <ExcelSheet dataSet={multiDataSet} name="Users List" />
                    </ExcelFile>
                </span> */}


            </div >
        );
    }
}


function mapStateToProps(rec) {
    // console.log("alalalala:", rec.userReducer.users);
    return {
        users: rec.userReducer.users,
    }
}


// export default AsyncCSV;
export default connect(mapStateToProps, null)(AsyncCSV);




