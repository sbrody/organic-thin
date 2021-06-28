import React from 'react';
import { styled } from '@material-ui/core';
import theme from '../theme';
import about from '../images/about.jpg';
import aboutSmall from '../images/about-small.jpg';
import { Typography, Box, Container } from '@material-ui/core';

const ThemeBox = styled(Box)({
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& img': {
        width: '100%',
        height: 'auto'
    }
})

const HeroTypography = styled(Typography)({
    position: 'absolute',
    color: 'white',
    maxWidth: '960px',
    padding: '1rem',
    fontFamily: 'Courier',
    fontSize: '3rem',
    textShadow: '2px 3px 3px black, 2px -1px 1px red',
    [theme.breakpoints.down('sm')]: {
        position: 'static',
        color: '#212D40',
        textShadow: 'none',
        fontSize: '2rem'
    }
})

const ThemeContainer = styled(Container)({
    padding: '48px 1rem',
    maxWidth: '960px',

});

const IntroTypography = styled(Typography)({
    fontSize: '24px',
    marginBottom: '1rem',
    '& sup': {
        fontSize: '12px'
    }
});

const About = () => {
    return (
        <Box>
            <ThemeBox className="hero">
                <img
                    alt=""
                    src={about}
                    srcSet={`${aboutSmall} 550w, ${about} 767w`}
                />
                <HeroTypography component="h1">Where did it all go wrong? The rise and fall of a media megalith</HeroTypography>
            </ThemeBox>
            <ThemeContainer theme={theme}>
                <IntroTypography>In the summer of 2006 Organic Films was weeks away from starting production on the 12th film in the hugely successful Mission Impossible franchise. It was a far cry from the company's origins in experimental, high concept performance art. But even the most cursory look at its astonishing back catalogue left little doubt it had earned its place at the cinematic 'top table'. </IntroTypography>
                <IntroTypography>Yet by autumn of the same year Organic Films was in freefall. One of Organic Films top directors was ejected from the Mission Impossible set after a dispute over a false moustache. Star performer Adam Brody was locked in a quixotic battle to become the first man to climb Ben Nevis. But most damagingly of all was the attempt to pivot Organic Films into the world of music videos.</IntroTypography>
                <IntroTypography>The Bumble Bee Song, penned by Adam Brody, was a catchy tune. The Organic Films top brass, aware of the growing success of the music streaming business wanted a piece of the pie. They put together a music video in just a few short days and released it to an unsuspecting public.</IntroTypography>
                <IntroTypography>While recognised now as a masterpiece, choosing to shoot the video in the director's flat with the musicians performing in front of a crudely drawn illustration of a bee did not match public expectations of the time. </IntroTypography>
                <IntroTypography>But Organic Films was nothing if not dogged in its disinterest in public opinion and continued to release music videos with uninspired set design and increasingly shambolic levels of musicianship.</IntroTypography>
                <IntroTypography>And then it was gone. The exact circumstances remain unclear but all that remain now are memories. And the films. Those films, those glorious films...</IntroTypography>
            </ThemeContainer>
        </Box>

    )
};

export default About;

