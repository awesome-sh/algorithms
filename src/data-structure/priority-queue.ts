import Heap from './heap'

type Item = {
  identifier: string;
  priority: number;
}

class PriorityQueue extends Heap<Item> {
  updatePriority(identifier: string, priority: number): void {
    const index = this.list.findIndex(listItem => listItem.identifier === identifier)
    const item = this.list.get(index);
    item.priority = priority;

    this.heapifyDown(index) // Check if it should go down and do it if it should
    this.heapifyUp(index) // Check if it should go up and do it if it should
  }

  protected defaultFn(a: Item, b: Item): number {
    if (a.priority === b.priority) {
      return 0
    }

    return a.priority < b.priority ? -1 : 1
  }
}

export class MinPriorityQueue extends PriorityQueue {
  protected defaultFn(a: Item, b: Item): number {
    if (a.priority === b.priority) {
      return 0
    }

    return a.priority < b.priority ? -1 : 1
  }
}

export class MaxPriorityQueue extends PriorityQueue {
  protected defaultFn(a: Item, b: Item): number {
    if (a.priority === b.priority) {
      return 0
    }

    return a.priority > b.priority ? -1 : 1
  }
}

export default Heap
