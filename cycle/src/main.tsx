import 'normalize.css'
import './preloaded'
import { makeDOMDriver } from '@cycle/dom'
import { run } from '@cycle/run'
import App from './App'

run(App, {
  DOM: makeDOMDriver('#container'),
})
