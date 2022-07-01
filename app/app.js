import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import Navbar from './components/navbar'
import Main from './components/main'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Main></Main>
    </React.Fragment>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
