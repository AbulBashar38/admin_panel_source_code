import React, { useEffect, useState, useCallback } from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import AddButton from '../../Components/AddButton/AddButton'
import { Box, Container } from '@mui/system'
import { Button, Typography, CssBaseline, AppBar, Toolbar, ButtonGroup, Grid, makeStyles, Card, CardMedia, CardContent, CardActions, Pagination } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import LocationCard from '../../Components/Locationcard/LocationCard'
import { Link } from 'react-router-dom'
// import { getVendorLocation } from '../../../services/services'
import { fetchAllLocation } from '../../../actions/locationAction'
import { useDispatch, useSelector } from 'react-redux'

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ManageLocation = () => {
    const classes = useStyles()
    // const [loading, setLoading] = useState(false)
    const [locationData, setlocationData] = useState([])
    // const [search, setSearch] = useState('')
    // const [page, setPage] = useState(1)
    // const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [sort, setSort] = useState('')
    const dispatch = useDispatch()

    const location = useSelector(state => state.locationReducer)
    const { data, error, loading, page, limit, search } = location


    useEffect(() => {
        dispatch(fetchAllLocation(search, page, limit))
        console.log("Manage loaction data", data)
    }, [search, page, limit])


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
                    <Container>
                        <Typography variant="h4" align="left" color="text.primary" gutterBottom>
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
                                <Link to={'/add-location'}>
                                    <Button variant="contained" className={classes.AddButton}  >
                                        + Add New Location
                                    </Button>
                                </Link>

                            </Grid>
                        </Grid>

                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={20} >
                        {data?.vendors?.length > 0 && data?.vendors?.map(item => (
                            <LocationCard data={item} />

                        ))}

                    </Grid>


                </Container>
                <Container className={classes.pagination} >
                    <Pagination count={data?.totalPages} page={page} onChange={(e, value) => dispatch(fetchAllLocation(search, value, limit))} />
                </Container>
            </main>

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