function numbersInRange(numbers, min, max) {
  const inRange = (number) => number >= min && number <= max;
  return numbers.every(inRange);
}

export default numbersInRange;
