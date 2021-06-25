import React, { useState, useEffect } from 'react';
import { Box, styled, Typography, Button } from '@material-ui/core';


const ThemeBox = styled(Box)({
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const ThemeButton = styled(Button)({
    margin: '2rem'
})

const Contact = () => {

    const [revealMe, setRevealMe] = useState(false);
    const [revealLastBit, setRevealLastBit] = useState(false);



    const revealNext = () => {
        setRevealMe(true);
        console.log('click');
    };

    const revealLast = () => {
        setRevealLastBit(true);
    }

    const nextSection = () => {
        if (!revealMe) {
            return;

        }

        return (
            <Box style={{ 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'column' }}>
                <Typography>Didn't you read the last message?</Typography>
                <ThemeButton color="primary" variant="contained" onClick={revealLast}>Try again</ThemeButton>
            </Box>

        )
    }

    const lastSection = () => {
        if (!revealLastBit) {
            return
        }
        return (
            <Box style={{ 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'column' }}>
                <Typography>Stop pressing buttons!</Typography>
            </Box>
        )
    }

    useEffect(() => {
        lastSection();
        nextSection();
    }, revealLastBit, revealMe)

    return (
        <ThemeBox>
            <Typography>
                Organic Films doesn't exist any more, how can you contact it? Have you not read any of this site?
            </Typography>
            <ThemeButton color="primary" variant="contained" onClick={revealNext}>I still really want to make contact!</ThemeButton>
            {nextSection()}
            {lastSection()}
        </ThemeBox>
    )
}

export default Contact;