import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="relative w-full h-auto bg-[url('https://images.unsplash.com/photo-1551554781-c46200ea959d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <Sidenav></Sidenav>
        <Main></Main>
        <Project></Project>
        <Skills></Skills>
        <Contact></Contact>
        
       </div>
  )
}

export default App
