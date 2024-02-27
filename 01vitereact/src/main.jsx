import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
    <a href='https://google.com' target='_blank'>Click Me !!!!</a>
)

const anotherUsername = " Mihir"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    "Visit Google...........",
    anotherUsername
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
