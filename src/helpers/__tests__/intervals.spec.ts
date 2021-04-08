import { isOverlap, isOverlap2, mergeOverlappingIntervals } from '../intervals'

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

    it('detects a touching overlap', () => {
      expect(isOverlap([1, 3], [3, 7])).toEqual(true)
    })
  })

  describe('isOverlap2', () => {
    it('detects an overlap with ascending start', () => {
      expect(isOverlap2([1, 5], [4, 7])).toEqual(true)
    })

    it('detects an overlap with descending start', () => {
      expect(isOverlap2([4, 7], [1, 5])).toEqual(true)
    })

    it('detects a non-overlap', () => {
      expect(isOverlap2([1, 3], [4, 7])).toEqual(false)
    })

    it('detects a touching overlap', () => {
      expect(isOverlap2([1, 3], [3, 7])).toEqual(true)
    })
  })

  describe('mergeOverlappingIntervals', () => {
    it('merges an overlap', () => {
      expect(mergeOverlappingIntervals([1, 5], [4, 7])).toEqual([1, 7])
    })
  })
})
