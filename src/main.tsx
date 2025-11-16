// File: src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// File: src/App.tsx
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Vite + React + Typescript Example
        </p>
      </header>
    </div>
  )
}

export default App
