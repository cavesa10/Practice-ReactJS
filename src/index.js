import React from 'react'
import {render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import HolaMundo from './components/hola-mundo/HolaMundo'

render(<HolaMundo nombre="Carlos" edad="25" tipo="nota"/>, document.querySelector('#root'))

registerServiceWorker()