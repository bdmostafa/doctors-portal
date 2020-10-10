import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Container, IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import doctorsInfo from '../../DataStore/DoctorsInfo';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center',
        boxShadow: 'none'
    },
});

const OurDoctors = () => {
    const classes = useStyles();
    return (
        <Container align="center">
            <h4 style={{ color: '#15D1C5', fontWeight: 'bold', margin: '3rem' }}>OUR DOCTORS</h4>
            <Box display="flex" justifyContent="center" m={3} p={1}>
                {
                    doctorsInfo.map((doctor, idx) =>
                        <Box key={idx} p={1}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={doctor.name}
                                        height="100%"
                                        image={doctor.img}
                                        title={doctor.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="h1">
                                            {doctor.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="h4">
                                            <PhoneIcon />
                                            {doctor.phone}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    )
                }



            </Box>
        </Container>
    );
};

export default OurDoctors;