import React from 'react';
import { styled } from '@material-ui/core';
import theme from '../theme';
import { Typography, Container, } from '@material-ui/core';
import RenderVideos from './RenderVideos';

const IntroTypography = styled(Typography)({
    fontSize: '24px',
    marginBottom: '1rem',
    '& sup': {
        fontSize: '12px'
    }
});

const ThemeContainer = styled(Container)({
    padding: '48px 1rem',
    maxWidth: '960px',

});




const VideoList = ({ onVideoSelect }) => {
    return (
        <ThemeContainer theme={theme}>
            <IntroTypography >
                It was the groundbreaking film production studio that from 2000-2006 came to epitomise what many now call the 'golden age of cinema'.<sup>(verification required.)</sup>
            </IntroTypography>
            <IntroTypography >
                With its hard-hitting narratives and mind-melting concepts, Organic Films mixed high art with high drama. But with a conquest of Hollywood seemingly inevitable the company collapsed in a maelstrom of recrimination, creative excess and an ill-judged foray into music production.
            </IntroTypography>
            <IntroTypography>
                Now, for the very first time, the full, completely unedited, Organic Films back catalogue is available in stunningly low resolution. Sit back and enjoy - this could get emotional...
            </IntroTypography>
            <RenderVideos onVideoSelect={onVideoSelect} />
        </ThemeContainer>
    )
}

export default VideoList;