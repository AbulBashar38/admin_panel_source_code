import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import AddButton from '../../Components/AddButton/AddButton'
import { Box, Container } from '@mui/system'
import { Button, Typography, CssBaseline, AppBar, Toolbar, ButtonGroup, Grid, makeStyles, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import LocationCard from '../../Components/Locationcard/LocationCard'
const card = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ManageLocation = () => {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manage Location
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container>
                        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                            Manage Location
                        </Typography>

                        <Grid container spacing={4} >


                            <Grid item xs={9} sm={9} md={9} >
                                <SearchBar
                                    placeholder={"Search..."}
                                    width={"500px !important"}
                                    height={"1em !important"}
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} align="right">
                                <Button variant="contained" className={classes.AddButton} onClick={() => window.location = '/location/add'} >
                                    + Add New Location
                                </Button>
                            </Grid>
                        </Grid>

                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={20} >
                        {card.map(item => (
                            <LocationCard />
                        ))}

                    </Grid>

                </Container>
            </main>

            {/* <Container maxWidth="lg" sx={{ display: "flex" }} >
                <Box sx={{ flexDirection: "column" }}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
                        <Typography variant="h4" component="div" gutterBottom>
                            Manage Location
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, flexDirection: 'row', display: "inline-flex", justifyContent: "space-between" }}>
                        <Box sx={{ width: "50%" }}>
                            <SearchBar
                                placeholder={"Search..."}
                            />
                        </Box>
                        <Box sx={{ width: "50%", float: "right" }}>
                            <AddButton />
                        </Box>
                    </Box>

                </Box>
            </Container> */}
        </>
    )
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#DEDEDE',
        padding: '20px',
        borderRadius: '10px',
    },
}

export default ManageLocation