import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const ThemeCard = styled(Card)({
    maxWidth: '360px',
    '& .media': {
        height: '160px',
    },
    '& svg': {
        position: 'absolute',
        top: '30%',
        fill: 'white',
        left: 'calc(50% - 10px)'
    },

});

// const videoSelect = (event) => {
//     const video = event.target.offsetParent.attributes.videoid.nodeValue;
//     onVideoSelect(video);
// }

const VideoCard = ({ video, data, onVideoSelect }) => {
    return (
        <Grid item sm={4} xs={12}>
            <ThemeCard>
                <CardActionArea videoid={data.id} onClick={() => onVideoSelect(data.id)}>
                    <PlayCircleFilledIcon />
                    <CardMedia
                        image={video.thumbnails.medium.url}
                        title={video.title}
                        className='media'
                    />
                    <CardContent>
                        <Typography component="h2">{video.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </ThemeCard>
        </Grid>

    )
}

export default VideoCard;