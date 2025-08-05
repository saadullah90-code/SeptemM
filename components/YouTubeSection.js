'use client';
import React, { useEffect, useState } from 'react';
import { fetchYoutubeVideos } from '../utils/fetchVideos';

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);

useEffect(() => {
  async function getVideos() {
    const videoData = await fetchYoutubeVideos();
    const reversedData = [...videoData].reverse(); // reverse the array to show last videos first
    setVideos(reversedData);
  }

  getVideos();
}, []);


  return (
    <section className="youtube-section">
      <h2 className="section-title">Our Films</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="thumbnail"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            </a>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-title"
            >
              {video.snippet.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeSection;
