import { equilibriumIndex } from '../equilibrium-index'

describe('Equilibrium Index', () => {
  it('calculates equilibrium index', function () {
    expect(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])).toBe(3)
  })
})
