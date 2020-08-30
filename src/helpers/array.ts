export function fill (size: number, value: unknown): any[] {
  return new Array(size).fill(value)
}

export function clone (array: any[]): any[] {
  return array.slice()
}

export function leftRotation (array: any[], n: number): any[] {
  // Prevent unnecessary rotations
  n = n % array.length
  return array.slice(n, array.length).concat(array.slice(0, n))
}

export function swap (array: any[], i: number, j: number): void {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

export function permute<T>(array: T[]): T[][] {
  const res: T[][] = [];

  function backtrack (array: T[], startIndex: number, res: T[][]) {
    const endIndex = array.length-1

    if (startIndex === endIndex) {
      res.push(array.slice());
    }

    for (let i = startIndex; i <= endIndex; i++) {
      swap(array, startIndex, i);
      backtrack(array, startIndex + 1, res);
      swap(array, i, startIndex);
    }
  }

  backtrack(array, 0, res);
  return res;
}


// Good for reversing a string
export function reverse (array: any[]): any[] {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    swap(array, i, j)
  }

  return array
}

export function ranking (array: any[]): any[] {
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

export function matrix (rows: number, cols: number): number[][] {
  return Array(rows).fill(Array(cols))
}
