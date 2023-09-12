import Languages from './components/Languages'
import MainContents from './components/MainContents'
import NavBar from './components/NavBar'
import Projetos from './components/Projetos'
import './styles/components/app.sass'

function App() {
  

  return (
    <>
        <NavBar />
        <div id='portfolio'>
        <MainContents />
        <Languages />
        <Projetos />

      </div>
      
    </>
  )
}

export default App
