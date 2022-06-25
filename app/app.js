import React from 'react'
import ReactDOM from 'react-dom'

//Components
import Navbar from './components/navbar.js'
import Main from './components/main.js'

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Main></Main>
		</>
	)
}
ReactDOM.render(<App />, document.querySelector('#root'))
