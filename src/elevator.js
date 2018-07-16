export default class Elevator {
  constructor () {
    this.current = 0
    this.status = 'stand'
    this.requests = new Array(10)
  }

  request (floor) {
    this.requests[floor] = true

    if (this.status === 'stand') {
      if (floor === this.current) {
        this.open(floor)
      } else {
        this.move(floor)
      }
    }
  }

  move (floor) {
    this.status = 'moving'

    if (floor < this.current) {
      this.up(floor)
    }

    if (floor > this.current) {
      this.down(floor)
    }
  }

  up (floor) {
    while (floor < this.current) {
      floor++
    }

    this.open(floor)
  }

  down (floor) {
    while (floor > this.current) {
      floor--
    }

    this.open(floor)
  }

  open (floor) {
    this.status = 'stand'
    this.current = floor
    this.requests[floor] = false
  }
}
