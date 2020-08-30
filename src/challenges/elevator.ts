class Elevator {
  current = 0
  status = 'stand'
  requests: any[] = new Array(10)

  request(floor: number): void {
    this.requests[floor] = true

    if (this.status === 'stand') {
      if (floor === this.current) {
        this.open(floor)
      } else {
        this.move(floor)
      }
    }
  }

  move(floor: number): void {
    this.status = 'moving'

    if (floor < this.current) {
      this.up(floor)
    }

    if (floor > this.current) {
      this.down(floor)
    }
  }

  up(floor: number): void {
    while (floor < this.current) {
      floor++
    }

    this.open(floor)
  }

  down(floor: number): void {
    while (floor > this.current) {
      floor--
    }

    this.open(floor)
  }

  open(floor: number): void {
    this.status = 'stand'
    this.current = floor
    this.requests[floor] = false
  }
}

export default Elevator
