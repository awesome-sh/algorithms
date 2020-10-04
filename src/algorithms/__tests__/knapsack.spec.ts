import { knapsack } from '../knapsack'

describe('Knapsack', () => {
  it('computes the max value given an object list and a sack capacity', () => {
    const profits = [5, 3, 5, 3, 2]
    const weights = [1, 2, 4, 2, 5]
    const capacity = 10

    expect(knapsack(profits, weights, capacity)).toBe(11)
  })

  it('computes the same max value no matter the objects order', () => {
    let profits: number[], weights: number[], capacity: number

    profits = [5, 3, 5, 2, 3]
    weights = [1, 2, 4, 5, 2]
    capacity = 10

    expect(knapsack(profits, weights, capacity)).toBe(11)

    profits = [3, 5, 3, 2, 5]
    weights = [2, 1, 2, 5, 4]
    capacity = 10

    expect(knapsack(profits, weights, capacity)).toBe(11)
  })
})
