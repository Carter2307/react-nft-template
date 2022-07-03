import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import Navbar from './components/navbar'
import Main from './components/main'
import GetElement from './class/GetElement'
import Menu from './class/Menu'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  initComponents() {
    this.elements = new GetElement().elements
    this.menu = new Menu(
      this.elements.navbar.container,
      this.elements.navbar.button,
      this.elements.navbar.menu,
      this.elements.navbar.links,
      '-visible-flex'
    )
  }

  componentDidMount() {
    this.initComponents()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Main></Main>
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <Navbar></Navbar>
//       <Main></Main>
//     </React.Fragment>
//   )
// }

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
