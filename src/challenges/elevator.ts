class Elevator {
  current: number = 0
  status: string = 'stand'
  requests: any[] = new Array(10)

  request (floor: number) {
    this.requests[floor] = true

    if (this.status === 'stand') {
      if (floor === this.current) {
        this.open(floor)
      } else {
        this.move(floor)
      }
    }
  }

  move (floor: number) {
    this.status = 'moving'

    if (floor < this.current) {
      this.up(floor)
    }

    if (floor > this.current) {
      this.down(floor)
    }
  }

  up (floor: number) {
    while (floor < this.current) {
      floor++
    }

    this.open(floor)
  }

  down (floor: number) {
    while (floor > this.current) {
      floor--
    }

    this.open(floor)
  }

  open (floor: number) {
    this.status = 'stand'
    this.current = floor
    this.requests[floor] = false
  }
}

export default Elevator
