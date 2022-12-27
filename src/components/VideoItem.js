import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
  render() {
    return (
      <div className="video-item item" onClick={() => this.props.onVideoSelect(this.props.video)}>
        <img 
          alt={this.props.video.snippet.title}
          className="ui image" 
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
          <div className="description">{this.props.video.snippet.description}</div>
        </div>        
      </div>
    );
  };
}


export default VideoItem;