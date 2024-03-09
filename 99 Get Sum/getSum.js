function getSum(a, b) {
  // loop until there is no carry
  while (b != 0) {
    // carry holds common set bits of a and b
    let carry = a & b;

    // sum of bits of a and b where at least one of the bits is not set
    a = a ^ b;

    // carry is shifted to 1 bit to add to next position
    b = carry << 1;
  }

  return a;
}
