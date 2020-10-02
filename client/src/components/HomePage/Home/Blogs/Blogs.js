import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import herry2 from '../../../images/Ellipse 2.png';
import herry3 from '../../../images/Ellipse 3.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 250
    },
    firstBox: {
        backgroundColor: 'lightgreen',
        color: 'white',
        minHeight: 250
    }
}));

const Blogs = () => {
    const classes = useStyles();
    return (
        <Container>
            <h4>TESTIMONIAL</h4>
            <h2>What's Our Pateints Says</h2>
            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Box p={1}>
                        <Card className={classes.root, classes.firstBox}>
                            <CardHeader
                                title="Rashed Kabir"
                                subheader="22 Aug 2018"
                            />
                            <CardContent>
                                <Typography  variant="p" component="h4">
                                    Check at least a doctor in a year for your teeth
                            </Typography>
                            </CardContent>
                            <br />
                            <CardActions >
                                <IconButton>
                                    <ArrowRightAltIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box p={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={herry2} alt="" />
                                    </Avatar>
                                }
                                title="Dr. Caudi"
                                subheader="Nov 2020"
                            />
                            <CardContent>
                            <Typography variant="p" component="h4">
                                    2 times of brash in a day can keep you healthy 
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                            </Typography>
                            </CardContent>

                        </Card>
                    </Box>
                    <Box p={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={herry3} alt="" />
                                    </Avatar>
                                }
                                title="Dr. John"
                                subheader="Oct 2020"
                            />
                            <CardContent>
                            <Typography variant="p" component="h4">
                                    The tooth cancer is taking a challenge 
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                            </Typography>
                            </CardContent>

                        </Card>
                    </Box>
                </Box>
            </div>
        </Container>
    );
};

export default Blogs;