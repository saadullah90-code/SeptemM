const API_KEY = 'AIzaSyBeHbUpJjsi9CNh0LlpSZnEbEHuGsPiZ7E';
const CHANNEL_ID = 'UCtNMYNUGoElZU9rSmzvNOBg'; // your channel ID

export async function fetchYoutubeVideos() {
  let allVideos = [];
  let nextPageToken = '';
  let baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;

  try {
    while (true) {
      const res = await fetch(`${baseUrl}&pageToken=${nextPageToken}`);
      const data = await res.json();

      if (data.items) {
        allVideos = [...allVideos, ...data.items];
      }

      if (!data.nextPageToken) break; // No more pages
      nextPageToken = data.nextPageToken;
    }

    return allVideos.filter(video => video.id.kind === 'youtube#video'); // Only videos, not playlists or channels
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}
