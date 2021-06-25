import React from 'react';
import theme from '../theme';
import { styled, Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';

const ThemeCard = styled(Card)({
    width: '480px',
    maxWidth: '100%',
    display: 'flex',
    '& .media': {
        width: '200px',
        maxWidth: '50%',
        flex: '1 0 auto'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        '& .media': {
            height: '200px',
            width: '100%',
            maxWidth: 'none'
        }

    }
})

const TalentCard = ({ name, biog, photo }) => {
    console.log(photo.name);
    return (
        <Grid item sm={6} xs={12}>
            <ThemeCard>
                <CardContent>
                    <Typography component="h3" variant="h5">{name}</Typography>
                    <Typography component="p">{biog}</Typography>
                </CardContent>
                <CardMedia image={photo} title={name} className='media' />
            </ThemeCard>
        </Grid>

    )
}

export default TalentCard;