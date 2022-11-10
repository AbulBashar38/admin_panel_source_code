import React from 'react'
import NotificationTable from '../../Components/NotificationTable/NotificationTable'
import { Box, Container } from '@mui/system'
import { styled, Button, Typography, CssBaseline, AppBar, Toolbar, ButtonGroup, Grid, makeStyles, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#0F8FA8",
    color: theme.palette.common.white,
    height: '40px',
    // width: '100%',
    borderRadius: '10px',
    paddingLeft:'20px',
    paddingRight:'20px',
    textTransform:'capitalize',
    fontWeight:'bold',
    '&:hover': {
        backgroundColor: "#c2185b",
        color: theme.palette.common.white,
    },
}));

const ManageNotification = () => {
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
                    {/* <Container> */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', paddingTop:1, paddingBottom:2 }} >
                            <Typography variant='h5' align='left' >
                                Manage Notification
                            </Typography>
                            <Link to={'/add-notification'}>
                            <StyledButton>
                                + Add New Notification
                            </StyledButton>
                            </Link>
                            

                        </Grid>

                        <Grid>
                            <NotificationTable />
                        </Grid>
                    {/* </Container> */}
                </div>
            </main>
        </>
    )
}

export default ManageNotification
