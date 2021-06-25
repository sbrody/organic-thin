import React, { useState, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import About from './About';
import Talent from './Talent';
import Contact from './Contact';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [modalActive, setModalActive] = useState(null);

    const onVideoSelect = (data) => {
        setSelectedVideo(data);
        // passing a random number here to ensure that each time a video is clicked it will create a new value and so trigger the useeffect method in videoplayer
        setModalActive(Math.random());
        console.log(data, modalActive);
    }

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Fragment>
                            <Hero />
                            <VideoList onVideoSelect={onVideoSelect} />
                            <VideoPlayer video={selectedVideo} active={modalActive} />
                        </Fragment>
                    </Route>
                    <Route path='/about' component={About} />
                    <Route path='/talent' component={Talent} />
                    <Route path='/contact' component={Contact} />
                </Switch>

            </BrowserRouter>
        </div>
    )
};

export default App;