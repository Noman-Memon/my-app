import logo from './logo.svg'
import './App.css'

let name = 'Noman'
function App() {
  return (
    <>
      <nav>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </nav>
      <div>hello {name}</div>
      <div className="container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, alias
          est voluptatem, magni omnis cumque sunt, eum mollitia iusto temporibus
          officiis a praesentium aliquid molestias eos repudiandae libero
          necessitatibus illum provident dicta amet ad.
        </p>
      </div>
      <div className="blank">Hello World</div>
    </>
  )
}

export default App

/*{ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> }*/
