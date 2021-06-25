import React from 'react';
import { styled } from '@material-ui/core';
import theme from '../theme';
import hero from '../images/hero.jpg';
import heroSmall from '../images/hero-small.jpg';
import { Typography, Box } from '@material-ui/core';

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


const Hero = () => {
    return (
        <ThemeBox className="hero">
            <img
                alt=""
                src={hero}
                srcSet={`${heroSmall} 550w, ${hero} 767w`}
            />
            <HeroTypography component="h1">Organic Films: The sound, the fury and the pantomime horse</HeroTypography>
        </ThemeBox>
    )
};

export default Hero;