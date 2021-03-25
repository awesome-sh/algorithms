import { ClosestKPoints, Point } from '../closest-k-points'

describe('Closest K Points Stream', () => {
  it('gets the closest K', () => {
    const origin: Point = [1, 1]
    const k = 2
    const closestKPoints = new ClosestKPoints(origin, k)
    const points: Point[] = [
      [0, 1],
      [-1, 3],
      [2, 4],
      [1, 1],
      [13, -2],
    ]

    for (const point of points) {
      closestKPoints.add(point)
    }

    expect(closestKPoints.get()).toEqual([
      [0, 1],
      [1, 1],
    ])
  })
})
