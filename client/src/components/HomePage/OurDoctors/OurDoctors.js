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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center'
    },
});

const OurDoctors = () => {
    const classes = useStyles();
    return (
        <Container style={{ width: '100%' }}>
            <h2>OUR DOCTORS</h2>
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Box p={1}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Dr. Caudi"
                                height="100%"
                                image="https://i.ibb.co/hZdfwfS/5790-removebg.png"
                                title="Dr. Caudi"
                            />
                            <CardContent>
                                <Typography variant="p" component="h1">
                                    Dr. Caudi
                    </Typography>
                                <Typography variant="p" color="textSecondary" component="h4">
                                    <IconButton>
                                        <PhoneIcon />
                                    </IconButton>
                        +61 452 200 126
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box p={1}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Dr. Caudi"
                                height="100%"
                                image="https://i.ibb.co/hZdfwfS/5790-removebg.png"
                                title="Dr. Caudi"
                            />
                            <CardContent>
                                <Typography variant="p" component="h1">
                                    Dr. Caudi
                    </Typography>
                                <Typography variant="p" color="textSecondary" component="h4">
                                    <IconButton>
                                        <PhoneIcon />
                                    </IconButton>
                        +61 452 200 126
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box p={1}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Dr. Caudi"
                                height="100%"
                                image="https://i.ibb.co/hZdfwfS/5790-removebg.png"
                                title="Dr. Caudi"
                            />
                            <CardContent>
                                <Typography variant="p" component="h1">
                                    Dr. Caudi
                    </Typography>
                                <Typography variant="p" color="textSecondary" component="h4">
                                    <IconButton>
                                        <PhoneIcon />
                                    </IconButton>
                        +61 452 200 126
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
};

export default OurDoctors;