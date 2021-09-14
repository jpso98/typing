import React from 'react'

const App = () => {
  return (
    <div className = 'container'>
      <div className="valid-keys">
        <span className = 'matched'>jp</span>
        <span className = 'remainder'>so</span>
      </div>
      <div className="typed-keys"></div>
      <div className="completed-words">
        <ol>
          <li>jpso</li>
          <li>jpsinho</li>
        </ol>
      </div>
    </div>
  )
}


export default App;
