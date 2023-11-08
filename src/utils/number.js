export function numberInRange(number, min, max) {
  return number >= min && number <= max;
}

export function numbersInRange(numbers, min, max) {
  const inRange = (number) => number >= min && number <= max;
  return numbers.every(inRange);
}
