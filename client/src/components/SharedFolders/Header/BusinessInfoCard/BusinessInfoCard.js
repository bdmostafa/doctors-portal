import { Grid, Icon, makeStyles } from '@material-ui/core';
import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import businessInfoData from '../../../DataStore/BusinesInfoData';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    box: {
        marginTop: '-5rem',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        width: '100%',
        borderRadius: '.35rem'
    },
    iconStyle: {
        paddingRight: '1rem',
        marginLeft: '-1rem',
        "& .MuiSvgIcon-root": {
            fontSize: "4rem"
        }
    },
}));

const BusinessInfo = () => {
    const classes = useStyles();

    const handleIcon = (icon) => {
        switch (icon) {
            case 'AccessTimeIcon': return <AccessTimeIcon />
            case 'RoomIcon': return <RoomIcon />
            case 'PhoneInTalkIcon': return <PhoneInTalkIcon />
            default: return null
        }
    }

    return (
        <Grid className={classes.root} container spacing={3}>
            {
                businessInfoData.map((info, idx) =>
                    <Grid key={idx} style={{ padding: '0 5px' }} item sm={4}>
                        <div className={classes.box} style={{ backgroundColor: info.background }}>
                            <div className={classes.iconStyle}>
                                <Icon>{handleIcon(info.icon)}</Icon>
                            </div>
                            <div>
                                <h6>{info.title}</h6>
                                <small>{info.description}</small>
                            </div>
                        </div>
                    </Grid>
                )
            }
        </Grid>
    );
};

export default BusinessInfo;