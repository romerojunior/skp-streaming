import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

  getVideoItems(videos) {
    const renderedList = videos.map(
      (video) => {
        return (
          <VideoItem 
            key={video.id.videoId} 
            video={video}
            onVideoSelect={this.props.onVideoSelect}
          />
        );
      }
    );
    return renderedList;
  };

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.getVideoItems(this.props.videos)}
      </div>
    );
  };
}


export default VideoList;