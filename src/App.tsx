
import './App.css'
import { Button } from './components/button'
import { PlusIcon } from './icon/PlusIcon'
import { ShareIcon } from './icon/ShareIcon'
import { Card } from './components/Card'
function App() {
  return (
   <div>
    <Button variant='secondary' text='share' onClick={()=>{}} startIcon={<ShareIcon size="md"/>}/>
    <Button variant='primary' text='Add content' onClick={()=>{}} startIcon={<PlusIcon size="md"/>}/>
    <Card type='twitter' link="https://x.com/kirat_tw/status/163368547382142566" title="First tweet"/>
    <Card type='youtube' link="https://www.youtube.com/watch?v=kAipjcDj410" title="First youtube video"/>
   </div>
  )
}

export default App
