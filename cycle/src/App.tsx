import xs, { Stream } from 'xstream'
import { DOMSource, VNode } from '@cycle/dom'

interface Sources {
  DOM: DOMSource
}
interface Sinks {
  DOM: Stream<VNode>
}

const add = (a: number, b: number) => a + b

export default function CounterApp(sources: Sources): Sinks {
  const domSource = sources.DOM
  const clickDecButton$ = domSource.select('.dec').events('click')
  const clickIncButton$ = domSource.select('.inc').events('click')

  const dec$ = clickDecButton$.mapTo(-1)
  const inc$ = clickIncButton$.mapTo(+1)
  const change$ = xs.merge(dec$, inc$)
  const count$ = change$.fold(add, 0)

  const vdom$ = count$.map(count => (
    <div className="simple-counter">
      <button className="dec"> -1 </button>
      <span>Count: {count} </span>
      <button className="inc"> +1 </button>
    </div>
  ))

  return { DOM: vdom$ }
}
