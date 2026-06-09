function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>Baajao</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/songs">Songs</a>
          <a href="/artists">Artists</a>
          <a href="/albums">Albums</a>
          <a href="/playlist">Playlist</a>
        </div>
      </nav>
      <div className="main-container">
        <div className="audio-player">
          <h2>Play Your Music</h2>
          <div className="file-upload">
            <input 
              type="file" 
              id="file-input"
              accept=".mp3,audio/*" 
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const audioElement = document.getElementById('local-audio');
                  if (audioElement) {
                    const objectUrl = URL.createObjectURL(file);
                    audioElement.src = objectUrl;
                    audioElement.play();
                  }
                }
              }} 
            />
            <label htmlFor="file-input" className="file-upload-label">
              🎵 Select Audio File
            </label>
          </div>
          <div className="audio-container">
            <audio id="local-audio" controls>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
