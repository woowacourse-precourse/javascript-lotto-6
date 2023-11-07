export default function isDuplicateNumbers(numbers) {
  return numbers.some((number) => {
    return numbers.indexOf(number) !== numbers.lastIndexOf(number);
  });
}
