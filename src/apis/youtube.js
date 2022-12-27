import axios from 'axios';

const KEY = 'AIzaSyDZNd--rAzb6_rFkVzdB8ECDzM5wa3yRMM';

export default axios.create(
  {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
  }
);