import './App.css'
import React from 'react'
import logo from './assets/chef-claude-icon.png'
function App() {

  return (
<main>
<header>
  <img src={logo} alt="chef-Claude-logo" />
  <h1>Chef Claude</h1>
</header>
<section className='form-container'>
<input className='input-box' type="text" placeholder='e.g oregano'/>
<button>+ Add ingredient</button>
</section>
</main>
  )
}
export default App
