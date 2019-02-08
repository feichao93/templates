import useSaga from '@little-saga/use-saga'
import React from 'react'
import reducer from '../reducers'
import rootSaga from '../sagas'

export default function App() {
  const [state, dispatch] = useSaga({
    saga: rootSaga,
    reducer,
  })

  console.log(state)

  return <h1>TypeScript ❤️ React</h1>
}
