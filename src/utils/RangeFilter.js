import NUMBER from '../constants/Number.js';

function RangeFilter(inputNumbers) {
  return inputNumbers.some((number) => {
    return number < NUMBER.lottoStart || number > NUMBER.lottoEnd;
  });
}

export default RangeFilter;

