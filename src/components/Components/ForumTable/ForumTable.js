
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
import Typography from '@mui/material/Typography';
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
    { sl: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 ,image:"https://source.unsplash.com/random" },
    { sl: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,image:"https://source.unsplash.com/random" },
    { sl: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,image:"https://source.unsplash.com/random" },
    { sl: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,image:"https://source.unsplash.com/random" },
    { sl: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,image:"https://source.unsplash.com/random" },
];

export default function ForumTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">User Name</StyledTableCell>
                        <StyledTableCell align="left">Date card number</StyledTableCell>
                        <StyledTableCell align="left">Date card Name</StyledTableCell>
                        <StyledTableCell align="left">Experiance Description</StyledTableCell>
                        <StyledTableCell align="left">Likes</StyledTableCell>
                        <StyledTableCell align="left">Comments</StyledTableCell>
                        <StyledTableCell align="right">Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sl}>
                            <StyledTableCell align="left">
                            <Grid sx={{ display: 'flex', justifyContent: "flex-start", alignItems: "center" }}>
                            <img src={row.image} style={{borderRadius:"50%",height:"40px",width:"40px", marginRight:"30px"}} />

                                <Typography variant='h7' align='left' fontWeight={"bold"} color={"grey"}>
                                {row.name}
                                </Typography>
                            </Grid>
                                
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.fat}</StyledTableCell>
                            <StyledTableCell align="left">{row.carbs}</StyledTableCell>

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
