import Heap from '../heap'

describe('Heap', () => {
  describe('MinHeap', () => {
    let heap: Heap<number>

    beforeEach(() => {
      heap = new Heap<number>()
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the minimum element on the top', () => {
      heap.add(3)
      heap.add(1)
      heap.add(1) // with duplicate
      heap.add(2)

      expect(heap.peek()).toBe(1)
    })

    it('always remove the minimum element', () => {
      heap.add(4)
      heap.add(1)
      heap.add(2)
      heap.add(3)

      expect(heap.poll()).toBe(1)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(3)
      expect(heap.poll()).toBe(4)
    })

    it('removes an element in the middle', () => {
      heap.add(4)
      heap.add(1)
      heap.add(2)
      heap.add(3)

      expect(heap.toString()).toBe('1,3,2,4')

      heap.remove(3)

      expect(heap.toString()).toBe('1,4,2')
    })

    it('updates an element by increasing its value', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(8)

      expect(heap.toString()).toBe('1,3,2,8')

      heap.update(3, 9)

      expect(heap.toString()).toBe('1,8,2,9')
    })

    it('updates an element by decreasing its value', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(8)

      expect(heap.toString()).toBe('1,3,2,8')

      heap.update(3, 0)

      expect(heap.toString()).toBe('0,1,2,8')
    })

    it('stringifies the heap', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('1,3,2')
    })

    it('initializes from an existing array', () => {
      const heap = new Heap<number>([3, 1, 2])
      expect(heap.toString()).toBe('1,3,2')
    })
  })

  describe('MaxHeap', () => {
    let heap: Heap<number>
    let comparator: (a: number, b: number) => number

    beforeEach(() => {
      comparator = (a: number, b: number) => b - a
      heap = new Heap<number>(null, comparator)
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the maximum element on the top', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(3)
    })

    it('always remove the maximum element', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(4)

      expect(heap.poll()).toBe(4)
      expect(heap.poll()).toBe(3)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(1)
    })

    it('removes an element in the middle', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(4)

      expect(heap.toString()).toBe('4,3,2,1')

      heap.remove(3)

      expect(heap.toString()).toBe('4,1,2')
    })

    it('updates an element by increasing its value', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(8)

      expect(heap.toString()).toBe('8,3,2,1')

      heap.update(3, 9);

      expect(heap.toString()).toBe('9,8,2,1')
    })

    it('updates an element by decreasing its value', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(8)

      expect(heap.toString()).toBe('8,3,2,1')

      heap.update(3, 0)

      expect(heap.toString()).toBe('8,1,2,0')
    })

    it('stringifies the heap', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('3,1,2')
    })

    it('initializes from an existing array', () => {
      const heap = new Heap<number>([3, 1, 2], comparator)
      expect(heap.toString()).toBe('3,1,2')
    })
  })
})
