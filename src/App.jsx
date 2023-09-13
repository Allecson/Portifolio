
import Languages from './components/Languages'
import MainContents from './components/MainContents'
import NavBar from './components/NavBar'
import Projetos from './components/Projetos'
import Contacts from './components/Contacts'

import './styles/components/app.sass'

function App() {
  

  return (
    <>
        <NavBar />
        <MainContents />
        <Languages />
        <Projetos />
        <Contacts /> 
    </>
  )
}

export default App
