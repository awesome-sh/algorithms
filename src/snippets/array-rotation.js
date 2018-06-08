function leftRotation(array, d) {
  // Prevent unnecessary rotations
  d = d % array.length;
  return array.slice(d, array.length).concat(array.slice(0, d));
}

module.exports = leftRotation;
