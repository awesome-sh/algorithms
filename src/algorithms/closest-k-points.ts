// Stream solution of the "closest K points" problem
import Heap from '../data-structure/heap'

export class ClosestKPoints {
  private k: number
  private maxHeap: Heap<HeapPoint>
  private origin: Point

  constructor(origin: Point, k: number) {
    this.origin = origin
    this.k = k
    this.maxHeap = new Heap<HeapPoint>(null, (a, b) => b.dist - a.dist)
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
    /**
     * Note: Math.sqrt is not needed here because comparing squared node distances will have the same
     * effect as comparing the non-squared distance. So √4 = √4 does the same thing as 4 = 4. However
     * we're keeping it to prevent integer overflow.
     */
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
