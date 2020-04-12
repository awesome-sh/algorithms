import { equilibriumIndex } from '../equilibrium-index'

describe('Equilibrium Index', () => {
  it('calculates equilibrium index', function () {
    expect(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])).toBe(3)
  })

  it('returns -1 when there is not equilibrium index', function () {
    expect(equilibriumIndex([-17, 1, 5, 2, -4, 3, 0])).toBe(-1)
  })
})
