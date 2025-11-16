import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteTestPlugin } from 'vite-plugin-testing'

export default defineConfig({
  plugins: [
    react(),
    viteTestPlugin(),
  ],
})

import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-test-id' })

import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

{
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "@testing-library/react": "^12.1.2",
    "vitest": "^0.0.117",
    "vite-plugin-testing": "^0.2.2"
  }
}