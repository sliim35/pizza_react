import React from 'react'
import { render } from 'react-dom'

import './main.scss'

import $ from 'jquery'
import 'bootstrap'

import App from './App'

window.$ = $

render(
  <App />,
  document.querySelector('#root')
)
