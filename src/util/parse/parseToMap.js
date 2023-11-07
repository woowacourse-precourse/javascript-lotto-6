export default function parseToMap(matchResult) {
  const result = new Map([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
  matchResult.forEach((element) => {
    if (result.has(element)) {
      result.set(element, result.get(element) + 1);
    }
  });
  return result;
}
