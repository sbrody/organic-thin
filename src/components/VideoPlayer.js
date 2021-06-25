import React, { useState, useEffect } from 'react';
import { Modal, Paper, styled } from '@material-ui/core';

// need to trigger handlOpen when active props changes - did it in app.js - by toggline active state
// need Redux ... hold state in store ....

const ThemeModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const ThemePaper = styled(Paper)({
    maxWidth: '100%',
    '& iframe': {
        maxWidth: '100%',
        display: 'block'
    }
})

const VideoPlayer = ({ video, active }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (active) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
        console.log(active);
    };

    useEffect(() => {
        console.log(active);
        handleOpen()
    }, [active])

    console.log(video);
    console.log(active);

    const videoSrc = `https://youtube.com/embed/${video}`;
    console.log(videoSrc);

    return (
        <div>
            <ThemeModal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ThemePaper>
                    <div>
                        <iframe width="560" height="315" title="video player" allow="fullscreen" allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen" src={videoSrc} />
                    </div>
                </ThemePaper>
            </ThemeModal>
        </div>
    )
}

export default VideoPlayer;