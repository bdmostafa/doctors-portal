import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import testimonialsInfo from '../../DataStore/TestimonialsInfo';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        margin: '1rem'
    },
    root: {
        '& span': {
            color: '#1CC7C1'
        }
    },
    icon: {
        '& .MuiSvgIcon-root': {
            fontSize: '15rem',
            color: '#1CC7C1'
        }
    }
}));

const ReviewsCard = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box
                mt={5}
                mb={1}
                display="flex"
                justifyContent="between"
                alignItems="center"
            >
                <Box flexGrow={1}>
                    <h4 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h4>
                    <h2>What's Our Pateints <br /> Says</h2>
                </Box>
                <Box className={classes.icon}>
                    <FormatQuoteIcon />
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" m={1} p={1}>
                {
                    testimonialsInfo.map((review, idx) =>
                        <Box key={idx} p={1}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {review.description}
                                    </Typography>
                                </CardContent>
                                <CardHeader
                                    className={classes.root}
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            <img src={review.img} alt="" />
                                        </Avatar>
                                    }
                                    title={review.name}
                                    subheader={review.address}
                                />
                            </Card>
                        </Box>
                    )
                }
            </Box>
        </Container>
    );
};

export default ReviewsCard;