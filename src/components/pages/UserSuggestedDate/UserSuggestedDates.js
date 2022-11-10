import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#0F8FA8",
        color: theme.palette.common.white,
        height: '50px',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    height: '100px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#D63D6C",
    color: theme.palette.common.white,
    height: '30px',
    // width: '100%',
    borderRadius: '5px',
    '&:hover': {
        backgroundColor: "#c2185b",
        color: theme.palette.common.white,
    },
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: "#535353",
    color: theme.palette.common.white,
    height: '30px',
    // width: '100%',
    borderRadius: '5px',
    '&:hover': {
        backgroundColor: "#424242",
        color: theme.palette.common.white,
    },
}));

const rows = [
    { sl: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { sl: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { sl: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { sl: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { sl: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },

];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        <StyledTableCell>sl.</StyledTableCell>
                        <StyledTableCell align="center">User Email</StyledTableCell>
                        <StyledTableCell align="center">Date Card Name</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Location</StyledTableCell>
                        <StyledTableCell align="center">Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sl}>
                            <StyledTableCell component="th" scope="row">
                                {row.sl}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center" >
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="center">

                                <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={2}>
                                    <Grid container item spacing={1} sx={{ display: 'flex', justifyContent: 'center' }} >
                                        <StyledButton variant="contained" >

                                            Accept
                                        </StyledButton>
                                    </Grid>
                                    <Grid container item spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <StyledButton2 variant="contained" >

                                            Reject
                                        </StyledButton2>
                                    </Grid>

                                </Grid>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
