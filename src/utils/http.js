const BASE_URL = "https://ml4-platform.herokuapp.com";

export function getVideos() {
  return fetch(`${BASE_URL}/api/v1/videos`)
    .then(res => res.json())
}

export function getDuplicateVideos(selectedVideo) {
  return fetch(`${BASE_URL}/api/v1/duplicates/${selectedVideo}`)
    .then(res => res.json())
}