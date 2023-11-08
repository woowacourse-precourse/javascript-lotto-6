import STATIC_NUMBER from "../constant/StaticNumber";

function RangeTest(inputNumbers) {
  return inputNumbers.some((number) => {
    return (
      number < STATIC_NUMBER.LOTTO_START_NUMBER ||
      number > STATIC_NUMBER.LOTTO_END_NUMBER
    );
  });
}

export default RangeTest;
