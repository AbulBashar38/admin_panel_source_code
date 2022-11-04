import React, { useEffect, useState } from 'react';
import { MDBDataTableV5  } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { agencyDeleteID, allAgency } from '../../actions/agencyAction';


const AgencyList = (props) => {

	const dispatch = useDispatch();
	const { agencyList,agencyDelete } = useSelector((state) => state.agencyReducer);
	const[tablebody, setTableBody] = useState([]);	
	let count = 0;

	useEffect(() => {
		dispatch(allAgency());
	}, [])

	const DeleteAgency = (agency_id) => {		
		dispatch(agencyDeleteID(agency_id));
	}

	useEffect(() => {
		if(agencyDelete){
			toast.error(agencyDelete.msg);			
		}
		dispatch(allAgency());
	 },[agencyDelete])

	useEffect(() => {
        const userDataFiltered = agencyList?.map((x) => {
			let jsx  = (<>
				<Link to={`agency-add/${x._id}`}><button type="button"  className="btn btn-sm btn-default" title="Order Details" data-for="send" data-tip="true" currentitem="false"><i className="icon-pencil"></i></button></Link>					             				
				<button type="button" onClick={(e) => DeleteAgency(x._id)}  className="btn btn-sm btn-default" title="Delete" data-for="send" data-tip="true" currentitem="false"><i className="icon-trash"></i></button>
				</>
				)

			x.action = jsx;			
			return x
		})
		
		setTableBody({

			columns: [
				
				// {
				// 	label: 'Agency Name',
				// 	field: 'order_number',
				// 	width: 150,					
				// },
				{
					label: 'Agency Name',
					field: 'hospital_name',
					width: 150,					
				},
				{
					label: 'Email',
					field: 'email',
					width: 150,					
				},
				{
					label: 'Action',
					field: 'action',
					width: 10
				}
				
			],

			rows : userDataFiltered ? userDataFiltered : []

		  })
	  },[agencyList])

	return <>
		<div className="row clearfix">
					<div className="col-lg-12">
						<div className="card">
							<div className="header" style={{marginTop:20}}>
								<h4>Agency List </h4>								
								<Link to="/agency-add" className="btn btn-sm btn-primary mr-1" title="">Add New Agency</Link>
								
								<Toaster
									position="top-center"
									reverseOrder={false}
									toastOptions={{
										style: {
											border: '1px solid #713200',
											padding: '16px',
											color: '#713200',
											fontSize: '17px'
										},
									}}
								/>
							</div>
							<div className="body">
								<div className="table-responsive">
									{agencyList?.length && (
									<MDBDataTableV5
										noBottomColumns
										className="table table-hover js-basic-example dataTable table-custom spacing5"
										entriesOptions={[5, 10, 20, 25]}
										entries={5}
										paging
										pagesAmount={15}
										data={tablebody}                                        
                                        
										// searchTop
										sortRows={['user_name']}
										 //searchBottom={true}
										// onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
									/>)}
									
								</div>
							</div>
						</div>
					</div>
					
				</div>



	</>



}
export default AgencyList
