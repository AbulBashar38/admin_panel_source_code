import React from 'react'
import NotificationTable from '../../Components/NotificationTable/NotificationTable'
import { borderRadius, Box, Container } from '@mui/system'
import { styled, Button, Typography, CssBaseline, AppBar, Toolbar, ButtonGroup, Grid, makeStyles, Card, CardMedia, CardContent, CardActions, TextField } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom'
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#0F8FA8",
    color: theme.palette.common.white,
    height: '40px',
    // width: '100%',
    borderRadius: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: "#c2185b",
        color: theme.palette.common.white,
    },
}));

const AddNotification = () => {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            {/* <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manage Location
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}
            <main>
                <div className={classes.container}>
                    <Container maxWidth="md">
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 1, paddingBottom: 2 }} >
                            <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                               <Link style={{color:"grey"}} to='/notification'>
                                <ArrowBackIosIcon />
                               </Link>
                                <Typography variant='h5' align='left' color={"grey"}>
                                    Manage Notification
                                </Typography>
                            </Grid>

                            <StyledButton>
                               Send Notification
                            </StyledButton>

                        </Grid>

                        <Grid container sx={{
                            display: 'grid',
                            justifyContent: 'center',
                            paddingTop: 1,
                            paddingBottom: 2,
                            border: " 1px solid grey ",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff"

                        }} >

                            <Grid minWidth="md" sx={{ padding: "75px 150px", width: "800px" }} >
                                <Typography variant='h7' fontWeight='bold' >
                                    Notification text
                                </Typography>
                                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: 2 }}>
                                    <TextField
                                        // id="outlined-multiline-flexible"
                                        minRows={4}
                                        multiline
                                        name="description"
                                        // value={"text"}
                                        placeholder="Text here"
                                        fullWidth
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default AddNotification
