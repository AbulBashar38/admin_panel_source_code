
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
        backgroundColor: "#000",
        color: theme.palette.common.white,
        height: '80px',
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
    height: '80px',
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

export default function NotificationTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">Notification Name</StyledTableCell>
                        <StyledTableCell align="right">Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sl}>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }} spacing={2}>
                                    <Grid container item spacing={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <StyledButton2 variant="contained" >
                                            Remove
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
