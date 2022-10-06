import './App.css'
import Navebar from './components/Navebar'
import TextForm from './components/TextForm'

// let name = 'Noman'
function App() {
  return (
    <>
      <Navebar title="Textutils" about="About" />
      {/* <Navebar /> */}
      <div className="container my-3">
        <TextForm heading="Enter your text analyze" />
      </div>
    </>
  )
}
// let name = 'Noman'
// function App() {
//   return (
//     <>
//       <nav>
//         <li>home</li>
//         <li>about</li>
//         <li>contact</li>
//       </nav>
//       <div>hello {name}</div>
//       <div classNameName="container">
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, alias
//           est voluptatem, magni omnis cumque sunt, eum mollitia iusto temporibus
//           officiis a praesentium aliquid molestias eos repudiandae libero
//           necessitatibus illum provident dicta amet ad.
//         </p>
//       </div>
//       <div classNameName="blank">Hello World</div>
//     </>
//   )
// }

export default App

/*{ <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> }*/
