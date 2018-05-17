type Action = Action.ALL

namespace Action {
  export type ALL = Foo | Bar

  export interface Foo {
    type: 'FOO'
    foo: 'foo'
  }

  export interface Bar {
    type: 'BAR'
    bar: 1234
  }
}

export default Action
