import axios from 'axios';

const KEY ="AIzaSyBFXmQVe5_u-mgaMBJQtX7EinpWd4Gm2iA";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});
