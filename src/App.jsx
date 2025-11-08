import './App.css'
import React from 'react'
function App() {
const [myFavrityThings, setMyFavoriteThings] = React.useState([]);

const allMyFavrityThings = ["💦🌹","😺","💡🫖", "🔥🧤", "⚽🎁", "🐕", "🍎🥧", "🔔🚪", "🛎️🫑", "🥩🍝"];
const thingElements = myFavrityThings.map(thing => <p key={thing}>{thing}</p>)
function addFavoriteThing() {
  // Pick a random item from allMyFavrityThings
  setMyFavoriteThings(prevFabThings => [...prevFabThings, allMyFavrityThings[prevFabThings.length]])
}
  return (
<main>
<h1 className='title'>Do I feel like going out tonight</h1>
<button onClick={addFavoriteThing} className='value'>Add Item</button>

<section aria-live='polite'>
{thingElements}
</section>
</main>
  )
}
export default App
