import NUMBER from "../static/Number.js";

function RangeFilter(inputNumbers) {
  return inputNumbers.some((number) => {
    return number < NUMBER.lottoStart || number > NUMBER.lottoEnd;
  });
}

export default RangeFilter;
