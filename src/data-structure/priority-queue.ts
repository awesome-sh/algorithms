import Heap from './heap'

type Item = {
  priority: number;
}

export class MinPriorityQueue extends Heap<Item> {
  protected defaultFn(a: Item, b: Item): number {
    if (a.priority === b.priority) {
      return 0
    }

    return a.priority < b.priority ? -1 : 1
  }
}

export class MaxPriorityQueue extends Heap<Item> {
  protected defaultFn(a: Item, b: Item): number {
    if (a.priority === b.priority) {
      return 0
    }

    return a.priority > b.priority ? -1 : 1
  }
}

export default Heap
