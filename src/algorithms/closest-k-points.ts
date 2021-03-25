// Stream solution of the "closest K points" problem
import Heap from '../data-structure/heap'
import Comparator from '../helpers/comparator'

export class ClosestKPoints {
  private k: number
  private maxHeap: Heap<HeapPoint>
  private origin: Point

  constructor(origin: Point, k: number) {
    const comparator = new Comparator<HeapPoint>((a, b) => b.dist - a.dist)

    this.origin = origin
    this.k = k
    this.maxHeap = new Heap<HeapPoint>(comparator)
  }

  add(point: Point): void {
    const dist = this.computeDist(point, this.origin)
    const item = { point, dist }

    if (this.maxHeap.size() < this.k) {
      this.maxHeap.add(item)
    } else {
      if (dist < this.maxHeap.peek().dist) {
        this.maxHeap.poll()
        this.maxHeap.add(item)
      }
    }
  }

  get(): Point[] {
    return this.maxHeap.toArray().map((item) => item.point)
  }

  computeDist(point: Point, origin: Point): number {
    return Math.sqrt(
      Math.pow(point[0] - origin[0], 2) + Math.pow(point[1] - origin[1], 2)
    )
  }
}

export type Point = [number, number]

type HeapPoint = {
  point: Point
  dist: number
}
