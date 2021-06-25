import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import VideoCard from './VideoCard';
import { Grid } from '@material-ui/core';

const videoIds = [
    '8qGkO-yl_1w',
    'Z_Lez87ydFA',
    'ychMLRdTo6c',
    'g0cKLGhmhNA',
    'VZf6Y5q9ZrY',
    'xiJXvkiHqOI',
    'g2GeXTA2bW0',
    '2lWzHT9o4zg',
    '9tLfFzdCCyA',
    '9ZHMvcQYrbU',
    'gd9FDeOF14E',
    'M4GV0OkRfmg',
    'w3Y-ByM6swo'
];


const RenderVideos = ({ onVideoSelect }) => {

    const [returnedVideos, setReturnedVideos] = useState([]);

    // define the video fetch from youtube
    const returnVideoInfo = async (id) => {
        return await youtube.get('', {
            params: {
                id: id
            }
        })
    };

    // carry out the fetch for all the video ids (needs Promise.all)
    const mapReturnedData = async () => {
        const res = await Promise.all(videoIds.map(returnVideoInfo));
        setReturnedVideos(res);
    }

    // map through the resulting array
    const renderedData = returnedVideos.map((res) => {
        return <VideoCard video={res.data.items[0].snippet} data={res.data.items[0]} onVideoSelect={onVideoSelect} key={res.data.items[0].id} />
    });




    useEffect(() => {
        mapReturnedData();

    }, [])

    if (!renderedData) {
        return '..loading'
    }
    return (
        <Grid container spacing={2} style={{ marginTop: '2rem' }} >
            {renderedData}
        </Grid>
    )
}


export default RenderVideos;

