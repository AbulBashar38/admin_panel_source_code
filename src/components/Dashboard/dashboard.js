import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashbaordData } from '../../actions/userAction';
import { Link } from "react-router-dom";
import Piechart from '../../myComponents/PicChart';
import ApexChart from '../Chart/apexChart';
// import { Bar } from 'react-chartjs-2';
// import { options2, data2 } from "../../myComponents/Barchart"
import { AiFillCheckCircle, BiMessageRounded, BiMessageSquare, BsListCheck, MdCancel } from "react-icons/all"
import PieChart2 from '../../myComponents/PieChart2';
import BasicBar from '../../myComponents/BasicBar';
import Circle from '../../myComponents/Circle';
// import DoghnutChart from '../Components/DoghnutChart/DoghnutChart';
import BarCharts  from '../Components/BarChart/BarChart'
// import {} from ""
const Dashboard = () => {

	const dispatch = useDispatch();
	const { getDashbaord } = useSelector((state) => state.userReducer);

	useEffect(() => {
		dispatch(dashbaordData());
	}, [])
	console.log("dasdh", getDashbaord)
	const iosData = getDashbaord?.ios
	const andriodData = getDashbaord?.android
	return (
		<div className="container-fluid">
			<div className="block-header">
				<div className="row clearfix">
					<div className="col-md-6 col-sm-12">
						<h1>Welcome To Date Jar Admin</h1>
					</div>
				</div>
			</div>
			<BarCharts/>
			<div className="row clearfix">
				<div className="col-lg-3 col-md-6">
					<Link to="/user-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-indigo text-white rounded-circle btn_primary dashboard_icons"><i className="fa fa-users"></i></div>
									<div className="ml-4">
										<span>Total Users</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.users}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div>
				<div className="col-lg-3 col-md-6">
					<Link to="/date-cards-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><i className="fa fa-heart"></i></div>
									<div className="ml-4">
										<span>Total Date Cards</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.dateCards}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div>
				{/* <div className="col-lg-3 col-md-6">
					<Link to="/date-cards-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><i className="fa fa-android"></i></div>
									<div className="ml-4">
										<span>Android Users</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.android}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div> */}
				{/* <div className="col-lg-3 col-md-6">
					<Link to="/date-cards-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><i className="fa fa-apple"></i></div>
									<div className="ml-4">
										<span>IOS Users</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.ios}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div> */}

				<div className="col-lg-3 col-md-6">
					<Link to="/subscriber-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><AiFillCheckCircle /></div>
									<div className="ml-4">
										<span>Subscribed Users</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.subscribe}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div>

				<div className="col-lg-3 col-md-6">
					<Link to="/unsubscriber-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><MdCancel /></div>
									<div className="ml-4">
										<span>Unsubscribed Users</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.unSubscribe}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div>


				{/* <div className="col-lg-3 col-md-6">
					<Link to="/date-cards-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><BiMessageRounded /></div>
									<div className="ml-4">
										<span>User Suggested Ideas</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.requestDataCard}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div>


				<div className="col-lg-3 col-md-6">
					<Link to="/date-cards-list" className="card">
						<div className="card">
							<div className="body">
								<div className="d-flex align-items-center">
									<div className="icon-in-bg bg-azura text-white rounded-circle btn_primary dashboard_icons"><BsListCheck /></div>
									<div className="ml-4">
										<span>No of Forums</span>
										<h4 className="mb-0 font-weight-medium">{getDashbaord?.forum_count}</h4>
									</div>
								</div>
							</div>
						</div>
					</Link >
				</div> */}

				{/* <div className="col-lg-4 col-md-4" > */}
					<Circle name={"Registration"} />
					<Circle  name={"Platform"}/>
					{/* <PieChart2 /> */}
				{/* </div> */}
			
			<div className='col-lg-6 col-md-6' >
			
			<BasicBar />
			</div>
			<div className='col-lg-6 col-md-6' >

			<BasicBar />
			</div>

			</div >
			{/* <ApexChart />
			 */}

			
			{/* <DoghnutChart/> */}
			{/* <Piechart data={getDashbaord} /> */}


			{/* <Bar options={options2} data={data2} /> */}


		</div >
	);

}
export default Dashboard
