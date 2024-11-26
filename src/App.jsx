import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Sidenav></Sidenav>
        <Main></Main>
        <Project></Project>
        <Skills></Skills>
        <Contact></Contact>
        
       </div>
  )
}

export default App
