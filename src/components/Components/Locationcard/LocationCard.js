import React from 'react'
import useStyles from './styles'
import { Button, Typography, Grid, Card, CardMedia, CardContent, CardActions, colors } from '@mui/material'
import { Box, color, Container } from '@mui/system'
import ServiceTable from '../ServiceTable/ServiceTable'
const LocationCard = () => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} sm={6} md={4} className={classes.cardGridItem} >
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography fontSize="16px" fontWeight="800" align="left" className={classes.cardContent.h5} gutterBottom>
                            Date places to fun
                        </Typography>
                        <Grid container spacing={2} >
                            <Grid item xs={6} sm={6} md={6} >
                                <Typography fontSize="15px" align="left" className={classes.cardContent.h5} gutterBottom>
                                    Location: Laguna Beach
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} >
                                <Typography fontSize="15px" align="right" className={classes.cardContent.h5} gutterBottom>
                                    Type: 1234
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography fontSize="12px" gutterBottom>
                            This is a media card. You can use this section to describe the content.
                        </Typography>
                        <Typography fontSize="14px" align="left" gutterBottom>
                            Services
                        </Typography>
                        <ServiceTable headless={true} />
                        <Typography fontSize="12px" className={classes.paymentLabelEnabled}>
                            Payment through points enabled
                        </Typography>
                        <Typography fontSize="12px" className={classes.tags}>
                            Tags#
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.buttonGroups}>
                        <Button size="large" color="secondary" variant="contained" fullWidth >
                            Edit
                        </Button>
                        <Button size="large" variant="contained" className={classes.greyButton}>
                            Remove
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        </>
    )
}

export default LocationCard