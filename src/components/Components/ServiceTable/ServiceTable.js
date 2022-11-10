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
                        <TableRow >
                            <TableCellx align="left">Service 1</TableCellx>
                            <TableCellx></TableCellx>
                            <TableCellx align="right">$50</TableCellx>
                        </TableRow>
                        <TableRow>
                            <TableCellx align="left">Service 2</TableCellx>
                            <TableCellx></TableCellx>
                            <TableCellx align="right">$80</TableCellx>
                        </TableRow>
                        <TableRow>
                            <TableCellx align="left">Service 3</TableCellx>
                            <TableCellx></TableCellx>
                            <TableCellx align="right">$90</TableCellx>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}

export default ServiceTable