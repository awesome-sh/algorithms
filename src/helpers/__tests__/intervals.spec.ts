import { isOverlap, mergeOverlappingIntervals } from '../intervals'

describe('Intervals', () => {
  describe('isOverlap', () => {
    it('detects an overlap with ascending start', () => {
      expect(isOverlap([1, 5], [4, 7])).toEqual(true)
    })

    it('detects an overlap with descending start', () => {
      expect(isOverlap([4, 7], [1, 5])).toEqual(true)
    })

    it('detects a non-overlap', () => {
      expect(isOverlap([1, 3], [4, 7])).toEqual(false)
    })
  })

  describe('mergeOverlappingIntervals', () => {
    it('merges an overlap', () => {
      expect(mergeOverlappingIntervals([1, 5], [4, 7])).toEqual([1, 7])
    })
  })
})
