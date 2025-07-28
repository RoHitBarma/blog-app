import './App.css'
import Header from './components/Header'
import Approutes from './Approutes'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Approutes />
      </HashRouter>
    </>
  )
}

export default App
