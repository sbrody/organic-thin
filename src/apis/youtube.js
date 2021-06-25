import axios from 'axios';

const KEY = 'AIzaSyAKRPoY2bmBt7P-Mp_s1kaCkqfz0FAxwaI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
        part: 'snippet',
        key: KEY
    }
});

