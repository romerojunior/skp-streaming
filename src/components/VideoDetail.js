import React from 'react';

class VideoDetails extends React.Component {
  render() {
    if (!this.props.video) {
      return 'Loading...'
    } else {
      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
      return (
        <div>
          <div className="ui embed">
          <iframe 
            title="video-player"
            width="560" 
            height="315" 
            src={videoSrc} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{this.props.video.snippet.title}</h4>
            <p>{this.props.video.snippet.description}</p>
          </div>
        </div>
      );
    }
  };
}

export default VideoDetails;