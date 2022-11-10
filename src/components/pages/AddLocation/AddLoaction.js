import React, { useCallback, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import cuid from 'cuid'
import {
    Button,
    Typography,
    CssBaseline,
    AppBar,
    Toolbar,
    Container,
    TextField,
    Grid,
    Select,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    MenuItem,
    InputLabel,
    Box,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import useStyles from './styles'
import Dropzone from '../../Components/Dropzone/Dropzone'
const AddLoaction = () => {
    const classes = useStyles()

    const [images, setImages] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.map((file) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages(
                    { id: cuid(), src: e.target.result }
                );
            };
            reader.readAsDataURL(file);
            console.log("image", reader.readAsDataURL(file))

            return file;
        });
    }, []);

    console.log("images", images)

    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Add Location
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main style={{ alignItems: "center" }}>
                <div >
                    <Container maxWidth="md"  >
                        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                            Add Location
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
                            <Dropzone onDrop={onDrop} accept={"image/*"} image={images.src} />
                        </Box>
                        <Formik
                            initialValues={{
                                location: '',
                                description: '',
                                vendor_name: '',
                                place_type: '',
                                enable_on_dates: '',
                                enable_payment_by_points: false,
                                email: '',
                                website: '',
                                description: '',
                                image: '',
                            }}
                            validationSchema={Yup.object({
                                firstName: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('Required'),
                                lastName: Yup.string()
                                    .max(20, 'Must be 20 characters or less')
                                    .required('Required'),
                                email: Yup.string().email('Invalid email address').required('Required'),
                                phone: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
                            })
                            }
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >{({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <Form>
                                <Grid className={classes.formbody} container spacing={4} >
                                    <Grid item xs={12} sm={12} md={12} >
                                        <TextField
                                            name="vendor_name"
                                            value={values.vendor_name}
                                            label="Vendor Name"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <TextField
                                            // id="outlined-multiline-flexible"
                                            minRows={4}
                                            multiline
                                            name="description"
                                            value={values.description}
                                            label="Description"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <TextField
                                            name="location"
                                            value={values.location}
                                            label="Location"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label">Place Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                name='place_type'
                                                value={values.place_type}
                                                label="Place Type"
                                                onChange={handleChange}
                                                variant="outlined"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <FormControl fullWidth>
                                        <FormLabel component="legend" >Services</FormLabel>
                                    </FormControl>
                                    <Grid item xs={12} sm={12} md={12} container spacing={2}>

                                        <Grid item xs={8} sm={8} md={8}>
                                            <TextField
                                                name="email"
                                                label="Title"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4}>

                                            <TextField
                                                name="email"
                                                label="Price"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} container spacing={2}>
                                        <Grid item xs={8} sm={8} md={8}>
                                            <TextField
                                                name="email"
                                                label="Title"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4}>

                                            <TextField
                                                name="email"
                                                label="Price"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} container spacing={2}>
                                        <Grid item xs={8} sm={8} md={8}>
                                            <TextField
                                                name="email"
                                                label="Title"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4}>

                                            <TextField
                                                name="email"
                                                label="Price"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >

                                        <FormControlLabel control={<Checkbox
                                            name='enable_payment_by_points'
                                            value={values.enable_payment_by_points}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />} label="Enable payment through points" />

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-helper-label">Enable on dates</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                name='enable_on_dates'
                                                value={values.enable_on_dates}
                                                label="Enable on dates"
                                                onChange={handleChange}
                                                variant="outlined"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                                    </Grid>
                                </Grid>
                            </Form>)}
                        </Formik>
                    </Container>
                </div>




            </main>
        </>
    )
}

export default AddLoaction