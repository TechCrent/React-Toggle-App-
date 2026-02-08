import { useState } from 'react';

function Toggle() {
  // Boolean state - true = shown, false = hidden
  const [isVisible, setIsVisible] = useState(true);

  function handleToggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Show / Hide Toggle</h2>

      <button
        onClick={handleToggle}
        style={{
          padding: "10px",
          fontSize: "16px",
        }}
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <div
          style={{
            padding: "20px",
            backgroundColor: 'white',
            border: "2px solid blue",
            borderRadius: "8px",
            maxWidth: "500px"
          }}
        >
          <h3>Secret Content</h3>
          <p>This content is now visible</p>
        </div>
      )}

      {!isVisible && (
        <p style={{ color: "#666"}}>
          Content is hidden right now
        </p>
      )}
    </div>
  );
}

export default Toggle;