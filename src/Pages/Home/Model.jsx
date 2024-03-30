export default function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContent">
          <button className="closeButton" onClick={onClose}>&times;</button>
          <div className="modalBody">
            <h2>TekoAI Chatbot</h2>
            <p>这里是关于TekoAI Chatbot的简介。</p>
            <img src="your-image-url.jpg" alt="Chatbot" />
            <p>这里是更详细的描述。</p>
            <video controls>
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
  