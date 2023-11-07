export default function checkNumbersRange(numbers) {
  return numbers.every((item) => /^([1-9]|[1-3][0-9]|4[0-5])$/.test(item));
}
