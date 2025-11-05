import './App.css'
import React from 'react'
function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true)
  return (
<main>
<h1 className='title'>Do I feel like going out tonight</h1>
<button  className='value'>Add Item</button>
</main>
  )
}
export default App
