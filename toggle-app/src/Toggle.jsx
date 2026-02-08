import { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Show / Hide Toggle</h2>

      <button
        onClick={handleToggle}
        className="px-5 py-2.5 text-base font-medium text-white bg-blue-600 rounded hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <div className="mt-5 p-5 bg-white border-2 border-blue-600 rounded-lg max-w-[500px]">
          <h3 className="text-lg font-medium mb-2">Secret Content</h3>
          <p className="text-gray-700">This content is now visible</p>
        </div>
      )}

      {!isVisible && (
        <p className="mt-4 text-gray-600 italic">
          Content is hidden right now
        </p>
      )}
    </div>
  );
}

export default Toggle;