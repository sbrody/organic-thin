import React from 'react';
import { styled } from '@material-ui/core';
import theme from '../theme';
import { Typography, Box, Container, Grid } from '@material-ui/core';
import martin from '../images/martin.jpg';
import andy from '../images/andy.jpg';
import adam from '../images/adam.jpg';
import hugh from '../images/hugh.jpg';
import TalentCard from './TalentCard';

const ThemeBox = styled(Box)({
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const HeaderTypography = styled(Typography)({
    maxWidth: '960px',
    padding: '1rem',
    fontFamily: 'Courier',
    fontSize: '3rem',
    textShadow: '2px -1px 1px red',
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

const talentList = [

    {
        name: 'Hugh Lawton',
        biog: 'A professional dancer, Hugh brought his unique interpretation of rhythm to the Organic Films roster. A firm fan favourite in series 1 of Strictly Come Dancing, Hugh was taken off the show after a scuffle with Bruce Forsyth.',
        photo: hugh
    },
    {
        name: 'Adam Brody',
        biog: "Arguably the brightest star in the Organic Films constellation, Adam's career since has been blighted by legal wrangles, including a long-running dispute with Kraft Foods over his claim to have invented cheese.",
        photo: adam
    },
    {
        name: 'Martin Wood',
        biog: "A performance artist by trade Martin could often be found standing in London's Leicester Square pretending to be a statue. He has since entered politics and is currently Liberal Democrat MP for West Wycombe.",
        photo: martin
    },
    {
        name: 'Andy Cullen',
        biog: 'A talented jazz trumpeter, Andy brought authenticity to his role as a ghostly musician in Bandstand. Following the release of the film, Andy never played the trumpet or acted again.',
        photo: andy
    }

]


const renderTalentCards = talentList.map((talent) => {
    console.log({ talent });
    return (
        <TalentCard name={talent.name} biog={talent.biog} photo={talent.photo} />
    )
});


const Talent = () => {
    return (
        <Box>
            <ThemeBox>
                <HeaderTypography component="h1">Organic Films: The talent</HeaderTypography>
            </ThemeBox>
            <ThemeContainer>
                <IntroTypography>Organic Films would not have been so influential without the incredible talent it had at its disposal. Some of the more notable players are listed below.</IntroTypography>
                <Grid container spacing={3} style={{ marginTop: '2rem' }} >
                    {renderTalentCards}
                </Grid>
            </ThemeContainer>
        </Box>

    )
}

export default Talent;