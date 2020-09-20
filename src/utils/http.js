export function getVideos() {
  return fetch(`https://ml4-platform.herokuapp.com/api/v1/videos`)
    .then(res => res.json())
}

export function getDuplicateVideos(selectedVideo) {
  return fetch(`https://ml4-platform.herokuapp.com/api/v1/duplicates/${selectedVideo}`)
    .then(res => res.json())
}