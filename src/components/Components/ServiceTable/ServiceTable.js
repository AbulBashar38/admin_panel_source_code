import React from 'react'
import { Table, TableBody, TableRow, TableContainer, TableHead, TableCell } from '@mui/material'
import { withStyles } from "@mui/styles";

const TableCellx = withStyles({
    root: {
        borderBottom: "none !important",
        paddingTop: "16px",
        paddingRight: "16px ",
        paddingBottom: "16px",
        paddingLeft: "0px !important",
    }
})(TableCell);
const ServiceTable = ({ data, headless }) => {
    console.log("data service", data)
    return (
        <>
            {/* table with 2 columns by using material ui */}
            <TableContainer>
                <Table>
                    {!headless && <TableHead>
                        <TableRow>
                            <TableCellx align="left">Service</TableCellx>
                            <TableCellx></TableCellx>
                            <TableCellx align="right">Price</TableCellx>
                        </TableRow>
                    </TableHead>}

                    <TableBody>
                        {data?.length > 0 && data?.map((row) => (
                            <TableRow >
                                <TableCellx align="left">{row.title}</TableCellx>
                                <TableCellx></TableCellx>
                                <TableCellx align="right">${row.price}</TableCellx>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}

export default ServiceTable