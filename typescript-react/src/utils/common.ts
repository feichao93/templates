// 在该文件中放置一些公共函数

class DefaultMap<K, V> extends Map<K, V> {
  constructor(readonly defaulter: () => V) {
    super()
  }

  get(k: K) {
    if (!this.has(k)) {
      this.set(k, this.defaulter())
    }
    return super.get(k)
  }
}

const nextIdMap = new DefaultMap(() => 1)
export function getNextId(tag: string) {
  const nextId = nextIdMap.get(tag)
  nextIdMap.set(tag, nextId + 1)
  return `${tag}-${nextId}`
}

export function setNextId(tag: string, nextId: number) {
  nextIdMap.set(tag, nextId)
}

export function identity<T>(arg: T): T {
  return arg
}

export function always<T>(value: T) {
  return () => value
}
