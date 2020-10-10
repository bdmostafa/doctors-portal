import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import blogsInfo from '../../DataStore/BlogsInfo';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 250
    },
    firstBox: {
        backgroundColor: 'lightgreen',
        backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
        color: 'white',
        minHeight: 250,
        position: 'relative'
    },
    quoteIcon: {
        fontSize: '15rem',
        position: 'absolute',
        color: '#4FDCE8',
        marginTop: '-130px',
        opacity: '.5',
        marginLeft: '-40px'
    }
}));

const Blogs = () => {
    const classes = useStyles();
    return (
        <Container align="center" style={{ marginTop: '5rem' }}>
            <h4 style={{ color: '#1CC7C1' }}>OUR BLOG</h4>
            <h2 style={{ color: '#203047', fontWeight: 'bold' }}>From Our Blog News</h2>
            <Box display="flex" justifyContent="center" mt={5} p={1}>
                <Box p={1} m={1}>
                    <Card className={classes.root, classes.firstBox}>
                        <CardHeader
                            title="Rashed Kabir"
                            subheader="22 Aug 2018"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h4">
                                Check at least a doctor in a year for your teeth
                            </Typography>
                            <FormatQuoteIcon className={classes.quoteIcon} />
                        </CardContent>
                        <br />
                        <CardActions >
                            <IconButton>
                                <ArrowRightAltIcon style={{ color: 'white' }} />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>
                {
                    blogsInfo.map((article, idx) =>
                        <Box key={idx} p={1}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            <img src={article.img} alt="" />
                                        </Avatar>
                                    }
                                    title={article.author}
                                    subheader={article.date}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h4">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    )
                }
            </Box>
        </Container>
    );
};

export default Blogs;