// Stream solution of the "closest K points" problem
import { MaxHeap } from '../data-structure/heap'

const maxHeap = new MaxHeap<HeapPoint>()

export const init = (points: Point[], origin: Point, k: number): void => {
  for (let i = 0; i < k; i++) {
    maxHeap.add({
      point: points[i],
      dist: computeDist(points[i], origin),
    })
  }
}

export const add = (point: Point, origin: Point): void => {
  const dist = computeDist(point, origin)

  if (dist < maxHeap.peek().dist) {
    maxHeap.poll()
    maxHeap.add({
      point: point,
      dist: dist,
    })
  }
}

export const closestKPoints = (): Point[] => {
  return maxHeap.toArray().map((item) => item.point)
}

const computeDist = (point: Point, origin: Point): number => {
  return Math.sqrt(
    Math.pow(point[0] - origin[0], 2) + Math.pow(point[1] - origin[1], 2)
  )
}

type Point = [number, number]

type HeapPoint = {
  point: Point
  dist: number
}

/* Consolidated in one function */
// export const closestKPoints2 = (point: Point, origin: Point, k: number): void => {
//   if (maxHeap.size() < k) {
//     maxHeap.add({
//       point: point,
//       dist: computeDist(point, origin),
//     })
//   } else {
//     const dist = computeDist(point, origin)

//     if (dist < maxHeap.peek().dist) {
//       maxHeap.poll()
//       maxHeap.add({
//         point: point,
//         dist: dist,
//       })
//     }
//   }
// }
