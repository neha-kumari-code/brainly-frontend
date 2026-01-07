
import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
   <div>
    <Button variant='secondary' text='share' size='md' onClick={()=>{}} startIcon={"🎗️"}/>
    <Button variant='primary' text='Add content' size='md' onClick={()=>{}} startIcon={"➕"}/>
   </div>
  )
}

export default App
