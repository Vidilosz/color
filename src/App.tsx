import { useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()

function Fejlec() {
  return (
    <header className="app-header">
      <h1>Color Changer</h1>
    </header>
  )
}

function ColorChanger() {
  const [hatterszin, setHatterszin] = useState('#f2f7ff')

  function ujSzinGeneralasa() {
    const szin = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
    setHatterszin(`#${szin}`)
  }

  return (
    <div className="app" style={{ backgroundColor: hatterszin }}>
      <Fejlec />
      <main className="color-changer">
        <button type="button" onClick={ujSzinGeneralasa}>
          Új szín generálása
        </button>
      </main>
      <Lablec />
    </div>
  )
}

function Lablec() {
  return (
    <footer className="app-footer">
      <p>© {currentYear} Color Changer</p>
    </footer>
  )
}

function App() {
  return <ColorChanger />
}

export default App
