import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import herry from '../../images/Ellipse 1.png';
import herry2 from '../../images/Ellipse 2.png';
import herry3 from '../../images/Ellipse 3.png'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
}));

const ReviewsCard = () => {
    const classes = useStyles();

    return (
        <Container>
            <h4>TESTIMONIAL</h4>
            <h2>What's Our Pateints Says</h2>
            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Box p={1}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={herry} alt="" />
                                    </Avatar>
                                }
                                title="Winson Herry"
                                subheader="California, USA"
                            />
                        </Card>
                    </Box>
                    <Box p={1}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={herry2} alt="" />
                                    </Avatar>
                                }
                                title="Winson Herry"
                                subheader="California, USA"
                            />
                        </Card>
                    </Box>
                    <Box p={1}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        <img src={herry3} alt="" />
                                    </Avatar>
                                }
                                title="Winson Herry"
                                subheader="California, USA"
                            />
                        </Card>
                    </Box>
                </Box>
            </div>
        </Container>
    );
};

export default ReviewsCard;