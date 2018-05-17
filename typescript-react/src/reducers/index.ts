import Action from '../utils/actions'

export interface State {
  foo: string
  bar: number
}

export default function reducer(state: State = {} as any, action: Action): State {
  return {
    foo: 'foo',
    bar: 1234,
  }
}
