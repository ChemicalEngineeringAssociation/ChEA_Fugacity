import React from "react";

const VideoPlayer = () => {
    const backgroundImage = `/images/bg3.gif`;
  return (
    <section style={{ padding: "20% 10%",backgroundColor: "#1f2937",backgroundSize: 'cover' }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <video width="900" height="560" controls>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Text on the right side</h2>
          <p>
            This is some text content that is aligned to the right of the
            video. You can add more text or any other components here.
          </p>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <VideoPlayer />
    </div>
  );
}

export default App;
