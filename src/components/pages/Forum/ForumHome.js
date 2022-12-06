import React, { useEffect, useState } from 'react'
import ForumTable from '../../Components/ForumTable/ForumTable'
import { Box, Container } from '@mui/system'
import {
    styled, Button,
    Typography,
    CssBaseline,
    AppBar,
    Toolbar,
    ButtonGroup,
    Grid,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { fetchForumList } from '../../../actions/forumAction'
import { useDispatch, useSelector } from 'react-redux'
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

const ForumHome = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const forumData = useSelector(state => state.forumReducer)
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [sort, setSort] = useState("-like")
    const [fields, setFields] = useState("experience_description")
    // const []

    console.log("data from store ",forumData)

    useEffect(() => {
        dispatch(fetchForumList(search, page, limit, sort, fields))
    }, [search, page, limit, sort, fields])
    console.log(" data", forumData)

    return (
        <>
            <CssBaseline />
            {/* <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Forum List
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}
            <main>
                <div className={classes.container}>
                    {/* <Container> */}
                    <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: 1,
                        paddingBottom: 2
                    }}
                    >
                        <Typography variant='h5' align='left' >
                            Forum List
                        </Typography>


                    </Grid>
                    <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingTop: 1,
                        paddingBottom: 3
                    }}
                    >
                        <SearchBar
                            placeholder={"Search..."}
                            width={"500px !important"}
                            height={"1em !important"}
                            marginRight={"20px !important"}
                        />
                        <FormControl className={classes.dropdown}>
                            <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                name='place_type'
                                // value={values.place_type}
                                label="Filter"
                                // onChange={handleChange}
                                variant="outlined"
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Filter by latest</MenuItem>
                                <MenuItem value={20}>Filter by oldest</MenuItem>
                                <MenuItem value={30}>Filter by most liked</MenuItem>
                                <MenuItem value={30}>Filter by most disliked</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                   {!forumData.loading && 
                   <Grid>
                        <ForumTable data={forumData} />
                    </Grid>
                    }
                    {/* </Container> */}
                </div>
            </main>
        </>
    )
}

export default ForumHome
